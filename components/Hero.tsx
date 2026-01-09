
import React from 'react';
import { AppView } from '../types';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-[#7C3AED] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 -right-20 w-96 h-96 bg-[#38BDF8] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 text-[#A3E635] text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
          ✨ Powered by MIR
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Reimagine Your <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] via-[#38BDF8] to-[#A3E635]">
            Visual Identity.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
          ZIPER transforms your photos into professional stylized artwork. 
          No watermarks. No signups. Just pure creative freedom.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-10 py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 neon-glow-purple"
          >
            Start Creating Free
          </button>
          <button 
            className="w-full sm:w-auto px-10 py-4 bg-gray-900/50 border border-gray-800 text-gray-300 hover:text-white rounded-2xl font-bold text-lg transition-all hover:bg-gray-800"
            onClick={() => document.getElementById('styles-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Styles
          </button>
        </div>
      </div>

      {/* Hero Preview Image / Mock */}
      <div className="mt-20 relative w-full max-w-5xl mx-auto">
        <div className="relative rounded-[30px] overflow-hidden border border-gray-800 glass-card p-2 md:p-4 animate-fade-in-up">
          <img 
            src="https://picsum.photos/seed/ziper-hero/1200/600" 
            alt="ZIPER Interface Preview" 
            className="w-full h-auto rounded-[20px] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-60" />
        </div>
        
        {/* Floating UI Elements */}
        <div className="absolute -bottom-10 -left-6 md:left-10 glass-card p-4 rounded-2xl border border-[#7C3AED]/30 shadow-2xl animate-bounce-slow">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-xl">🍬</div>
              <div className="text-left">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Style Active</p>
                <p className="text-sm text-white font-bold">Gummy 3D</p>
              </div>
           </div>
        </div>
        
        <div className="absolute top-20 -right-4 md:right-10 glass-card p-4 rounded-2xl border border-[#38BDF8]/30 shadow-2xl hidden md:block animate-float">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/20 flex items-center justify-center text-xl">✨</div>
              <div className="text-left">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Processing</p>
                <p className="text-sm text-white font-bold">Enhancing Faces...</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
