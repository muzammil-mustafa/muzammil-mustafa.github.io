import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

export default function Testimonials() {
  const { testimonials } = SITE_CONTENT;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const length = testimonials.reviews.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  // Auto slide interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  const currentReview = testimonials.reviews[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#fafafa] border border-black/5 shadow-pill text-xs font-semibold uppercase tracking-wider text-black mb-4">
            {testimonials.badge}
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-black max-w-3xl">
            {testimonials.heading}
          </h2>
        </motion.div>

        {/* Framer Slideshow Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full max-w-3xl mx-auto min-h-[380px] flex flex-col justify-between"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-[#fafafa] rounded-3xl sm:rounded-[40px] border border-black/5 p-8 sm:p-12 md:p-14 shadow-card flex flex-col justify-between"
            >
              <div>
                {/* Stars and Quote mark */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-1.5 text-[#ffc233]">
                    {[...Array(currentReview.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#ffc233]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-black/15" />
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-2xl text-black font-normal leading-relaxed mb-10">
                  "{currentReview.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-white border border-black/10 shadow-sm shrink-0">
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black font-sans">{currentReview.name}</h4>
                  <p className="text-xs sm:text-sm text-black/60 font-medium">{currentReview.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls: Arrows + Dots */}
          <div className="flex items-center justify-between mt-8 px-2">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-8 bg-[#6670ff]' 
                      : 'w-2.5 bg-black/20 hover:bg-black/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Previous / Next Arrows */}
            <div className="flex items-center gap-2.5">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                data-cursor="Previous"
                className="w-11 h-11 rounded-full bg-[#fafafa] border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors shadow-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                data-cursor="Next"
                className="w-11 h-11 rounded-full bg-[#fafafa] border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors shadow-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
