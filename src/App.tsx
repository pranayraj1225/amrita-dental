import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceBar from './components/ServiceBar';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Doctor from './components/Doctor';
import Reviews from './components/Reviews';
import TrustStats from './components/TrustStats';
import CTA from './components/CTA';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';

function App() {
  return (
    <div className="relative min-h-screen font-sans text-body-text bg-white">
      <Navbar />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <ServiceBar />
        <About />
        <WhyChooseUs />
        <Services />
        <Doctor />
        <Reviews />
        <TrustStats />
        <CTA />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
