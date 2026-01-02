import React, { useState } from 'react';
import { Play, Volume2, Heart, MessageCircle, Share2, Sparkles, XCircle, CheckCircle } from 'lucide-react';
import Reveal from './Reveal';

const VideoShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'boring' | 'viral'>('viral');

  const content = {
    boring: {
      title: "Traditional Ad",
      script: "We sell the best hiking gear in Nepal. Come buy from our shop in Thamel. We have discounts. 10% off today.",
      stats: { views: "1.2k", likes: "45" },
      color: "bg-slate-800",
      accent: "text-slate-500"
    },
    viral: {
      title: "NepAI Viral Ad",
      script: "🛑 STOP scrolling if you're planning a trek in 2026! \n\nDid you know 40% of trekkers pack WRONG? 🎒😱 \n\nHere are 3 hacks to save your back (and your wallet) in Thamel today! 👇 #NepalTrekking",
      stats: { views: "142k", likes: "12.5k" },
      color: "bg-gradient-to-b from-slate-800 to-slate-900",
      accent: "text-brandSaffron"
    }
  };

  const activeContent = content[activeTab];

  return (
    <section className="py-24 bg-brandDark relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <Reveal>
            <h2 className="text-brandSaffron font-black tracking-[0.2em] uppercase text-sm mb-4">Content That Converts</h2>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Stop Posting. <br /> Start <span className="text-brandSaffron">Going Viral.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Most Nepali brands post "ads". We post stories. Our AI analyzes millions of viral hooks to script content that the algorithm loves.
            </p>

            <div className="space-y-6">
              <div 
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${activeTab === 'boring' ? 'bg-slate-800/50 border-slate-600' : 'bg-transparent border-slate-800 hover:bg-slate-900'}`}
                onClick={() => setActiveTab('boring')}
              >
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                     <XCircle className="w-5 h-5 text-red-400" />
                   </div>
                   <div>
                     <h4 className="font-bold text-white">The "Boring" Way</h4>
                     <p className="text-sm text-slate-500">Traditional pushy sales ads</p>
                   </div>
                </div>
              </div>

              <div 
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${activeTab === 'viral' ? 'bg-slate-800/50 border-brandSaffron' : 'bg-transparent border-slate-800 hover:bg-slate-900'}`}
                onClick={() => setActiveTab('viral')}
              >
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-brandSaffron/20 flex items-center justify-center">
                     <Sparkles className="w-5 h-5 text-brandSaffron" />
                   </div>
                   <div>
                     <h4 className="font-bold text-white">The "NepAI" Way</h4>
                     <p className="text-sm text-slate-500">AI-optimized hooks & storytelling</p>
                   </div>
                </div>
                {activeTab === 'viral' && <CheckCircle className="w-6 h-6 text-brandSaffron" />}
              </div>
            </div>
          </Reveal>

          {/* Right Mobile Mockup */}
          <Reveal delay={200} className="flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
               {/* Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>
               
               {/* Screen Content */}
               <div className={`w-full h-full relative ${activeContent.color}`}>
                  {/* Video Placeholder */}
                  <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                     <Play className="w-16 h-16 text-white/20 fill-white/20" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20"></div>
                  </div>

                  {/* UI Overlay */}
                  <div className="absolute bottom-0 w-full p-6 pb-12 flex flex-col justify-end h-full">
                     {/* Side Actions */}
                     <div className="absolute right-4 bottom-24 flex flex-col gap-6 items-center">
                        <div className="flex flex-col items-center gap-1">
                           <div className="w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-md flex items-center justify-center">
                              <Heart className={`w-6 h-6 ${activeTab === 'viral' ? 'text-red-500 fill-red-500' : 'text-white'}`} />
                           </div>
                           <span className="text-white text-xs font-bold">{activeContent.stats.likes}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-md flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                           <span className="text-white text-xs font-bold">1.2k</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-800/50 backdrop-blur-md flex items-center justify-center">
                           <Share2 className="w-6 h-6 text-white" />
                        </div>
                     </div>

                     {/* Caption */}
                     <div className="pr-16">
                        <h3 className="font-bold text-white mb-2 text-shadow-sm bg-black/30 backdrop-blur-sm inline-block px-2 rounded">@HimalayanGear</h3>
                        <p className="text-white text-sm leading-relaxed whitespace-pre-line drop-shadow-md">
                           {activeContent.script}
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                           <Volume2 className="w-3 h-3 text-white animate-pulse" />
                           <span className="text-xs text-white/80 scrolling-text">Original Audio - Trending Nepal • </span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Stats Badge */}
               <div className="absolute top-12 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${activeTab === 'viral' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                  <span className="text-white text-xs font-bold">{activeContent.stats.views} views</span>
               </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;