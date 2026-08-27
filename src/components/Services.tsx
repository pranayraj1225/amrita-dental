import React from 'react';
import { services } from '../data';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 px-4 md:px-8 lg:px-10 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[11px] font-bold tracking-widest text-muted-text uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-primary-blue rounded-full"></span>
            OUR SERVICES
            <span className="w-8 h-[2px] bg-primary-blue rounded-full"></span>
          </div>
          
          <h2 className="text-3xl md:text-[38px] font-bold text-dark-navy leading-[1.2] mb-6 tracking-tight">
            Comprehensive Dental <br className="hidden sm:block" />
            & Maxillofacial Care
          </h2>
          
          <p className="text-base text-body-text leading-relaxed">
            Explore dental care options designed around your oral health, comfort and individual treatment needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = LucideIcons[service.iconName as keyof typeof LucideIcons] as React.ElementType;
            
            return (
              <div 
                key={service.id}
                className="group bg-white rounded-[20px] shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
              >
                <div className="w-full h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6 lg:p-8 flex-grow flex flex-col relative z-10 bg-white rounded-t-[20px] -mt-4">
                  <div className="w-12 h-12 rounded-full bg-primary-blue text-white flex items-center justify-center mb-5 -mt-10 shadow-sm border-4 border-white">
                    {Icon && <Icon size={20} strokeWidth={2} />}
                  </div>
                  
                  <h3 className="text-[18px] font-semibold text-dark-navy mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-[14px] text-body-text leading-relaxed flex-grow mb-6">
                    {service.description}
                  </p>
                  
                  <a 
                    href="#appointment" 
                    className="inline-flex items-center text-[13px] font-semibold text-primary-blue hover:text-dark-navy transition-colors mt-auto uppercase tracking-wide"
                  >
                    Learn More <span className="ml-1 text-lg leading-none" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
