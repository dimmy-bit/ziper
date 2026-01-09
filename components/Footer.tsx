
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('features');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }
  };

  const scrollToStyles = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('styles-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showPolicyModal = (title: string) => {
    const message = title === 'Privacy Policy' 
      ? "ZIPER Privacy Policy: We do not store your images on our servers. All processing is transient and ephemeral. Your data is yours."
      : title === 'Terms of Service'
      ? "ZIPER Terms: By using this tool, you agree to generate ethical content. ZIPER is a creative platform built for the professional creator community."
      : "ZIPER Fair Usage: We provide unlimited generations for human creators. Please avoid automated bulk requests to keep the service free for everyone.";
    alert(`${title}\n\n${message}`);
  };

  return (
    <footer className="py-20 px-6 border-t border-gray-900/50 bg-[#0B0D10] relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-6 cursor-pointer group" onClick={scrollToTop}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#38BDF8] flex items-center justify-center font-black text-white italic text-xl shadow-lg shadow-[#7C3AED]/20 group-hover:scale-110 transition-transform">Z</div>
            <span className="text-2xl font-bold tracking-tighter text-white">ZIPER</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            The world's most advanced AI styling engine for modern creators. Transform your digital footprint with one click.
          </p>
          <div className="flex items-center gap-4 text-xs font-bold text-[#A3E635] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#A3E635] animate-pulse"></span>
            System Operational
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-10">
          <div className="flex flex-col gap-5">
            <p className="text-white font-bold uppercase tracking-widest text-[11px] opacity-50">Product</p>
            <nav className="flex flex-col gap-3 text-sm">
              <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors text-left">How it works</button>
              <button onClick={scrollToStyles} className="text-gray-400 hover:text-white transition-colors text-left">Styles Catalog</button>
              <button onClick={() => alert("ZIPER 2.5: Optimized subject retention and high-fidelity rendering.")} className="text-gray-400 hover:text-white transition-colors text-left">Release Notes</button>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white font-bold uppercase tracking-widest text-[11px] opacity-50">Company</p>
            <nav className="flex flex-col gap-3 text-sm">
              <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors text-left">About ZIPER</button>
              <a href="https://x.com/0XMIRX" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#38BDF8] transition-colors flex items-center gap-2">
                Twitter <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white font-bold uppercase tracking-widest text-[11px] opacity-50">Policy</p>
            <nav className="flex flex-col gap-3 text-sm">
              <button onClick={() => showPolicyModal('Privacy Policy')} className="text-gray-400 hover:text-white transition-colors text-left">Privacy Policy</button>
              <button onClick={() => showPolicyModal('Terms of Service')} className="text-gray-400 hover:text-white transition-colors text-left">Terms of Service</button>
              <button onClick={() => showPolicyModal('Fair Usage')} className="text-gray-400 hover:text-white transition-colors text-left">Fair Usage</button>
            </nav>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-gray-500">
          © 2026 <span className="text-white font-semibold">ZIPER</span>. Engineered for the next generation.
        </div>
        <div className="flex items-center gap-6">
          <p className="text-xs text-gray-500">Built for <span className="text-[#A3E635] font-bold">creators</span> by creators</p>
          <div className="h-4 w-[1px] bg-gray-800"></div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
            <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
