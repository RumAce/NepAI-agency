import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Linkedin, Video } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
    navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook", color: "hover:text-blue-500" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Video className="w-5 h-5" />, href: "https://tiktok.com", label: "TikTok", color: "hover:text-cyan-400" }, // Using Video icon for TikTok placeholder
    { icon: <Phone className="w-5 h-5" />, href: "https://wa.me/9779808493504", label: "WhatsApp", color: "hover:text-green-500" },
  ];

  return (
    <footer className="bg-brandDark text-slate-400 border-t border-slate-900 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-black mb-6">Nep<span className="text-brandSaffron">AI</span> Marketing</h3>
            <p className="mb-8 max-w-sm leading-relaxed">
              Helping Nepali businesses grow through intelligent, data-driven marketing strategies. 
              Real results, transparent reporting.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 transition-all transform hover:scale-110 hover:shadow-lg ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><button onClick={() => navigateTo(Page.HOME)} className="hover:text-brandSaffron transition-colors">Home</button></li>
              <li><button onClick={() => navigateTo(Page.SERVICES)} className="hover:text-brandSaffron transition-colors">Services</button></li>
              <li><button onClick={() => navigateTo(Page.ABOUT)} className="hover:text-brandSaffron transition-colors">About Us</button></li>
              <li><button onClick={() => navigateTo(Page.CONTACT)} className="hover:text-brandSaffron transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brandSaffron flex-shrink-0" />
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brandSaffron flex-shrink-0" />
                <a href="mailto:nepaiagency2026@gmail.com" className="hover:text-white transition-colors">nepaiagency2026@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brandSaffron flex-shrink-0" />
                <a href="https://wa.me/9779808493504" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+977-9808493504</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-16 pt-8 text-center text-sm text-slate-600 font-medium">
          <p>&copy; {new Date().getFullYear()} NepAI Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;