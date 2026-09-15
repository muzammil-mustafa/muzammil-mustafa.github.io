import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Terminal, Code2, Sparkles } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONTENT.brand.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
      
      {/* Background Developer Monospace Code Stream */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.035] -z-20 font-mono text-xs sm:text-sm leading-relaxed text-black">
        <pre className="p-6">
{`01  import React, { useState, useEffect } from 'react';
02  import { createServer } from 'node:http';
03  import { MongoClient } from 'mongodb';
04  
05  // Full Stack & WordPress Developer Architecture
06  export class WebArchitecture {
07    constructor(developer = "Muzammil Mustafa") {
08      this.developer = developer;
09      this.stack = ["React.js", "Node.js", "Express", "WordPress", "WooCommerce", "TailwindCSS"];
10      this.experience = "6 Months";
11      this.company = "Techifyy";
12      this.status = "Available for High-Impact Projects";
13    }
14  
15    async initializeEcosystem() {
16      const frontEnd = await this.renderReactEngine({ responsive: true, speed: "99/100" });
17      const apiGateway = await this.mountRESTEndpoints({ auth: "JWT", security: "High" });
18      const cms = await this.connectWordPress({ acf: true, woocommerce: true });
19      return { status: 200, ready: true };
20    }
21  }
22  
23  // Live Controller Pipeline
24  const app = new WebArchitecture();
25  app.initializeEcosystem().then(console.log);`}
        </pre>
      </div>

      {/* Decorative Ambient Gradient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-[#66ffd9]/35 via-[#6670ff]/20 to-[#f94706]/15 blur-3xl pointer-events-none -z-10 rounded-full"
      />

      {/* Left Floating Developer Code Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden xl:block absolute left-8 top-36 w-72 pointer-events-none z-0"
      >
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-2xl bg-white/80 backdrop-blur-xl border border-black/10 p-4 shadow-xl text-left font-mono text-[11px] leading-relaxed"
        >
          <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-black/5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-[10px] text-black/40 font-sans font-medium flex items-center gap-1">
              <Code2 className="w-3 h-3 text-[#00cc99]" /> dev.config.ts
            </span>
          </div>
          <div className="text-black/80 space-y-0.5">
            <p><span className="text-[#6670ff] font-bold">const</span> <span className="text-[#00cc99]">developer</span> = &#123;</p>
            <p className="pl-3"><span className="text-black/50">name:</span> <span className="text-[#e34f26]">"Muzammil"</span>,</p>
            <p className="pl-3"><span className="text-black/50">role:</span> <span className="text-[#e34f26]">"Full Stack & WP"</span>,</p>
            <p className="pl-3"><span className="text-black/50">experience:</span> <span className="text-[#9333ea] font-bold">"6 Months"</span>,</p>
            <p className="pl-3"><span className="text-black/50">company:</span> <span className="text-[#00cc99]">"Techifyy"</span></p>
            <p>&#125;;</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Floating Developer Terminal Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden xl:block absolute right-8 top-44 w-80 pointer-events-none z-0"
      >
        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="rounded-2xl bg-[#141416]/90 backdrop-blur-xl border border-white/10 p-4 shadow-2xl text-left font-mono text-[11px] leading-relaxed text-white"
        >
          <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-[10px] text-white/50 font-sans font-medium flex items-center gap-1">
              <Terminal className="w-3 h-3 text-[#66ffd9]" /> deploy.sh
            </span>
          </div>
          <div className="text-white/85 space-y-0.5">
            <p className="text-white/50">// Production pipeline</p>
            <p><span className="text-[#66ffd9]">export async function</span> <span className="text-[#ffbd2e]">deploySite</span>() &#123;</p>
            <p className="pl-3"><span className="text-[#66ffd9]">const</span> app = <span className="text-[#66ffd9]">await</span> buildStack();</p>
            <p className="pl-3"><span className="text-[#66ffd9]">return</span> app.launch(&#123; <span className="text-[#00cc99]">speed: 99</span> &#125;);</p>
            <p>&#125;</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-pill text-xs font-semibold uppercase tracking-wider text-black mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00cc99] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00cc99]"></span>
            </span>
            <span>{SITE_CONTENT.hero.statusBadge}</span>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="font-serif italic font-bold text-3xl sm:text-4xl md:text-5xl text-black mb-3"
          >
            {SITE_CONTENT.hero.subtitle}
          </motion.h2>

          {/* Giant Display Headline */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="font-black text-6xl sm:text-8xl md:text-9xl lg:text-[135px] tracking-tighter text-black font-sans leading-none uppercase select-none mb-6 text-center"
          >
            {SITE_CONTENT.hero.headline}
          </motion.h1>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-black/70 font-normal leading-relaxed mb-10"
          >
            {SITE_CONTENT.hero.intro}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#contact"
              data-cursor="Book a Call"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white text-base font-semibold hover:bg-[#66ffd9] hover:text-black transition-all duration-300 shadow-lg"
            >
              <span>{SITE_CONTENT.hero.ctaPrimary}</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>

            <motion.button
              onClick={handleCopyEmail}
              data-cursor="Copy Email"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2.5 px-6 py-4 rounded-full bg-white border border-black/10 text-black text-sm font-medium hover:border-black/30 shadow-sm transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#00cc99]" />
                  <span className="text-[#00cc99] font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-black/60" />
                  <span>{SITE_CONTENT.hero.ctaSecondary}</span>
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Floating Feature Badges Marquee / Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl"
          >
            {SITE_CONTENT.hero.floatingBadges.map((badge, idx) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + (idx * 0.06) }}
                whileHover={{ y: -2 }}
                className="px-4 py-2 rounded-full bg-white/80 border border-black/5 shadow-pill text-xs font-semibold text-black/80 hover:text-black hover:border-black/20 transition-all cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
