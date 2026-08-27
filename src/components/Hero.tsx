import React from 'react';
import { Phone, Star, Shield, Heart, MessageSquare } from 'lucide-react';
import { businessInfo, images } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 lg:pt-36 lg:pb-32 px-4 md:px-8 lg:px-10 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-light-blue text-primary-blue text-[11px] font-bold tracking-widest uppercase mb-6">
            Your Smile. Your Well-Being.
          </div>
          
          <h1 className="italic text-4xl md:text-5xl lg:text-[60px] font-bold text-dark-navy leading-[1.1] mb-6 tracking-tight text-balance">
            Compassionate Dental Care.<br />
            <span className="text-primary-blue">Confident Smiles.</span>
          </h1>
          
          <p className="text-base md:text-[17px] text-body-text leading-relaxed max-w-[520px] mb-8">
            Personalized dental care in a comfortable and reassuring environment, with a focus on your oral health, comfort and confidence.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10 w-full max-w-[520px]">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary-blue">
                <Shield size={20} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-dark-navy leading-tight">Experienced Care</h4>
                <p className="text-[13px] text-muted-text mt-0.5">Professional treatment</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary-blue">
                <Heart size={20} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-dark-navy leading-tight">Patient Focused</h4>
                <p className="text-[13px] text-muted-text mt-0.5">A caring approach</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 text-primary-blue">
                <MessageSquare size={20} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[14px] font-semibold text-dark-navy leading-tight">Clear Communication</h4>
                <p className="text-[13px] text-muted-text mt-0.5">Treatment explained</p>
              </div>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#appointment"
              className="w-full sm:w-auto text-center bg-primary-blue text-white px-8 py-3.5 rounded-full text-[14px] font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-card"
            >
              Book an Appointment
            </a>
            <a
              href={businessInfo.phoneLink}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-primary-blue text-dark-navy px-8 py-3.5 rounded-full text-[14px] font-semibold hover:bg-light-bg transition-colors duration-300"
            >
              <Phone size={18} className="text-primary-blue" />
              Call {businessInfo.phone}
            </a>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0 z-10">
          <div className="relative rounded-[24px] overflow-hidden shadow-card aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5] xl:aspect-[3/4]">
            <img 
              src={images.hero} 
              alt="Professional dental consultation" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Rating Card */}
          <div className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 bg-white p-5 rounded-[20px] shadow-card-hover flex items-center gap-4 z-20 animate-fade-in-up">
            <div className="w-14 h-14 bg-light-blue rounded-full flex items-center justify-center text-primary-blue font-bold font-display text-2xl">
              {businessInfo.rating}
            </div>
            <div>
              <div className="flex items-center text-[#FFC107] text-sm mb-1">
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
                <Star size={16} fill="currentColor" strokeWidth={0} />
              </div>
              <p className="text-[13px] font-semibold text-dark-navy">
                {businessInfo.reviewCount} Google Reviews
              </p>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-[20%] -mt-[10%] w-[50%] h-[80%] bg-light-bg rounded-full blur-3xl opacity-70 z-0 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
