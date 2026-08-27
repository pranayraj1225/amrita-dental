import React from 'react';
import { businessInfo } from '../data';

const TrustStats: React.FC = () => {
  return (
    <section className="px-4 md:px-8 lg:px-10 pb-20 lg:pb-28">
      <div className="w-full max-w-5xl mx-auto bg-dark-navy rounded-[22px] p-8 md:p-12 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-around gap-10 sm:gap-4 text-center">
          
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-[44px] font-bold font-display text-white mb-1 flex items-baseline">
              {businessInfo.rating} <span className="text-primary-blue text-2xl ml-1">★</span>
            </div>
            <div className="text-[13px] font-medium text-light-blue/80 uppercase tracking-wider">
              Google Rating
            </div>
          </div>
          
          <div className="hidden sm:block w-[1px] h-16 bg-white/10"></div>
          
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-[44px] font-bold font-display text-white mb-1">
              {businessInfo.reviewCount}+
            </div>
            <div className="text-[13px] font-medium text-light-blue/80 uppercase tracking-wider">
              Google Reviews
            </div>
          </div>
          
          <div className="hidden sm:block w-[1px] h-16 bg-white/10"></div>
          
          <div className="flex flex-col items-center">
            <div className="text-[22px] md:text-[26px] font-bold font-display text-white mb-2 leading-tight">
              Patient-Focused
            </div>
            <div className="text-[13px] font-medium text-primary-blue uppercase tracking-wider">
              Dental Care
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
