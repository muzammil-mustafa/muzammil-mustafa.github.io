import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, FileText, RotateCw, Globe, Sparkles } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

// 3D Tilt & Flip Skill Card with Proper Spring Physics
function SkillCard({ item, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  // 3D Mouse Tilt tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 220, damping: 22 });

  const tiltX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const tiltY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    if (isFlipped || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width - 0.5;
    const yVal = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xVal);
    y.set(yVal);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.25, 1, 0.5, 1] }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      data-cursor={isFlipped ? "Flip to Front" : "Flip to Back"}
      style={{
        rotateX: isFlipped ? 0 : tiltX,
        rotateY: isFlipped ? 0 : tiltY,
        transformStyle: 'preserve-3d',
      }}
      className="perspective-1000 h-[330px] cursor-pointer select-none group"
    >
      {/* Flipping Inner Container */}
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 22,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {/* FRONT FACE */}
        <div 
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          className="absolute inset-0 w-full h-full rounded-3xl bg-white border border-black/10 p-5 flex flex-col items-center justify-between shadow-card hover:shadow-card-hover transition-all duration-300"
        >
          {/* Header Tag */}
          <div className="w-full flex justify-between items-center">
            <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: item.color }} />
            <span className="text-[10px] font-bold uppercase tracking-wider text-black/60 px-2.5 py-0.5 rounded-full bg-[#fafafa] border border-black/5">
              {item.badge}
            </span>
          </div>

          {/* Official Logo Display */}
          <div className="w-20 h-20 rounded-2xl bg-[#fafafa] border border-black/5 p-3.5 flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:bg-white group-hover:shadow-sm">
            <img src={item.icon} alt={item.name} className="w-full h-full object-contain" loading="lazy" />
          </div>

          {/* Name & Website Types Info */}
          <div className="flex flex-col items-center text-center w-full gap-2">
            <h4 className="font-extrabold text-lg text-black font-sans tracking-tight">
              {item.name}
            </h4>
            
            <p className="text-[11px] text-black/60 line-clamp-2 px-2 font-medium">
              {item.websites}
            </p>

            {/* Flip Indicator Button */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fafafa] border border-black/5 text-xs font-semibold text-black/70 group-hover:text-black group-hover:bg-[#66ffd9] transition-colors mt-1">
              <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
              <span>Tap to flip</span>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute inset-0 w-full h-full rounded-3xl bg-[#141416] text-white p-6 flex flex-col justify-between shadow-2xl border border-white/10"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-white/10 p-1 flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-full h-full object-contain" />
                </div>
                <span className="font-bold text-sm text-white font-sans">{item.name}</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                {item.badge}
              </span>
            </div>

            {/* What I Build With This */}
            <div className="mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#66ffd9] block mb-1">
                Websites I Build:
              </span>
              <p className="text-xs font-medium text-white/90 leading-snug">
                {item.websites}
              </p>
            </div>

            <p className="text-xs text-white/70 leading-relaxed font-normal mt-2 border-t border-white/5 pt-2">
              {item.description}
            </p>
          </div>

          {/* Flip Back Button */}
          <div className="text-center pt-2 border-t border-white/10 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#66ffd9] group-hover:underline">
            <RotateCw className="w-3 h-3" />
            <span>Tap to flip back</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const { about, brand } = SITE_CONTENT;

  return (
    <section id="about" className="py-20 md:py-32 bg-[#fafafa]">
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
            {about.badge}
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-black max-w-3xl">
            {about.heading}
          </h2>
        </motion.div>

        {/* Main Card: Profile Narrative & Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="bg-white rounded-3xl sm:rounded-[36px] border border-black/5 p-6 sm:p-10 md:p-14 shadow-card mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Portrait & Stats */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-sm aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-black/5 relative group"
                data-cursor={brand.name}
              >
                <img
                  src={about.profilePic}
                  alt={brand.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold text-lg">{brand.name}</span>
                </div>
              </motion.div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-6">
                {about.metrics.map((m, idx) => (
                  <motion.div 
                    key={m.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-2xl bg-[#fafafa] border border-black/5 flex flex-col items-center text-center transition-shadow hover:shadow-sm"
                  >
                    <span className="font-extrabold text-2xl sm:text-3xl text-black">{m.value}</span>
                    <span className="text-xs text-black/60 font-medium mt-0.5">{m.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Narrative & CV Button */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <h3 className="font-serif italic font-bold text-2xl sm:text-3xl md:text-4xl text-black mb-6">
                "Every line of code serves a purpose."
              </h3>

              <div className="space-y-6 text-base sm:text-lg text-black/70 font-normal leading-relaxed mb-10">
                <p>{about.story1}</p>
                <p>{about.story2}</p>
              </div>

              {/* Read My CV Button */}
              <motion.a
                href="./cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Download CV"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white text-base font-semibold hover:bg-[#66ffd9] hover:text-black transition-colors duration-300 shadow-md"
              >
                <FileText className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                <span>{about.cvButton}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>

          </div>
        </motion.div>

        {/* SECTION: What Types of Websites Do I Build? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-pill text-xs font-semibold uppercase tracking-wider text-black mb-3">
              <Globe className="w-3.5 h-3.5 text-[#00cc99]" />
              <span>{about.websiteTypesBadge}</span>
            </div>
            <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-black max-w-2xl">
              {about.websiteTypesHeading}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.websiteTypes.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 border border-black/5 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#fafafa] border border-black/5 text-[11px] font-bold text-black uppercase tracking-wider mb-4">
                    {item.tag}
                  </div>
                  <h4 className="font-sans font-extrabold text-lg text-black mb-2.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-black/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECTION: Tech Skills Showcase & Flip Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-pill text-xs font-semibold uppercase tracking-wider text-black mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#ff4f00]" />
              <span>{about.skillsBadge}</span>
            </div>
            <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-black max-w-2xl mb-3">
              {about.skillsHeading}
            </h3>
            <p className="text-sm sm:text-base text-black/60 max-w-xl">
              {about.skillsIntro}
            </p>
          </div>

          {/* 3D Flip Cards Grid with Spring Physics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {about.skills.map((skill, idx) => (
              <SkillCard key={skill.name} item={skill} index={idx} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
