import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

export default function Pricing() {
  const { pricing } = SITE_CONTENT;

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-pill text-xs font-semibold uppercase tracking-wider text-black mb-4">
            {pricing.badge}
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-black max-w-3xl mb-4">
            {pricing.heading}
          </h2>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricing.plans.map((p, idx) => {
            const isPopular = p.popular;

            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.25, 1, 0.5, 1] }}
                whileHover={{ y: -8 }}
                data-cursor={isPopular ? "Best Value" : "Select Plan"}
                className={`relative rounded-3xl sm:rounded-[36px] p-8 sm:p-10 flex flex-col justify-between transition-shadow duration-300 ${
                  isPopular
                    ? 'bg-[#1a1a1a] text-white shadow-2xl scale-105 z-10 border-2 border-[#66ffd9]'
                    : 'bg-white text-black border border-black/5 shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Popular Badge with Pulsing Sparkle */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#66ffd9] text-black text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-black" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <h3 className="font-extrabold text-2xl font-sans mb-2">{p.name}</h3>
                  <p className={`text-sm mb-6 ${isPopular ? 'text-white/70' : 'text-black/60'}`}>
                    {p.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-black/10 dark:border-white/10">
                    <span className="font-black text-4xl sm:text-5xl tracking-tight">{p.price}</span>
                    <span className={`text-sm font-medium ${isPopular ? 'text-white/60' : 'text-black/60'}`}>
                      {p.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-10">
                    <span className="text-xs font-bold uppercase tracking-wider block opacity-70">
                      What's Included:
                    </span>
                    {p.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular ? 'bg-[#66ffd9]/20 text-[#66ffd9]' : 'bg-black/5 text-black'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={`text-sm font-medium leading-snug ${
                          isPopular ? 'text-white/90' : 'text-black/80'
                        }`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors duration-300 shadow-md ${
                    isPopular
                      ? 'bg-[#66ffd9] text-black hover:bg-white'
                      : 'bg-black text-white hover:bg-[#66ffd9] hover:text-black'
                  }`}
                >
                  <span>{p.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
