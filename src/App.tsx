import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Features from './components/Features';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Demo />
      <Features />
      <Security />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;