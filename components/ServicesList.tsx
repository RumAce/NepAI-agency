import React from 'react';
import { Target, PenTool, Layout, BarChart3, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';
import Reveal from './Reveal';

const services: ServiceItem[] = [
  {
    id: 'ads',
    title: 'AI-Optimized Paid Ads',
    description: 'Stop guessing. We run highly targeted campaigns on Facebook, Instagram, and Google using AI to maximize ROI.',
    features: ['Campaign setup & management', 'AI-generated ad creatives', 'Weekly budget optimization', 'Audience retargeting'],
    iconName: 'Target'
  },
  {
    id: 'content',
    title: 'AI Content & Video Ads',
    description: 'Engage the Nepali mindset with scroll-stopping hooks and short video scripts optimized for Reels and TikTok.',
    features: ['Short video scripts', 'Creative A/B testing', 'Local tone adaptation', 'High-speed production'],
    iconName: 'PenTool'
  },
  {
    id: 'landing',
    title: 'Landing Pages & Conversions',
    description: 'We build simple, trust-based pages designed to turn visitors into paying customers or leads.',
    features: ['WhatsApp & call integration', 'Fast loading speeds', 'Mobile-first design', 'Lead form optimization'],
    iconName: 'Layout'
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'No jargon. Just clear reports showing you exactly where your money is going and what results it brought.',
    features: ['Real metrics (CPA, ROAS)', 'Monthly transparent reports', 'Honest insights', 'Next steps planning'],
    iconName: 'BarChart3'
  }
];

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-8 h-8 text-white" />,
  PenTool: <PenTool className="w-8 h-8 text-white" />,
  Layout: <Layout className="w-8 h-8 text-white" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-white" />
};

const ServicesList: React.FC = () => {
  return (
    <div className="py-32 bg-brandDark relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-brandSaffron font-black tracking-[0.2em] uppercase text-sm mb-4">Our Tech Stack</h2>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Full-Funnel AI Execution
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 150}>
              <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-10 border border-white/5 hover:border-brandSaffron/30 transition-all duration-300 h-full overflow-hidden">
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brandSaffron/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform animate-float shadow-xl">
                        {iconMap[service.iconName]}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    
                    <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                    {service.description}
                    </p>

                    <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-brandSaffron mr-3 flex-shrink-0" />
                        {feature}
                        </li>
                    ))}
                    </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;