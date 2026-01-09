
import React, { useState, useRef } from 'react';
import { STYLES } from '../constants';
import { StyleOption } from '../types';
import { GeminiService } from '../services/geminiService';

const AppInterface: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<StyleOption | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const gemini = GeminiService.getInstance();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB limit.");
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setResultImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!image || !selectedStyle) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const result = await gemini.transformImage(image, selectedStyle.prompt);
      setResultImage(result);
      
      gemini.logGeneration({
        style: selectedStyle.id,
        status: 'success',
        timestamp: Date.now()
      });
    } catch (err) {
      setError("Something went wrong during generation. Please try again.");
      gemini.logGeneration({
        style: selectedStyle?.id,
        status: 'error',
        error_type: 'transformation_failed'
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = () => {
    if (!resultImage) return;
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = `ziper-${selectedStyle?.id || 'result'}-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetApp = () => {
    setImage(null);
    setResultImage(null);
    setSelectedStyle(null);
    setError(null);
  };

  return (
    <div className="pt-24 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Upload & Style Selection */}
        <div className="space-y-10 animate-fade-in-left">
          <section>
            <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#38BDF8] text-white flex items-center justify-center text-lg font-black shadow-lg shadow-[#7C3AED]/20">1</span>
              Source Image
            </h2>
            
            <div 
              onClick={() => fileInputRef.current?.click()}
              className={`relative border-2 border-dashed rounded-[40px] transition-all duration-500 cursor-pointer flex flex-col items-center justify-center min-h-[340px] group overflow-hidden ${
                image ? 'border-[#7C3AED]/50 bg-[#7C3AED]/5 shadow-2xl shadow-[#7C3AED]/5' : 'border-gray-800 hover:border-gray-700 bg-gray-900/20 hover:bg-gray-900/40'
              }`}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleImageUpload} 
              />
              
              {image ? (
                <div className="relative w-full h-full p-8 flex items-center justify-center">
                  <img src={image} alt="Upload" className="max-h-[280px] rounded-[32px] shadow-2xl object-contain border border-white/5" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <span className="text-white font-black px-8 py-4 bg-gray-900/90 rounded-2xl text-sm border border-white/10 shadow-2xl tracking-widest uppercase">Replace Visual</span>
                  </div>
                </div>
              ) : (
                <div className="text-center p-12">
                  <div className="w-20 h-20 bg-gray-800/50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-[#7C3AED]/20 transition-all duration-500 shadow-xl">
                    <svg className="w-10 h-10 text-gray-400 group-hover:text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="text-white font-black text-xl mb-2 tracking-tight">Drop your masterpiece here</p>
                  <p className="text-gray-500 text-sm font-medium">PNG, JPG, or WEBP (Upto 5MB)</p>
                </div>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#38BDF8] to-[#A3E635] text-white flex items-center justify-center text-lg font-black shadow-lg shadow-[#38BDF8]/20">2</span>
              Style Palette
            </h2>
            
            <div className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide no-scrollbar -mx-2 px-2">
              {STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style)}
                  className={`flex-shrink-0 w-36 p-6 rounded-[32px] border transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden ${
                    selectedStyle?.id === style.id 
                    ? 'bg-[#111318] border-[#7C3AED] shadow-2xl shadow-[#7C3AED]/20 scale-105' 
                    : 'bg-gray-900/30 border-gray-800/50 hover:border-gray-600 hover:bg-gray-900/60'
                  }`}
                >
                  {selectedStyle?.id === style.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-transparent opacity-50" />
                  )}
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 relative z-10">{style.icon}</div>
                  <span className={`text-[11px] font-black uppercase tracking-[0.2em] relative z-10 ${selectedStyle?.id === style.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {style.name}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <button
            disabled={!image || !selectedStyle || isGenerating}
            onClick={handleGenerate}
            className={`w-full py-7 rounded-[32px] font-black text-2xl transition-all duration-500 flex items-center justify-center gap-5 shadow-2xl overflow-hidden relative group ${
              !image || !selectedStyle || isGenerating
              ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
              : 'bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#38BDF8] text-white hover:scale-[1.03] active:scale-[0.97] shadow-[#7C3AED]/30'
            }`}
          >
            {isGenerating ? (
              <>
                <div className="w-7 h-7 border-[4px] border-white/20 border-t-white rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Transform Art
              </>
            )}
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-[-20deg]" />
          </button>
          
          {error && (
            <div className="p-6 rounded-[28px] bg-red-900/10 border border-red-800/30 text-red-400 text-sm font-medium flex items-center gap-5 animate-shake">
              <div className="w-10 h-10 rounded-xl bg-red-900/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {error}
            </div>
          )}
        </div>

        {/* Right Column: Result Display */}
        <div className="lg:sticky lg:top-24 space-y-10 animate-fade-in-right">
          <div className="relative min-h-[560px] rounded-[48px] border border-gray-800/50 glass-card overflow-hidden flex flex-col items-center justify-center p-10 bg-[#111318]/20 shadow-2xl">
            {!resultImage && !isGenerating ? (
              <div className="text-center">
                <div className="w-28 h-28 bg-gray-900/80 rounded-[40px] border border-gray-800/50 flex items-center justify-center mx-auto mb-10 shadow-inner group transition-transform hover:scale-105">
                   <svg className="w-14 h-14 text-gray-700 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-400 mb-3 tracking-tight">Creative Canvas</h3>
                <p className="text-gray-600 text-sm font-medium">Upload a photo to start the magic.</p>
              </div>
            ) : isGenerating ? (
              <div className="flex flex-col items-center gap-12">
                <div className="relative w-48 h-48">
                   <div className="absolute inset-0 rounded-full border-[6px] border-[#7C3AED]/10 border-t-[#7C3AED] animate-spin"></div>
                   <div className="absolute inset-8 rounded-full border-[6px] border-[#38BDF8]/10 border-t-[#38BDF8] animate-spin-reverse"></div>
                   <div className="absolute inset-0 flex items-center justify-center text-5xl animate-pulse">🪄</div>
                </div>
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-black text-white tracking-tighter">RENDERING</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#7C3AED] rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                    <span className="w-1.5 h-1.5 bg-[#38BDF8] rounded-full animate-bounce" style={{animationDelay: '200ms'}}></span>
                    <span className="w-1.5 h-1.5 bg-[#A3E635] rounded-full animate-bounce" style={{animationDelay: '400ms'}}></span>
                  </div>
                  <p className="text-sm text-gray-500 font-bold tracking-[0.3em] uppercase opacity-50">Calibrating Pixels</p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center gap-10">
                <div className="relative group w-full">
                  <img src={resultImage!} alt="Result" className="w-full h-auto rounded-[36px] shadow-2xl border border-white/5 max-h-[60vh] object-contain mx-auto transition-transform duration-700 hover:scale-[1.02]" />
                  <div className="absolute top-8 right-8 px-6 py-2.5 bg-black/70 backdrop-blur-2xl rounded-2xl text-[11px] font-black text-white uppercase tracking-[0.3em] border border-white/10 shadow-2xl">
                    ZIPER Pro V2
                  </div>
                </div>
                
                <div className="w-full flex flex-col gap-5">
                  <button
                    onClick={downloadImage}
                    className="w-full py-6 bg-white text-black hover:bg-gray-100 rounded-[28px] font-black text-xl flex items-center justify-center gap-4 transition-all active:scale-[0.97] shadow-2xl shadow-white/5"
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download High-Res
                  </button>
                  
                  <button
                    onClick={resetApp}
                    className="w-full py-5 bg-gray-900/30 border border-gray-800/50 text-gray-500 hover:text-white hover:bg-gray-800/80 rounded-[28px] font-black text-sm uppercase tracking-[0.2em] transition-all"
                  >
                    Start New Project
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-7 rounded-[36px] bg-[#A3E635]/5 border border-[#A3E635]/20 flex items-start gap-6 group hover:bg-[#A3E635]/10 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#A3E635]/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">✨</div>
            <div className="space-y-2">
              <p className="text-base font-black text-[#A3E635] tracking-tight">Pro Creator Styling</p>
              <p className="text-xs text-[#A3E635]/70 leading-relaxed font-medium">
                ZIPER is built for creators who demand high-fidelity artistic renders without the wait. 
                All generations are processed in real-time with zero watermarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInterface;
