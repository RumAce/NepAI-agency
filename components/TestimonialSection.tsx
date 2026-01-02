import React, { useState, useEffect, useCallback } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

const testimonials = [
  {
    id: 1,
    name: "Aarav Shrestha",
    role: "Owner, Kathmandu Coffee Hub",
    quote: "We used to burn money on random boosts. NepAI's strategy actually brought people into the cafe. 30% revenue jump in just 3 months.",
    stars: 5
  },
  {
    id: 2,
    name: "Sita Gurung",
    role: "Marketing Head, Hamro Fashion",
    quote: "The AI content scripts are a game changer for our TikTok. We went viral twice in a month and sold out our inventory completely.",
    stars: 5
  },
  {
    id: 3,
    name: "Rajesh Thapa",
    role: "CEO, TechNepal Solutions",
    quote: "Finally, an agency that talks data. No fluff. The transparency in reporting and the CPA reduction was exactly what we needed.",
    stars: 5
  },
  {
    id: 4,
    name: "Pemba Sherpa",
    role: "Founder, Himalayan Gear",
    quote: "They understand the tourist season peaks perfectly. Our trekking gear rentals were fully booked for the first time in years.",
    stars: 5
  },
  {
    id: 5,
    name: "Binod Chaudhary",
    role: "Director, Urban Estates",
    quote: "Real estate marketing in Nepal is tricky. NepAI targeted the right diaspora audience, bringing us high-quality leads from abroad.",
    stars: 5
  }
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Responsive items to show configuration
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  // Memoized for auto-slide dependency
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Adjust index if window resize makes current index invalid
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsToShow, maxIndex, currentIndex]);

  return (
    <div className="py-32 bg-brandDark relative overflow-hidden border-t border-slate-900">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-brandSaffron/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
             <h2 className="text-brandSaffron font-black tracking-[0.2em] uppercase text-sm mb-4">Success Stories</h2>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Trusted by <span className="text-brandSaffron">Nepali</span> Builders
            </h2>
          </div>
        </Reveal>

        <div className="relative group">
            {/* Slider Track Wrapper */}
            <div className="overflow-hidden px-4 md:px-0 -mx-4 md:mx-0">
                <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
                >
                    {testimonials.map((t) => (
                        <div 
                            key={t.id} 
                            className="flex-shrink-0 px-4 transition-all duration-300"
                            style={{ width: `${100 / itemsToShow}%` }}
                        >
                             <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-brandSaffron/30 transition-all group h-full flex flex-col select-none">
                                <div className="mb-6">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.stars)].map((_, idx) => (
                                        <Star key={idx} className="w-4 h-4 text-brandSaffron fill-brandSaffron" />
                                    ))}
                                </div>
                                <Quote className="w-10 h-10 text-slate-700 group-hover:text-brandSaffron/50 transition-colors" />
                                </div>
                                
                                <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow italic">
                                "{t.quote}"
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold">{t.name}</div>
                                    <div className="text-slate-500 text-xs font-bold uppercase tracking-wide">{t.role}</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons (Visible on hover on desktop, always visible/accessible layout wise) */}
            <button 
                onClick={prevSlide}
                className="absolute top-1/2 -left-2 md:-left-12 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-brandSaffron transition-all z-20 opacity-0 group-hover:opacity-100 disabled:opacity-30"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-brandSaffron transition-all z-20 opacity-0 group-hover:opacity-100"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center mt-12 gap-2">
            {[...Array(maxIndex + 1)].map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex 
                        ? 'w-8 bg-brandSaffron' 
                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
        </div>

      </div>
    </div>
  );
};

export default TestimonialSection;