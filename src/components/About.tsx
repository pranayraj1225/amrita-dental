import React from 'react';
import { Check } from 'lucide-react';
import { images } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 px-4 md:px-8 lg:px-10 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Image Collage */}
        <div className="w-full lg:w-1/2 flex gap-4">
          <div className="w-2/3 flex flex-col gap-4">
            <div className="relative rounded-[20px] overflow-hidden shadow-card aspect-[4/5]">
              <img 
                src={images.aboutMain} 
                alt="Dental Treatment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="text-[13px] font-bold text-dark-navy">4.9</span>
                <span className="text-[#FFC107] text-[14px]">★</span>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-4 pt-10">
            <div className="relative rounded-[20px] overflow-hidden shadow-card aspect-square">
              <img 
                src={images.aboutSmall1} 
                alt="Dental Equipment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-[20px] overflow-hidden shadow-card aspect-square">
              <img 
                src={images.aboutSmall2} 
                alt="Clean Clinic" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="text-[11px] font-bold tracking-widest text-muted-text uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-primary-blue rounded-full"></span>
            ABOUT THE CENTER
          </div>
          
          <h2 className="text-3xl md:text-[38px] font-bold text-dark-navy leading-[1.2] mb-6 tracking-tight text-balance">
            Dental Care With <br className="hidden md:block" />
            <span className="text-primary-blue">Experience, Care & Confidence</span>
          </h2>
          
          <p className="text-base md:text-[16px] text-body-text leading-relaxed mb-8">
            At Amrita's Dental & Maxillofacial Center, every patient is treated with attention, clear communication and a focus on comfortable, personalized dental care.
          </p>
          
          <ul className="space-y-4 mb-10 w-full">
            {[
              "Patient-focused approach",
              "Clear treatment communication",
              "Comfortable environment",
              "Comprehensive dental care"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[15px] font-medium text-dark-navy">
                <div className="w-6 h-6 rounded-full bg-light-blue text-primary-blue flex items-center justify-center flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                {item}
              </li>
            ))}
          </ul>
          
          <a
            href="#why-choose-us"
            className="inline-flex items-center gap-2 bg-white border border-border-color text-dark-navy px-8 py-3.5 rounded-full text-[14px] font-semibold hover:border-primary-blue hover:text-primary-blue transition-colors duration-300 shadow-sm"
          >
            Learn More About Us <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default About;
