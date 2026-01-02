import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';
import { ShoppingBag, Laptop, Building, ArrowRight, Stethoscope } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

// Animated Counter Component
const AnimatedCounter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const startValue = useRef(value);
    const targetValue = useRef(value);
    const startTime = useRef<number>(0);
    const rAF = useRef<number>(0);

    useEffect(() => {
        startValue.current = displayValue;
        targetValue.current = value;
        startTime.current = 0;
        
        const animate = (time: number) => {
            if (!startTime.current) startTime.current = time;
            const progress = (time - startTime.current) / 800; // 800ms duration

            if (progress < 1) {
                // Ease Out Quart
                const ease = 1 - Math.pow(1 - progress, 4);
                const current = startValue.current + (targetValue.current - startValue.current) * ease;
                setDisplayValue(current);
                rAF.current = requestAnimationFrame(animate);
            } else {
                setDisplayValue(targetValue.current);
            }
        };

        cancelAnimationFrame(rAF.current);
        rAF.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(rAF.current);
    }, [value]);

    return <>{prefix}{Math.round(displayValue).toLocaleString()}{suffix}</>;
};

const ROISimulator: React.FC = () => {
    const [budget, setBudget] = useState(50000);
    const [industry, setIndustry] = useState<'retail' | 'tech' | 'realestate' | 'clinics'>('retail');

    const factors = {
        retail: { cpaOld: 450, cpaNew: 210, label: 'Retail & E-comm', icon: <ShoppingBag className="w-5 h-5" /> },
        tech: { cpaOld: 1100, cpaNew: 480, label: 'Tech / Consulting', icon: <Laptop className="w-5 h-5" /> },
        realestate: { cpaOld: 2200, cpaNew: 950, label: 'Real Estate', icon: <Building className="w-5 h-5" /> },
        clinics: { cpaOld: 1500, cpaNew: 600, label: 'Health & Clinics', icon: <Stethoscope className="w-5 h-5" /> }
    };

    const currentFactor = factors[industry];
    const oldLeads = Math.max(0, Math.floor(budget / currentFactor.cpaOld));
    const newLeads = Math.max(0, Math.floor(budget / currentFactor.cpaNew));
    const improvement = oldLeads > 0 ? Math.round(((newLeads - oldLeads) / oldLeads) * 100) : 100;

    // Use explicit pixel heights for the chart area
    const CHART_HEIGHT = 200;
    const maxLeads = Math.max(oldLeads, newLeads) * 1.2; // Add headroom
    
    // Ensure we don't divide by zero
    const safeMaxLeads = maxLeads > 0 ? maxLeads : 1;

    const oldHeightPx = Math.max(10, (oldLeads / safeMaxLeads) * CHART_HEIGHT);
    const newHeightPx = Math.max(10, (newLeads / safeMaxLeads) * CHART_HEIGHT);

    return (
        <section className="py-32 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Controls */}
                    <Reveal>
                        <h2 className="text-5xl font-black text-white mb-8 leading-tight">Predict Your <br/><span className="text-brandSaffron">Success</span></h2>
                        <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
                            Stop guessing your marketing returns. Use our simulator to see the projected growth based on real-time market data in Nepal.
                        </p>
                        
                        <div className="space-y-10 bg-slate-900/40 p-10 rounded-[2rem] border border-white/5 backdrop-blur-md shadow-2xl">
                            <div>
                                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-6">Industry Category</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {(Object.keys(factors) as Array<keyof typeof factors>).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => setIndustry(key)}
                                            className={`p-4 rounded-2xl border text-sm font-bold transition-all flex flex-col items-center gap-2 ${
                                                industry === key 
                                                ? 'bg-blue-600/20 border-blue-500/50 text-white shadow-[0_0_20px_rgba(37,99,235,0.2)]' 
                                                : 'border-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                                            }`}
                                        >
                                            {factors[key].icon}
                                            {factors[key].label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <div className="flex justify-between items-end mb-6">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Monthly Ad Budget</label>
                                    <span className="text-brandSaffron font-black text-3xl">
                                        NPR <AnimatedCounter value={budget} />
                                    </span>
                                </div>
                                <input 
                                    type="range" 
                                    min="10000" 
                                    max="100000" 
                                    step="5000" 
                                    value={budget}
                                    onChange={(e) => setBudget(Number(e.target.value))}
                                    className="w-full h-4 bg-slate-800 rounded-full appearance-none cursor-pointer accent-brandSaffron hover:accent-orange-400 transition-all"
                                />
                                <div className="flex justify-between mt-3 text-xs font-bold text-slate-600 uppercase">
                                    <span>10k</span>
                                    <span>1L</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Visualizer */}
                    <Reveal delay={200}>
                        <div className="bg-slate-900 rounded-[2.5rem] p-12 border border-white/5 shadow-2xl relative">
                            <div className="absolute top-0 right-0 p-8 opacity-20">
                                <TrendingUp className="w-32 h-32 text-white" />
                            </div>
                            
                            <h3 className="text-2xl font-black text-white mb-16 text-center flex items-center justify-center gap-4 relative z-10">
                                <span className="w-3 h-3 rounded-full bg-brandSaffron animate-pulse shadow-[0_0_10px_#F97316]"></span>
                                Projected New Customers / Month
                            </h3>
                            
                            {/* Chart Area */}
                            <div className="flex items-end justify-center gap-8 md:gap-16 mb-8 px-4 h-[250px] relative z-10">
                                {/* Old Bar */}
                                <div className="w-32 flex flex-col items-center group">
                                    <div 
                                        className="w-full bg-slate-800 rounded-t-2xl relative transition-all duration-700 ease-out group-hover:bg-slate-700"
                                        style={{ height: `${oldHeightPx}px` }}
                                    >
                                         <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-slate-400 font-black text-2xl">
                                            <AnimatedCounter value={oldLeads} />
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Standard</div>
                                        <div className="text-xs text-slate-600 font-bold">Agency</div>
                                    </div>
                                </div>

                                {/* New Bar */}
                                <div className="w-32 flex flex-col items-center group">
                                    <div 
                                        className="w-full bg-gradient-to-t from-brandSaffron to-orange-400 rounded-t-2xl relative transition-all duration-700 ease-out shadow-[0_0_40px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_60px_rgba(249,115,22,0.5)]"
                                        style={{ height: `${newHeightPx}px` }}
                                    >
                                        <div className="absolute -top-14 left-1/2 -translate-x-1/2 text-white font-black text-4xl drop-shadow-lg">
                                            <AnimatedCounter value={newLeads} />
                                        </div>
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/20 text-white text-[10px] font-black px-2 py-1 rounded-full whitespace-nowrap backdrop-blur-sm">
                                            +<AnimatedCounter value={improvement} />% Boost
                                        </div>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <div className="text-sm font-bold text-brandSaffron uppercase tracking-wider mb-1">NepAI</div>
                                        <div className="text-xs text-brandSaffron/60 font-bold">Marketing Agency</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-slate-950/50 rounded-2xl p-4 text-center border border-white/5 relative z-10">
                                <p className="text-slate-400 text-sm font-medium">
                                    Based on average <span className="text-white font-bold">{currentFactor.label}</span> CPA in Nepal (2024 Data)
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default ROISimulator;