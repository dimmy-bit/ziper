
import React, { useState, useEffect } from 'react';
import { AppView } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StylesSection from './components/StylesSection';
import AppInterface from './components/AppInterface';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.LANDING);

  // Smooth scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#E5E7EB] selection:bg-[#7C3AED] selection:text-white">
      <Navbar currentView={view} setView={setView} />
      
      <main>
        {view === AppView.LANDING ? (
          <>
            <Hero onStart={() => setView(AppView.APP)} />
            
            <div id="features" className="py-32 px-6 bg-[#0B0D10] relative">
               <div className="max-w-7xl mx-auto">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group relative p-10 rounded-[40px] bg-[#111318]/60 border border-gray-800/50 hover:border-[#7C3AED]/30 transition-all duration-500 glass-card">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-transparent rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#7C3AED]/10 flex items-center justify-center text-3xl shadow-lg shadow-[#7C3AED]/10 group-hover:scale-110 transition-transform">
                          ⚡
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">Lightning Fast</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                          Our distributed serverless architecture processes complex image generations in sub-3-second bursts.
                        </p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="group relative p-10 rounded-[40px] bg-[#111318]/60 border border-gray-800/50 hover:border-[#38BDF8]/30 transition-all duration-500 glass-card">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 to-transparent rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center text-3xl shadow-lg shadow-[#38BDF8]/10 group-hover:scale-110 transition-transform">
                          🛡️
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">Privacy First</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                          Encrypted end-to-end. Your photos are processed in-memory and purged immediately after download.
                        </p>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="group relative p-10 rounded-[40px] bg-[#111318]/60 border border-gray-800/50 hover:border-[#A3E635]/30 transition-all duration-500 glass-card">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#A3E635]/5 to-transparent rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#A3E635]/10 flex items-center justify-center text-3xl shadow-lg shadow-[#A3E635]/10 group-hover:scale-110 transition-transform">
                          💎
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">Pro Quality</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                          Leveraging MIR for industry-leading subject retention and artistic style fidelity.
                        </p>
                      </div>
                    </div>
                 </div>
               </div>
            </div>

            <StylesSection />
            
            {/* CTA Section */}
            <section className="py-32 px-6 relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED]/10 blur-[200px] rounded-full"></div>
               <div className="max-w-4xl mx-auto glass-card p-16 rounded-[48px] border border-gray-800/50 text-center relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">Craft Your Next <br/> Masterpiece Now.</h2>
                  <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-light">Join the movement of creators redefining visual storytelling. Free forever, premium always.</p>
                  <button 
                    onClick={() => setView(AppView.APP)}
                    className="px-14 py-6 bg-white text-black rounded-[24px] font-black text-xl hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
                  >
                    Launch ZIPER App
                  </button>
               </div>
            </section>
          </>
        ) : (
          <AppInterface />
        )}
      </main>

      <Footer />

      {/* Tailwind specific animations and styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-spin-reverse { animation: spin-reverse 2s linear infinite; }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .glass-card {
          background: rgba(17, 19, 24, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </div>
  );
};

export default App;
