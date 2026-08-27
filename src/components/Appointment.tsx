import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { services } from '../data';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to an API endpoint
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '', phone: '', email: '', date: '', time: '', service: '', message: ''
      });
    }, 5000);
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 px-4 md:px-8 lg:px-10 bg-light-bg">
      <div className="w-full max-w-4xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] font-bold tracking-widest text-muted-text uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-primary-blue rounded-full"></span>
            BOOK AN APPOINTMENT
            <span className="w-8 h-[2px] bg-primary-blue rounded-full"></span>
          </div>
          
          <h2 className="text-3xl md:text-[38px] font-bold text-dark-navy leading-[1.2] mb-6 tracking-tight">
            Schedule Your Visit
          </h2>
          
          <p className="text-base text-body-text leading-relaxed">
            Choose a convenient way to get in touch with Amrita's Dental & Maxillofacial Center.
          </p>
        </div>
        
        <div className="bg-white rounded-[24px] p-6 md:p-10 shadow-card">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-light-blue text-primary-blue rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-dark-navy mb-3">Appointment Requested</h3>
              <p className="text-body-text max-w-md mx-auto">
                Thank you! Your appointment request has been received. Our team will contact you shortly to confirm the time.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[13px] font-semibold text-dark-navy mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-[12px] border border-border-color bg-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors text-[15px]"
                    placeholder="Enter your full name"
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-[13px] font-semibold text-dark-navy mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-[12px] border border-border-color bg-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors text-[15px]"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[13px] font-semibold text-dark-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-[12px] border border-border-color bg-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors text-[15px]"
                    placeholder="Enter your email address"
                  />
                </div>
                
                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-[13px] font-semibold text-dark-navy mb-2">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-[12px] border border-border-color bg-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors text-[15px] appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-[13px] font-semibold text-dark-navy mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-[12px] border border-border-color bg-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors text-[15px] text-body-text"
                  />
                </div>
                
                {/* Time */}
                <div>
                  <label htmlFor="time" className="block text-[13px] font-semibold text-dark-navy mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-[12px] border border-border-color bg-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors text-[15px] text-body-text"
                  />
                </div>
                
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[13px] font-semibold text-dark-navy mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-[12px] border border-border-color bg-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-colors text-[15px] resize-none"
                  placeholder="Tell us about your dental concern..."
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-primary-blue text-white rounded-full font-semibold text-[15px] hover:bg-opacity-90 transition-all duration-300 shadow-sm block mx-auto"
                >
                  Request Appointment
                </button>
              </div>
              
            </form>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default Appointment;
