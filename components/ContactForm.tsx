import React, { useState } from 'react';
import { Mail, Phone, Calendar, CheckCircle, Send } from 'lucide-react';
import Reveal from './Reveal';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    const text = `Namaste NepAI, my name is ${formData.name}. Business: ${formData.business}. ${formData.message}`;
    window.open(`https://wa.me/9779808493504?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-brandDark py-32 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Info */}
          <Reveal>
            <div>
              <span className="text-brandSaffron font-black tracking-[0.2em] uppercase text-sm mb-4 block">Contact Us</span>
              <h1 className="text-5xl font-black text-white mb-8">Let's Talk About Growth</h1>
              <p className="text-xl text-slate-400 mb-12 font-light">
                Ready to stop wasting ad budget? Book a free strategy call to see if we're a good fit for your business.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center bg-slate-900/50 border border-slate-800 p-6 rounded-2xl transform hover:translate-x-2 transition-transform">
                  <Mail className="w-6 h-6 text-brandSaffron mr-6" />
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:nepaiagency2026@gmail.com" className="font-bold text-white text-lg hover:text-brandSaffron transition-colors">nepaiagency2026@gmail.com</a>
                  </div>
                </div>
                <div 
                  className="flex items-center bg-slate-900/50 border border-slate-800 p-6 rounded-2xl transform hover:translate-x-2 transition-transform cursor-pointer"
                  onClick={openWhatsApp}
                >
                  <Phone className="w-6 h-6 text-brandSaffron mr-6" />
                  <div>
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Call / WhatsApp</p>
                    <p className="font-bold text-white text-lg">+977-9808493504</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-white/5 text-white p-8 rounded-3xl">
                <h4 className="font-bold text-lg mb-6">What happens on the call?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 text-brandSaffron" /> We analyze your current marketing</li>
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 text-brandSaffron" /> We identify wasted spend</li>
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 mr-3 text-brandSaffron" /> You get a 3-step growth plan</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={200}>
            <div className="bg-gradient-to-br from-brandSaffron to-brandSaffronDark p-1 rounded-[2.5rem] shadow-2xl">
              <div className="bg-brandDark rounded-[2.4rem] p-10 h-full">
                <h3 className="text-3xl font-black text-white mb-8">Send us a message</h3>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); openWhatsApp(); }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white focus:ring-2 focus:ring-brandSaffron focus:border-transparent outline-none transition" 
                        placeholder="Ram Sharma" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white focus:ring-2 focus:ring-brandSaffron focus:border-transparent outline-none transition" 
                        placeholder="98XXXXXXXX" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Business Name</label>
                    <input 
                      type="text" 
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white focus:ring-2 focus:ring-brandSaffron focus:border-transparent outline-none transition" 
                      placeholder="Your Company Ltd" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">How can we help?</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white focus:ring-2 focus:ring-brandSaffron focus:border-transparent outline-none transition" 
                      placeholder="Tell us about your goals..."
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brandSaffron hover:bg-orange-600 text-white font-black py-5 rounded-xl text-lg shadow-[0_10px_30px_rgba(249,115,22,0.3)] transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Book via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;