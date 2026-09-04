import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  // Initialize Lenis Momentum Smooth Scroll (exact Framer smooth scroll physics)
  useEffect(() => {
    let lenisInstance;
    let animationFrameId;

    try {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      function raf(time) {
        if (lenisInstance) {
          lenisInstance.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        }
      }

      animationFrameId = requestAnimationFrame(raf);
    } catch (err) {
      console.warn('Lenis could not be initialized:', err);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] selection:bg-[#66ffd9] selection:text-black">
      {/* Dynamic Cursor Pill with Spring Physics */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections with Framer Motion Reveals */}
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
