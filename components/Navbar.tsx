
import React from 'react';
import { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass-card border-b border-gray-800/50">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => setView(AppView.LANDING)}
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#38BDF8] flex items-center justify-center font-black text-white italic group-hover:scale-110 transition-transform">
          Z
        </div>
        <span className="text-xl font-bold tracking-tighter text-white">ZIPER</span>
      </div>
      
      <div className="flex items-center gap-6">
        <button 
          onClick={() => setView(AppView.LANDING)}
          className={`text-sm font-medium transition-colors hover:text-white ${currentView === AppView.LANDING ? 'text-white' : 'text-gray-400'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setView(AppView.APP)}
          className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
            currentView === AppView.APP 
            ? 'bg-gradient-to-r from-[#7C3AED] to-[#38BDF8] text-white' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {currentView === AppView.APP ? 'App View' : 'Get Started'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
