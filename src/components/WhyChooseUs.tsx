import React from 'react';
import { User, MessageCircle, Stethoscope, Smile } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Patient-Centered Care",
      description: "A calm and supportive approach focused on each patient's individual needs.",
      icon: User
    },
    {
      title: "Clear Communication",
      description: "Patients appreciate treatment explanations that are clear and reassuring.",
      icon: MessageCircle
    },
    {
      title: "Comprehensive Dental Care",
      description: "Care covering routine, restorative and specialized dental needs.",
      icon: Stethoscope
    },
    {
      title: "Comfortable Experience",
      description: "A welcoming environment designed to help patients feel at ease.",
      icon: Smile
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 px-4 md:px-8 lg:px-10 bg-light-bg">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-[11px] font-bold tracking-widest text-muted-text uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-primary-blue rounded-full"></span>
            WHY CHOOSE US
            <span className="w-8 h-[2px] bg-primary-blue rounded-full"></span>
          </div>
          
          <h2 className="text-3xl md:text-[38px] font-bold text-dark-navy leading-[1.2] tracking-tight">
            Why Patients Choose <br className="hidden sm:block" />
            <span className="text-primary-blue">Amrita's Dental</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-[20px] shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-light-blue text-primary-blue flex items-center justify-center mb-6">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-[17px] font-semibold text-dark-navy mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-body-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
