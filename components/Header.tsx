import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Services', value: Page.SERVICES },
    { label: 'About', value: Page.ABOUT },
    { label: 'Contact', value: Page.CONTACT },
  ];

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/9779808493504?text=Namaste%20NepAI%2C%20I%20would%20like%20to%20book%20a%20free%20strategy%20call.', '_blank');
  };

  return (
    <nav className="fixed w-full z-50 bg-brandDark/80 backdrop-blur-xl border-b border-slate-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNav(Page.HOME)}
          >
             <div className="group-hover:scale-110 transition-transform duration-300">
               <Logo className="w-10 h-10" />
             </div>
             <span className="text-2xl font-black text-white tracking-tighter group-hover:opacity-80 transition-opacity">
              Nep<span className="text-brandSaffron">AI</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`text-sm font-medium transition-all duration-200 ${
                  currentPage === item.value
                    ? 'text-brandSaffron font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-brandSaffron to-brandSaffronDark hover:from-orange-400 hover:to-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5"
            >
              Get Free Strategy Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brandDark border-b border-slate-800 shadow-2xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`block w-full text-left px-3 py-4 rounded-xl text-base font-medium ${
                  currentPage === item.value
                    ? 'bg-slate-800 text-brandSaffron'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
               <button 
                onClick={openWhatsApp}
                className="w-full bg-gradient-to-r from-brandSaffron to-brandSaffronDark text-white px-5 py-4 rounded-xl text-center font-bold shadow-lg"
              >
                Get Free Strategy Call
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;