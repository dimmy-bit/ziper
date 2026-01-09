
import React from 'react';
import { STYLES } from '../constants';

const StylesSection: React.FC = () => {
  return (
    <section id="styles-section" className="py-32 px-6 bg-[#0B0D10] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#38BDF8]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Choose Your <span className="text-[#38BDF8]">Vibe</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Each style is meticulously calibrated for professional output. 
            Select a template and watch your content evolve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {STYLES.map((style) => (
            <div 
              key={style.id}
              className="group relative p-8 rounded-[32px] bg-[#111318]/40 border border-gray-800/50 transition-all duration-500 hover:border-[#7C3AED]/30 hover:bg-[#111318] hover:-translate-y-3 glass-card"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-[24px] bg-gray-900 border border-gray-800 flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-[#7C3AED]/20">
                  {style.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#7C3AED] transition-colors">{style.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[60px]">
                  {style.description}
                </p>
                <button 
                  onClick={() => alert(`The ${style.name} style is powered by our custom-tuned MIR model, specifically optimized for high-fidelity subject retention.`)}
                  className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.2em] transition-all group-hover:gap-5"
                >
                  <span className="pb-1 border-b-2 border-transparent group-hover:border-[#7C3AED]">Explore Style</span>
                  <span className="text-[#7C3AED] text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesSection;
