import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Tag, ShieldCheck, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl sm:rounded-[36px] border border-black/10 shadow-2xl p-6 sm:p-10 z-10"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Project Header */}
          <div className="mb-6 pr-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fafafa] border border-black/5 text-xs font-bold uppercase tracking-wider text-black mb-3">
              <Tag className="w-3.5 h-3.5 text-[#00cc99]" />
              <span>{project.category}</span>
            </div>
            
            <h2 className="font-sans font-black text-2xl sm:text-4xl text-black tracking-tight mb-4">
              {project.title}
            </h2>
            
            <p className="text-sm sm:text-base text-black/75 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Screenshot Preview with Gallery Navigation */}
          <div className="space-y-3 mb-8">
            <div className="w-full rounded-2xl overflow-hidden border border-black/10 shadow-md bg-[#141416] relative flex items-center justify-center min-h-[260px] sm:min-h-[400px]">
              <img
                src={gallery[activeImageIndex]}
                alt={`${project.title} Screenshot ${activeImageIndex + 1}`}
                className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
              />
            </div>

            {/* Thumbnail selector if multiple screenshots */}
            {gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto py-2">
                <span className="text-xs font-bold uppercase tracking-wider text-black/40 flex items-center gap-1 shrink-0">
                  <ImageIcon className="w-3.5 h-3.5" /> Screenshots:
                </span>
                {gallery.map((img, idx) => (
                  <button
                    key={img}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all shrink-0 w-20 h-14 ${
                      activeImageIndex === idx 
                        ? 'border-[#00cc99] shadow-md scale-105' 
                        : 'border-black/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Full-Stack Developer Role & Architecture */}
          {project.role && (
            <div className="p-5 rounded-2xl bg-[#fafafa] border border-black/5 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#00cc99]" />
                <span className="text-xs font-bold uppercase tracking-wider text-black">
                  My Role & Responsibilities
                </span>
              </div>
              <p className="text-sm text-black/80 leading-relaxed font-medium">
                {project.role}
              </p>
            </div>
          )}

          {/* Note Callout */}
          {project.note && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-8 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                {project.note}
              </p>
            </div>
          )}

          {/* Project Meta Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#fafafa] border border-black/5 mb-8">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-black/50 font-bold uppercase tracking-wider mb-1">
                <User className="w-3.5 h-3.5" />
                <span>Client</span>
              </div>
              <span className="text-sm font-semibold text-black">
                {project.client || "Client Project"}
              </span>
            </div>
            
            <div>
              <div className="flex items-center gap-1.5 text-xs text-black/50 font-bold uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Timeline</span>
              </div>
              <span className="text-sm font-semibold text-black">
                {project.timeline || "Completed"}
              </span>
            </div>
            
            <div>
              <div className="flex items-center gap-1.5 text-xs text-black/50 font-bold uppercase tracking-wider mb-1">
                <Tag className="w-3.5 h-3.5" />
                <span>Platform</span>
              </div>
              <span className="text-sm font-semibold text-black">
                {project.platform || "Full-Stack Web App"}
              </span>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between border-t border-black/5 pt-6">
            <span className="text-xs text-black/50 font-medium">
              Case study & visual screenshots verified
            </span>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-[#66ffd9] hover:text-black transition-colors"
            >
              Close Walkthrough
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
