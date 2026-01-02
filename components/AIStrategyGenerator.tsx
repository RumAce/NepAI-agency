import React, { useState } from 'react';
import { generateMarketingStrategy } from '../services/geminiService';
import { StrategyResponse } from '../types';
import { Sparkles, Loader2, Target, Briefcase, Building2, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';
import Parallax from './Parallax';

const AIStrategyGenerator: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<StrategyResponse | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !businessType || !goal) return;

    setLoading(true);
    try {
      const result = await generateMarketingStrategy(businessName, businessType, goal);
      setStrategy(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Reveal>
      <div className="bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 relative transform hover:scale-[1.01] transition-transform duration-500">
        
        {/* Glowing Blobs */}
        <Parallax speed={-0.15} className="absolute top-0 right-0 w-80 h-80 -translate-y-1/2 translate-x-1/3 z-0">
          <div className="w-full h-full bg-brandSaffron/20 rounded-full blur-[80px] animate-pulse"></div>
        </Parallax>
        
        <Parallax speed={0.1} className="absolute bottom-0 left-0 w-64 h-64 translate-y-1/3 -translate-x-1/3 z-0">
          <div className="w-full h-full bg-blue-600/20 rounded-full blur-[80px] animate-pulse" style={{animationDelay: '1s'}}></div>
        </Parallax>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 p-10 md:p-16">
          {/* Left: Input Form */}
          <div>
            <div className="flex items-center gap-3 mb-6 text-brandSaffron">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <span className="text-sm font-black tracking-[0.2em] uppercase">Free AI Demo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Get an Instant <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandSaffron to-orange-300">Strategy</span>
            </h2>
            <p className="text-slate-400 mb-10 text-xl font-light leading-relaxed">
              Tell our AI about your business, and get a tailored plan for the Nepali market in seconds.
            </p>

            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="relative group">
                <Building2 className="absolute left-5 top-5 w-6 h-6 text-slate-500 group-focus-within:text-brandSaffron transition-colors" />
                <input
                  type="text"
                  placeholder="Business Name (e.g., Kathmandu Coffee)"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-2xl pl-16 pr-6 py-5 text-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brandSaffron/50 focus:border-transparent transition-all shadow-inner"
                />
              </div>
              
              <div className="relative group">
                <Briefcase className="absolute left-5 top-5 w-6 h-6 text-slate-500 group-focus-within:text-brandSaffron transition-colors" />
                <input
                  type="text"
                  placeholder="Business Type (e.g., Education, Retail)"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-2xl pl-16 pr-6 py-5 text-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brandSaffron/50 focus:border-transparent transition-all shadow-inner"
                />
              </div>

              <div className="relative group">
                <Target className="absolute left-5 top-5 w-6 h-6 text-slate-500 group-focus-within:text-brandSaffron transition-colors" />
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-2xl pl-16 pr-6 py-5 text-lg text-white focus:outline-none focus:ring-2 focus:ring-brandSaffron/50 focus:border-transparent transition-all appearance-none cursor-pointer shadow-inner"
                >
                  <option value="" disabled className="text-slate-600">Select your goal...</option>
                  <option value="Get more leads" className="text-white bg-slate-900">Get more leads</option>
                  <option value="Increase online sales" className="text-white bg-slate-900">Increase online sales</option>
                  <option value="Build brand awareness" className="text-white bg-slate-900">Build brand awareness</option>
                  <option value="Drive foot traffic" className="text-white bg-slate-900">Drive foot traffic</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading || !businessName || !businessType || !goal}
                className="w-full bg-gradient-to-r from-brandSaffron to-brandSaffronDark text-white font-black py-5 rounded-2xl hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6 transform hover:-translate-y-1"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Analyzing Market Data...
                  </>
                ) : (
                  <>
                    Generate Strategy <ChevronRight className="w-6 h-6 stroke-[3px]" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Output */}
          <div className="bg-slate-950/60 backdrop-blur-xl rounded-[2rem] border border-white/5 p-10 flex flex-col justify-center min-h-[450px] shadow-2xl">
            {strategy ? (
              <div className="space-y-10 animate-fade-in">
                <div>
                  <h3 className="text-brandSaffron text-xs font-black uppercase tracking-widest mb-3">The Strategy</h3>
                  <p className="text-3xl font-bold leading-tight text-white">{strategy.headline}</p>
                </div>

                <div>
                  <h3 className="text-brandSaffron text-xs font-black uppercase tracking-widest mb-4">Target Platforms</h3>
                  <div className="flex flex-wrap gap-3">
                    {strategy.platforms.map((p, i) => (
                      <span key={i} className="px-5 py-2 bg-blue-900/30 rounded-full text-sm font-bold border border-blue-500/30 text-blue-200">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-brandSaffron text-xs font-black uppercase tracking-widest mb-3">Viral Hook</h3>
                  <div className="italic text-slate-300 bg-white/5 p-8 rounded-2xl border-l-4 border-brandSaffron text-lg">
                    "{strategy.hook}"
                  </div>
                </div>

                <div>
                  <h3 className="text-brandSaffron text-xs font-black uppercase tracking-widest mb-2">Pro Tip</h3>
                  <p className="text-base text-slate-400 leading-relaxed font-medium">{strategy.advice}</p>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-600 opacity-60">
                <Sparkles className="w-24 h-24 mx-auto mb-8 stroke-1 animate-float text-slate-700" />
                <p className="text-xl font-medium">Fill in the details to unlock your growth roadmap.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default AIStrategyGenerator;