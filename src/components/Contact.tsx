import React from 'react';
import { MapPin, Phone, Clock, Map } from 'lucide-react';
import { businessInfo } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 px-4 md:px-8 lg:px-10 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[11px] font-bold tracking-widest text-muted-text uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-primary-blue rounded-full"></span>
            CONTACT US
            <span className="w-8 h-[2px] bg-primary-blue rounded-full"></span>
          </div>
          
          <h2 className="text-3xl md:text-[38px] font-bold text-dark-navy leading-[1.2] mb-6 tracking-tight text-balance">
            Visit Amrita's Dental <br className="hidden sm:block" />
            & Maxillofacial Center
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Address */}
          <div className="bg-light-bg p-8 rounded-[20px] text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-white text-primary-blue flex items-center justify-center mb-6 shadow-sm">
              <MapPin size={24} strokeWidth={2} />
            </div>
            <h3 className="text-[17px] font-semibold text-dark-navy mb-3">Visit Us</h3>
            <p className="text-[14px] text-body-text leading-relaxed">
              {businessInfo.address.line1},<br />
              {businessInfo.address.line2},<br />
              {businessInfo.address.city}, {businessInfo.address.state}
            </p>
          </div>
          
          {/* Phone */}
          <div className="bg-light-bg p-8 rounded-[20px] text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-white text-primary-blue flex items-center justify-center mb-6 shadow-sm">
              <Phone size={24} strokeWidth={2} />
            </div>
            <h3 className="text-[17px] font-semibold text-dark-navy mb-3">Call Us</h3>
            <p className="text-[16px] text-body-text font-medium mb-5">
              {businessInfo.phone}
            </p>
            <a 
              href={businessInfo.phoneLink}
              className="inline-block bg-white border border-border-color text-primary-blue px-6 py-2 rounded-full text-[13px] font-semibold hover:border-primary-blue transition-colors"
            >
              Call Now
            </a>
          </div>
          
          {/* Hours */}
          <div className="bg-light-bg p-8 rounded-[20px] text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-white text-primary-blue flex items-center justify-center mb-6 shadow-sm">
              <Clock size={24} strokeWidth={2} />
            </div>
            <h3 className="text-[17px] font-semibold text-dark-navy mb-3">Opening Hours</h3>
            <p className="text-[14px] text-body-text leading-relaxed font-medium">
              {businessInfo.hours}
            </p>
          </div>
          
        </div>
        
        {/* Map Placeholder */}
        <div className="w-full h-[400px] bg-light-bg rounded-[24px] overflow-hidden relative flex items-center justify-center shadow-card group">
          <div className="absolute inset-0 bg-[#e5e3df] opacity-50"></div>
          
          {/* Decorative Map-like Grid */}
          <div className="absolute inset-0 pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#d1d5db 1px, transparent 1px), linear-gradient(90deg, #d1d5db 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2 }}>
          </div>
          
          <div className="relative z-10 text-center flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-[20px] shadow-sm max-w-sm">
            <Map size={32} className="text-primary-blue mb-4" strokeWidth={1.5} />
            <h3 className="text-[18px] font-bold text-dark-navy mb-2">Google Maps</h3>
            <p className="text-[14px] text-body-text mb-6">
              {businessInfo.address.plusCode}
            </p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address.line1 + ', ' + businessInfo.address.city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-blue text-white px-8 py-3 rounded-full text-[14px] font-semibold hover:bg-opacity-90 transition-all shadow-sm flex items-center gap-2"
            >
              Get Directions <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
