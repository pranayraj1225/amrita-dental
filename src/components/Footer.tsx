import React from 'react';
import { Activity } from 'lucide-react';
import { businessInfo } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-navy text-white/80 pt-20 pb-10 px-4 md:px-8 lg:px-10">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-blue flex items-center justify-center text-white">
                <Activity size={22} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] leading-tight font-bold font-display text-white tracking-tight">AMRITA'S DENTAL</span>
                <span className="text-[10px] leading-tight font-semibold text-white/70 uppercase tracking-wider">& MAXILLOFACIAL CENTER</span>
              </div>
            </a>
            <p className="text-[14px] leading-relaxed text-white/70 mb-6 pr-4">
              Patient-focused dental care with a commitment to comfort, clear communication and personalized treatment.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Why Choose Us', href: '#why-choose-us' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[14px] text-white/70 hover:text-primary-blue transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-4">
              {[
                "General Dentistry",
                "Root Canal Treatment",
                "Wisdom Tooth Care",
                "Dental Implants",
                "Dentures",
                "Maxillofacial Care"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-[14px] text-white/70 hover:text-primary-blue transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[15px] font-semibold text-white mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-[14px] text-white/70">
              <li>
                <a href={businessInfo.phoneLink} className="hover:text-primary-blue transition-colors text-[16px] font-medium text-white">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="leading-relaxed">
                {businessInfo.address.line1}<br />
                {businessInfo.address.line2}<br />
                {businessInfo.address.city}, {businessInfo.address.state}
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white/50">
          <p>© {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
