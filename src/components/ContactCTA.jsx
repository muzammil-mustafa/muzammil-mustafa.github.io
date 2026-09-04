import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Mail, Video } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import BookingModal from './BookingModal';

export default function ContactCTA() {
  const { contact } = SITE_CONTENT;
  const [copied, setCopied] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Big Impact CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative rounded-3xl sm:rounded-[48px] bg-[#1a1a1a] text-white p-8 sm:p-14 md:p-20 overflow-hidden shadow-2xl border border-white/10"
        >
          
          {/* Subtle Background Pulsing Glows */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#66ffd9]/20 blur-3xl rounded-full pointer-events-none -z-0"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#6670ff]/25 blur-3xl rounded-full pointer-events-none -z-0"
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#66ffd9] mb-6"
            >
              <Video className="w-3.5 h-3.5" />
              <span>{contact.badge}</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-sans font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white mb-6 uppercase"
            >
              {contact.heading}
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-xl text-white/70 font-normal leading-relaxed mb-12 max-w-xl"
            >
              {contact.subheading}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {/* Book a Call Button - Triggers Google Meet Booking Modal */}
              <motion.button
                onClick={() => setIsBookingOpen(true)}
                data-cursor="Book a Call"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#66ffd9] text-black text-base font-bold hover:bg-white transition-colors duration-300 shadow-lg"
              >
                <Video className="w-4 h-4 text-black" />
                <span>{contact.ctaPrimary}</span>
                <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.button>

              <motion.button
                onClick={handleCopyEmail}
                data-cursor="Copy Email"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 border border-white/15 text-white text-base font-semibold hover:bg-white/20 transition-all duration-300"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#66ffd9]" />
                    <span className="text-[#66ffd9]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 opacity-80" />
                    <span>{contact.email}</span>
                  </>
                )}
              </motion.button>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Google Meet Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
}
