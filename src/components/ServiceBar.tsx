import React from 'react';
import { services } from '../data';
import * as LucideIcons from 'lucide-react';

const ServiceBar: React.FC = () => {
  return (
    <section className="relative z-20 px-4 md:px-8 lg:px-10 -mt-10 lg:-mt-16 mb-20 lg:mb-32">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-[22px] shadow-card-hover p-6 lg:p-8 border border-border-color/50">
        <div className="flex overflow-x-auto pb-4 lg:pb-0 hide-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-6 lg:gap-4">
          {services.map((service, index) => {
            const Icon = LucideIcons[service.iconName as keyof typeof LucideIcons] as React.ElementType;
            
            return (
              <div 
                key={service.id}
                className={`min-w-[160px] flex-shrink-0 snap-start flex flex-col items-center text-center px-4 ${
                  index !== services.length - 1 ? 'lg:border-r border-border-color' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-light-blue flex items-center justify-center text-primary-blue mb-4">
                  {Icon && <Icon size={22} strokeWidth={2} />}
                </div>
                <h3 className="text-[14px] font-semibold text-dark-navy mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[12px] text-muted-text leading-relaxed hidden lg:block">
                  {service.description.substring(0, 45)}...
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBar;
