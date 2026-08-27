import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { reviews, businessInfo } from '../data';

const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 px-4 md:px-8 lg:px-10 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center mb-12">
          {/* Header */}
          <div className="w-full lg:w-1/3">
            <div className="text-[11px] font-bold tracking-widest text-muted-text uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary-blue rounded-full"></span>
              PATIENT REVIEWS
            </div>
            
            <h2 className="text-3xl md:text-[38px] font-bold text-dark-navy leading-[1.2] mb-6 tracking-tight text-balance">
              What Our Patients Say
            </h2>
            
            <p className="text-base text-body-text leading-relaxed">
              Real experiences shared by patients who visited Amrita's Dental & Maxillofacial Center.
            </p>
          </div>
          
          {/* Summary Block */}
          <div className="w-full lg:w-2/3 flex flex-col sm:flex-row items-center sm:justify-end gap-6 sm:gap-12">
            <div className="bg-light-bg px-8 py-6 rounded-[20px] flex items-center gap-6 border border-border-color/50">
              <div className="text-[48px] font-bold font-display text-dark-navy leading-none tracking-tighter">
                {businessInfo.rating}
              </div>
              <div>
                <div className="flex text-[#FFC107] mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <div className="text-[13px] font-semibold text-body-text">
                  {businessInfo.reviewCount} Google Reviews
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-3">
              <button 
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center text-dark-navy hover:bg-light-blue hover:text-primary-blue transition-colors"
                aria-label="Previous reviews"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-border-color flex items-center justify-center text-dark-navy hover:bg-light-blue hover:text-primary-blue transition-colors"
                aria-label="Next reviews"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Review Cards */}
        <div className="relative -mx-4 md:-mx-8 lg:mx-0 px-4 md:px-8 lg:px-0">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-5 pb-8 pt-4 hide-scrollbar snap-x snap-mandatory"
          >
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="min-w-[300px] max-w-[300px] md:min-w-[340px] md:max-w-[340px] snap-start bg-white p-7 rounded-[18px] shadow-card border border-border-color/30 flex flex-col h-full flex-shrink-0"
              >
                <div className="flex text-[#FFC107] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                
                <p className="text-[15px] text-body-text leading-[1.6] mb-6 flex-grow italic">
                  "{review.text}"
                </p>
                
                <div className="mt-auto pt-4 border-t border-border-color">
                  <h4 className="text-[14px] font-semibold text-dark-navy">{review.reviewer}</h4>
                  <p className="text-[12px] text-muted-text mt-0.5">Google Review</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Reviews;
