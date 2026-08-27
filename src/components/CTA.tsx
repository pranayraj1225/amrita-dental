import React from 'react';
import { Phone, Check } from 'lucide-react';
import { businessInfo } from '../data';

const CTA: React.FC = () => {
  return (
    <section className="px-4 md:px-8 lg:px-10 pb-20 lg:pb-28">
      <div className="w-full max-w-7xl mx-auto bg-primary-blue rounded-[24px] p-8 md:p-14 lg:p-20 relative overflow-hidden shadow-card">
        
        {/* Background Graphic */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.1] mb-6 tracking-tight text-balance">
              Ready to Take Care <br className="hidden sm:block" />
              of Your Smile?
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed mb-8 max-w-[500px] mx-auto lg:mx-0">
              Take the first step toward personalized dental care. Schedule a consultation with our team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#appointment"
                className="inline-block text-center bg-white text-primary-blue px-8 py-4 rounded-full text-[15px] font-semibold hover:bg-light-bg transition-colors duration-300 shadow-sm"
              >
                Book an Appointment
              </a>
              <a
                href={businessInfo.phoneLink}
                className="flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-[15px] font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                <Phone size={18} />
                Call {businessInfo.phone}
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-[20px] w-full max-w-sm">
              <h4 className="text-white font-semibold mb-4 text-[15px]">What to expect:</h4>
              <ul className="space-y-3">
                {[
                  "Clear assessment of your oral health",
                  "Honest discussion of treatment options",
                  "Answers to all your questions",
                  "No pressure, just personalized care"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 text-[14px]">
                    <div className="mt-0.5 text-white">
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
