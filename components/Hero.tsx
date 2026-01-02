import React from 'react';
import { ArrowRight, PlayCircle, TrendingUp, Users } from 'lucide-react';
import Reveal from './Reveal';
import Parallax from './Parallax';

interface HeroProps {
  onCtaClick: () => void;
  onLearnMoreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onLearnMoreClick }) => {
  return (
    <div className="relative overflow-hidden bg-brandDark pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-[90vh] flex items-center">
      
      {/* Animated Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brandSaffron/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-60" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left mb-16 lg:mb-0">
            <Reveal>
              <span className="inline-block py-2 px-5 rounded-full bg-slate-900/80 border border-slate-700 text-brandSaffron text-sm font-black uppercase tracking-widest mb-8 backdrop-blur-sm shadow-xl">
                Build for 2026
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.95] drop-shadow-2xl">
                <span className="block mb-2">AI-Powered</span>
                {/* Fixed bg-clip-text issue by removing large padding and ensuring inline-block behavior within block context if needed */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandSaffron to-brandSaffronDark">
                  Marketing
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium">
                Scale your business with <span className="text-white font-bold">NepAI Marketing Agency</span>. We blend <span className="text-blue-400 font-bold">global AI tech</span> with <span className="text-brandSaffron font-bold">local market insights</span>.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 w-full sm:w-auto">
                <button 
                  onClick={onCtaClick}
                  className="group flex items-center justify-center px-10 py-5 rounded-full text-xl font-black text-white bg-gradient-to-r from-brandSaffron to-brandSaffronDark hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1"
                >
                  Start Growing Now
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform stroke-[3px]" />
                </button>
                
                <button 
                  onClick={onLearnMoreClick}
                  className="flex items-center justify-center px-10 py-5 rounded-full text-xl font-bold text-white bg-slate-800/50 border border-white/10 hover:bg-slate-800 hover:border-white/20 backdrop-blur-md transition-all shadow-lg"
                >
                  <PlayCircle className="mr-3 w-6 h-6 text-slate-400" />
                  How It Works
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Visual - Floating Card */}
          <div className="hidden lg:block relative perspective-1000">
             <Reveal delay={400} className="w-full flex justify-center lg:justify-end">
                <div className="relative animate-float">
                   {/* Main Card */}
                   <div className="relative z-20 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-1.5 rounded-[2.5rem] shadow-2xl border border-white/10 w-[420px] backdrop-blur-xl">
                      <div className="bg-slate-950/90 rounded-[2.2rem] p-10 text-center relative overflow-hidden">
                          {/* Glow effect inside card */}
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
                          
                          <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-600/20 rounded-3xl mb-8 shadow-inner ring-1 ring-white/10">
                              <TrendingUp className="w-12 h-12 text-blue-400" />
                          </div>
                          
                          <h3 className="text-6xl font-black text-white mb-2 tracking-tight">+140%</h3>
                          <p className="text-slate-400 uppercase tracking-widest text-sm font-black mb-8">Average Growth Rate</p>
                          
                          <div className="pt-8 border-t border-white/10 flex justify-between items-center px-4">
                              <div className="text-left">
                                  <div className="text-3xl font-black text-brandSaffron">12k+</div>
                                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Leads Gen</div>
                              </div>
                              <div className="h-10 w-px bg-white/10"></div>
                              <div className="text-right">
                                  <div className="text-3xl font-black text-blue-500">22.4M</div>
                                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Ad Reach</div>
                              </div>
                          </div>
                      </div>
                   </div>

                   {/* Floating Element Behind */}
                   <Parallax speed={-0.05} className="absolute -top-12 -right-12 z-10">
                      <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-xl w-48 animate-float" style={{animationDelay: '1s'}}>
                          <div className="flex items-center gap-3 mb-2">
                             <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                             <span className="text-xs font-bold text-slate-300 uppercase">System Active</span>
                          </div>
                          <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                             <div className="h-full bg-brandSaffron w-3/4"></div>
                          </div>
                      </div>
                   </Parallax>
                   
                   {/* Floating User Badge */}
                   <Parallax speed={0.08} className="absolute -bottom-8 -left-8 z-30">
                      <div className="bg-slate-900 p-1 rounded-full border border-white/10 shadow-2xl animate-float" style={{animationDelay: '1.5s'}}>
                         <div className="bg-slate-950 px-6 py-3 rounded-full flex items-center gap-3">
                            <div className="bg-brandSaffron p-2 rounded-full">
                               <Users className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white font-bold text-sm">240+ Clients</span>
                         </div>
                      </div>
                   </Parallax>
                </div>
             </Reveal>
          </div>
          
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_top,black,transparent)] opacity-20 pointer-events-none"></div>
    </div>
  );
};

export default Hero;