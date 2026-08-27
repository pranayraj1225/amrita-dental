import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { businessInfo } from '../data';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-sm py-3' : 'py-5'
      } border-b border-border-color`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 lg:gap-3 group">
          <div className="w-10 h-10 rounded-full bg-light-blue flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
            <Activity size={22} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] leading-tight font-bold font-display text-dark-navy tracking-tight">AMRITA'S DENTAL</span>
            <span className="text-[10px] leading-tight font-semibold text-muted-text uppercase tracking-wider">& MAXILLOFACIAL CENTER</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-body-text hover:text-primary-blue transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="#appointment"
            className="inline-block bg-primary-blue text-white px-6 py-2.5 rounded-full text-[14px] font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-dark-navy p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-dark-navy hover:text-primary-blue transition-colors"
              onClick={handleNavClick}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#appointment"
            onClick={handleNavClick}
            className="mt-4 text-center bg-primary-blue text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-opacity-90 transition-all duration-200"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
