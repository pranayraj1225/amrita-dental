import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { businessInfo } from '../data';

const MobileActionBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-40 rounded-t-[20px] px-4 py-3 flex items-center justify-between gap-3">
      <a 
        href={businessInfo.phoneLink}
        className="w-1/2 flex items-center justify-center gap-2 bg-light-blue text-primary-blue py-3.5 rounded-full text-[13px] font-semibold"
      >
        <Phone size={16} />
        CALL NOW
      </a>
      <a 
        href="#appointment"
        className="w-1/2 flex items-center justify-center gap-2 bg-primary-blue text-white py-3.5 rounded-full text-[13px] font-semibold"
      >
        <Calendar size={16} />
        BOOK
      </a>
    </div>
  );
};

export default MobileActionBar;
