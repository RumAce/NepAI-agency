import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesList from './components/ServicesList';
import TrustSection from './components/TrustSection';
import ContactForm from './components/ContactForm';
import AIStrategyGenerator from './components/AIStrategyGenerator';
import ROISimulator from './components/ROISimulator';
import ChatBot from './components/ChatBot';
import Reveal from './components/Reveal';
import TestimonialSection from './components/TestimonialSection';
import VideoShowcase from './components/VideoShowcase';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const openWhatsApp = () => {
    window.open('https://wa.me/9779808493504?text=Namaste%20NepAI%2C%20I%20would%20like%20to%20book%20a%20free%20strategy%20call.', '_blank');
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return (
          <>
            <Hero 
              onCtaClick={() => setCurrentPage(Page.CONTACT)} 
              onLearnMoreClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
               <AIStrategyGenerator />
            </div>
            
            <ROISimulator />
            
            <div id="how-it-works">
                <TrustSection />
            </div>
            <ServicesList />
            <VideoShowcase />
            <TestimonialSection />
            <div className="bg-brandDark border-t border-slate-900 py-32 text-center text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brandSaffron/10 rounded-full blur-[120px] pointer-events-none"></div>
                <Reveal>
                  <h2 className="text-5xl md:text-6xl font-black mb-10 tracking-tight leading-tight">Want More Customers in <span className="text-brandSaffron">Q1 2026?</span></h2>
                  <button 
                    onClick={openWhatsApp}
                    className="bg-gradient-to-r from-brandSaffron to-brandSaffronDark text-white px-12 py-5 rounded-full font-black text-xl hover:shadow-[0_0_50px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1 inline-block"
                  >
                      Book a Free Strategy Call
                  </button>
                </Reveal>
            </div>
          </>
        );
      case Page.SERVICES:
        return (
          <>
            <ServicesList />
            <VideoShowcase />
          </>
        );
      case Page.ABOUT:
        return (
          <div className="py-32 bg-brandDark text-slate-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <Reveal>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-8">About <span className="text-brandSaffron">NepAI</span></h1>
                <p className="text-2xl text-slate-400 mb-16 leading-relaxed font-light">
                  NepAI Marketing was created to solve one problem: <br />
                  <span className="font-bold text-white">Nepali businesses spend money on ads — but don’t get results or clarity.</span>
                </p>
              </Reveal>
              
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {['AI Technology', 'Performance Focus', 'Local Understanding'].map((title, idx) => (
                  <Reveal key={idx} delay={idx * 150}>
                    <div className="p-10 bg-slate-900/50 border border-white/5 rounded-[2rem] h-full hover:border-brandSaffron/30 transition-all hover:-translate-y-2 duration-300">
                      <h3 className="font-bold text-xl mb-4 text-white">{title}</h3>
                      <p className="text-slate-400 text-base leading-relaxed">
                        {title === 'AI Technology' && 'Leveraging cutting-edge tools for faster testing and better targeting.'}
                        {title === 'Performance Focus' && 'We care about your ROI, not just likes and shares.'}
                        {title === 'Local Understanding' && 'Marketing that speaks the language of the Nepali consumer.'}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={300}>
                <div className="text-left bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-[80px]"></div>
                  <h3 className="text-3xl font-black text-white mb-8 relative z-10">Our Values</h3>
                  <ul className="space-y-6 text-slate-300 text-lg relative z-10">
                    <li className="flex items-center font-medium"><span className="text-brandSaffron mr-4 text-2xl">✔</span> Transparency over hype</li>
                    <li className="flex items-center font-medium"><span className="text-brandSaffron mr-4 text-2xl">✔</span> Results over impressions</li>
                    <li className="flex items-center font-medium"><span className="text-brandSaffron mr-4 text-2xl">✔</span> Long-term partnerships</li>
                    <li className="flex items-center font-medium"><span className="text-brandSaffron mr-4 text-2xl">✔</span> Ethical & responsible AI use</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        );
      case Page.CONTACT:
        return <ContactForm />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-brandDark text-slate-50 font-sans selection:bg-brandSaffron selection:text-white overflow-x-hidden">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderContent()}
      </main>
      <ChatBot />
      <Footer navigateTo={setCurrentPage} />
    </div>
  );
};

export default App;