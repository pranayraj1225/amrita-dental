import React from 'react';
import { businessInfo, images } from '../data';

const Doctor: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 px-4 md:px-8 lg:px-10 bg-light-bg">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-[24px] shadow-card overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Image */}
          <div className="w-full md:w-[45%] lg:w-[40%] relative min-h-[350px]">
            <img 
              src={images.doctor} 
              alt={businessInfo.doctor.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="w-full md:w-[55%] lg:w-[60%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="text-[11px] font-bold tracking-widest text-primary-blue uppercase mb-4">
              MEET OUR DOCTOR
            </div>
            
            <h2 className="text-3xl lg:text-[38px] font-bold text-dark-navy leading-[1.2] mb-5 tracking-tight">
              {businessInfo.doctor.name}
            </h2>
            
            <div className="w-12 h-[3px] bg-primary-blue mb-6 rounded-full"></div>
            
            <p className="text-[16px] text-body-text leading-relaxed mb-8 italic text-balance">
              "{businessInfo.doctor.description}"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#appointment"
                className="inline-block text-center bg-primary-blue text-white px-8 py-3 rounded-full text-[14px] font-semibold hover:bg-opacity-90 transition-all shadow-sm"
              >
                Consult {businessInfo.doctor.name}
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Doctor;
