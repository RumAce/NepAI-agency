import React from 'react';
import { ShieldCheck, TrendingUp, Users, Search } from 'lucide-react';
import Reveal from './Reveal';
import Parallax from './Parallax';

const TrustSection: React.FC = () => {
  return (
    <div className="py-32 bg-brandDark border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Us */}
        <div className="mb-32">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-brandSaffron font-black tracking-[0.2em] uppercase text-sm mb-4">Precision over Guesswork</h2>
              <h2 className="text-4xl md:text-5xl font-black text-white">Why Brands Switch to NepAI</h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp />, title: "AI-First Approach", desc: "Data driven, not guesswork." },
              { icon: <Users />, title: "Built for Nepal", desc: "Local context & nuance." },
              { icon: <Search />, title: "Transparent", desc: "No hidden fees or jargon." },
              { icon: <ShieldCheck />, title: "Performance Focused", desc: "Leads & sales, not vanity." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex flex-col items-center text-center p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:bg-slate-900/80 transition-colors h-full group hover:border-brandSaffron/20">
                  <div className="text-brandSaffron w-12 h-12 mb-6 [&>svg]:w-full [&>svg]:h-full transition-transform hover:scale-110 animate-float" style={{animationDelay: `${i*0.2}s`}}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="relative pt-12">
          <Reveal>
            <div className="text-center mb-20">
               <h2 className="text-brandSaffron font-black tracking-[0.2em] uppercase text-sm mb-4">The Process</h2>
              <h2 className="text-4xl md:text-5xl font-black text-white">How It Works</h2>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10 transform -translate-y-1/2"></div>

            {[
              { 
                step: "01", 
                title: "Understand Your Business", 
                desc: "We learn your goals, customers, and budget before touching ads." 
              },
              { 
                step: "02", 
                title: "Launch AI-Campaigns", 
                desc: "We use AI to create multiple creatives, test faster, and reduce wasted spend." 
              },
              { 
                step: "03", 
                title: "Optimize & Scale", 
                desc: "Weekly optimization, clear reports, and continuous improvement." 
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 200}>
                <div className="bg-brandDark p-6 relative">
                  <Parallax speed={-0.05} className="mb-8 mx-auto w-16 h-16">
                     <div className="w-16 h-16 bg-slate-900 text-brandSaffron rounded-2xl flex items-center justify-center text-2xl font-black border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-brandSaffron/50 transition-colors">
                        {item.step}
                     </div>
                  </Parallax>
                  <h3 className="text-xl font-bold text-white text-center mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-center leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrustSection;