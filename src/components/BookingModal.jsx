import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Video, Calendar, Clock, User, Mail, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

export default function BookingModal({ isOpen, onClose }) {
  const { brand } = SITE_CONTENT;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App Development',
    date: '',
    time: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct rich notification email to Muzammil
    const subject = encodeURIComponent(`[Google Meet Call Request] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Muzammil,\n\n` +
      `I would like to book a 1-on-1 Google Meet call with you:\n\n` +
      `• Client Name: ${formData.name}\n` +
      `• Client Email: ${formData.email}\n` +
      `• Project Type: ${formData.projectType}\n` +
      `• Preferred Date: ${formData.date || 'Flexible'}\n` +
      `• Preferred Time: ${formData.time || 'Flexible'}\n\n` +
      `• Project Details / Topic:\n${formData.message || 'Discussion regarding web development.'}\n\n` +
      `Please confirm the Google Meet invitation link.\n\n` +
      `Best regards,\n${formData.name}`
    );

    // Open mail dispatch
    window.open(`mailto:${brand.email}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  // Google Calendar add event link
  const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Google Meet Call with Muzammil Mustafa'
  )}&details=${encodeURIComponent(
    `1-on-1 Google Meet Discovery Call with Muzammil Mustafa (Full Stack & WordPress Developer).\nTopic: ${formData.projectType}\nClient: ${formData.name} (${formData.email})`
  )}&add=${encodeURIComponent(brand.email)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-xl bg-white rounded-3xl sm:rounded-[36px] border border-black/10 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleReset}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-6 pr-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6f4ea] text-[#137333] border border-[#ceead6] text-xs font-bold uppercase tracking-wider mb-3">
                  <Video className="w-4 h-4 text-[#1a73e8]" />
                  <span>Google Meet Discovery Call</span>
                </div>
                <h3 className="font-sans font-black text-2xl sm:text-3xl text-black tracking-tight mb-2">
                  Book a Video Call
                </h3>
                <p className="text-xs sm:text-sm text-black/65 leading-relaxed">
                  Fill in your details below. A notification with your preferred date and time will be sent directly to Muzammil to confirm your Google Meet link.
                </p>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-black/70 mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#fafafa] border border-black/10 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black/70 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#fafafa] border border-black/10 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-xs font-bold text-black/70 mb-1.5">
                    What would you like to discuss?
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#fafafa] border border-black/10 text-sm focus:outline-none focus:border-black transition-colors text-black/80"
                  >
                    <option value="Full-Stack Web App Development">Full-Stack Web App Development (React, Node.js)</option>
                    <option value="Custom WordPress & WooCommerce">Custom WordPress & WooCommerce Store</option>
                    <option value="Company Web Solutions & Internal Tasks">Company Web Solutions & Internal Tasks</option>
                    <option value="General Consultation / Other">General Tech Consultation / Other</option>
                  </select>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-black/70 mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#fafafa] border border-black/10 text-sm focus:outline-none focus:border-black transition-colors text-black/80"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black/70 mb-1.5">
                      Preferred Time (PKT / UTC)
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-black/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#fafafa] border border-black/10 text-sm focus:outline-none focus:border-black transition-colors text-black/80"
                      />
                    </div>
                  </div>
                </div>

                {/* Brief Message */}
                <div>
                  <label className="block text-xs font-bold text-black/70 mb-1.5">
                    Brief Project Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell me a little about your project goals or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#fafafa] border border-black/10 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black text-white font-bold text-sm hover:bg-[#1a73e8] transition-colors shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Google Meet Request</span>
                  </motion.button>
                </div>

              </form>
            </div>
          ) : (
            /* Success State */
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#e6f4ea] text-[#137333] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              
              <div>
                <h4 className="font-extrabold text-2xl text-black mb-2">
                  Request Dispatched!
                </h4>
                <p className="text-sm text-black/70 max-w-md mx-auto leading-relaxed">
                  Your Google Meet booking notification has been sent to Muzammil Mustafa. You will receive an official Google Meet invite and confirmation link via email.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fafafa] border border-black/5 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between text-black/60">
                  <span>Name:</span>
                  <span className="font-semibold text-black">{formData.name}</span>
                </div>
                <div className="flex justify-between text-black/60">
                  <span>Topic:</span>
                  <span className="font-semibold text-black">{formData.projectType}</span>
                </div>
                {formData.date && (
                  <div className="flex justify-between text-black/60">
                    <span>Date & Time:</span>
                    <span className="font-semibold text-black">{formData.date} at {formData.time || 'Flexible'}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-bold hover:bg-[#1a73e8] transition-colors shadow-sm"
                >
                  <span>Add to Google Calendar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-full border border-black/10 text-xs font-semibold hover:bg-black/5 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
