import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, Terminal, Code2, CheckCircle2 } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

export default function Services() {
  const { services } = SITE_CONTENT;
  const [openService, setOpenService] = useState(0);

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  const codeSnippets = {
    "01": `// 01. Full-Stack Web Architecture
import { createServer } from 'node:http';
import express from 'express';

const api = express();
api.use(express.json());

// Secure REST API & Database Pipeline
api.post('/api/auth/login', async (req, res) => {
  const { email, token } = await authService.authenticate(req.body);
  return res.status(200).json({ status: "success", user: email });
});

export default api;`,

    "02": `// 02. Custom WordPress & WooCommerce Solution
add_action('woocommerce_checkout_order_processed', function($order_id) {
  $order = wc_get_order($order_id);
  
  // Custom automated fulfillment webhook
  wp_remote_post('https://api.crm.com/v1/orders', [
    'body' => json_encode([
      'id'    => $order_id,
      'total' => $order->get_total(),
      'sync'  => true
    ])
  ]);
});`
  };

  const serviceFeatures = {
    "01": [
      "Dynamic single-page apps (React.js, Next.js)",
      "Secure RESTful APIs (Node.js, Express)",
      "Database schema & modeling (MongoDB, MySQL)",
      "JWT user authentication & role management",
      "Stripe & payment gateway API integration",
      "Responsive, mobile-first Tailwind CSS UI"
    ],
    "02": [
      "Bespoke WordPress theme creation from scratch",
      "Advanced Custom Fields (ACF Pro) architectures",
      "High-converting WooCommerce store configurations",
      "Stripe, PayPal & custom payment gateways",
      "Gutenberg block & Elementor customization",
      "95+ Google PageSpeed Core Web Vitals score"
    ]
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background Developer Code Watermark Stream */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.03] font-mono text-xs leading-relaxed text-black -z-10">
        <pre className="p-8">
{`01  // Enterprise Backend & CMS Microservices
02  const express = require('express');
03  const router = express.Router();
04  
05  router.get('/services/fullstack', async (req, res) => {
06    const architecture = await buildMERNStack({
07      frontend: 'React + Tailwind CSS',
08      backend: 'Node.js + Express',
09      database: 'MongoDB / PostgreSQL',
10      security: 'CORS + Helmet + JWT'
11    });
12    return res.json(architecture);
13  });
14  
15  router.get('/services/wordpress', async (req, res) => {
16    const wp = await loadCustomTheme({
17      acf: true,
18      woocommerce: true,
19      speedOptimization: "99/100"
20    });
21    return res.json(wp);
22  });`}
        </pre>
      </div>

      {/* Floating Developer Widgets on Sides */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute -left-10 top-1/3 w-64 pointer-events-none opacity-80"
      >
        <div className="rounded-2xl bg-[#fafafa] border border-black/10 p-3.5 shadow-lg font-mono text-[11px] text-black/70">
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-black/5">
            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
            <span className="ml-1 text-[9px] text-black/40 font-sans">server.js</span>
          </div>
          <p className="text-[#6670ff]">app.use('/api/v1');</p>
          <p className="text-[#00cc99]">status: 200 OK</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden lg:block absolute -right-10 bottom-1/3 w-64 pointer-events-none opacity-80"
      >
        <div className="rounded-2xl bg-[#141416] border border-white/10 p-3.5 shadow-xl font-mono text-[11px] text-white/80">
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
            <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
            <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
            <span className="ml-1 text-[9px] text-white/40 font-sans">theme.php</span>
          </div>
          <p className="text-[#66ffd9]">add_theme_support();</p>
          <p className="text-[#f59e0b]">woocommerce: ready</p>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#fafafa] border border-black/5 shadow-pill text-xs font-semibold uppercase tracking-wider text-black mb-4">
            <Code2 className="w-3.5 h-3.5 text-[#00cc99]" />
            <span>{services.badge}</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-black max-w-3xl mb-4">
            {services.heading}
          </h2>
        </motion.div>

        {/* Services Accordion List with Real Developer Code Previews */}
        <div className="space-y-6">
          {services.items.map((svc, idx) => {
            const isOpen = openService === idx;

            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                layout
                data-cursor={isOpen ? "Collapse" : "Expand"}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#141416] text-white border-black/10 shadow-2xl' 
                    : 'bg-[#fafafa] text-black border-black/5 hover:border-black/20 shadow-sm hover:bg-white'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleService(idx)}
                  className="w-full px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-5 sm:gap-8">
                    <span className={`font-mono font-bold text-lg sm:text-2xl transition-colors duration-300 ${
                      isOpen ? 'text-[#66ffd9]' : 'text-black/40'
                    }`}>
                      {svc.id}
                    </span>
                    <h3 className="font-extrabold text-lg sm:text-2xl font-sans tracking-tight">
                      {svc.title}
                    </h3>
                  </div>

                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isOpen ? 'bg-white/10 text-white' : 'bg-black/5 text-black'
                  }`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Content with Developer Code Preview */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-10 pb-8 sm:pb-10 pt-2 border-t border-white/10">
                        <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
                          {svc.description}
                        </p>

                        {/* Two Columns: Features Checklist + Developer Code Block */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                          
                          {/* Features Column */}
                          <div className="lg:col-span-5 space-y-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#66ffd9] block mb-2">
                              What's Included:
                            </span>
                            {serviceFeatures[svc.id]?.map((feat) => (
                              <div key={feat} className="flex items-start gap-2.5 text-sm text-white/85">
                                <CheckCircle2 className="w-4 h-4 text-[#00cc99] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>

                          {/* Code Preview Box */}
                          <div className="lg:col-span-7 rounded-2xl bg-black/60 border border-white/10 p-4 font-mono text-xs overflow-x-auto shadow-inner">
                            <div className="flex items-center gap-1.5 pb-2.5 mb-3 border-b border-white/10">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                              <span className="ml-2 text-[10px] text-white/40 font-sans flex items-center gap-1">
                                <Terminal className="w-3 h-3 text-[#66ffd9]" /> 
                                {svc.id === "01" ? "fullstack-api.ts" : "wordpress-woo.php"}
                              </span>
                            </div>
                            <pre className="text-white/80 leading-relaxed overflow-x-auto">
                              {codeSnippets[svc.id]}
                            </pre>
                          </div>

                        </div>

                        {/* CTA Link */}
                        <div className="pt-8 mt-6 border-t border-white/10 flex justify-end">
                          <a
                            href="#contact"
                            data-cursor="Discuss Project"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#66ffd9] text-black font-bold text-sm hover:bg-white transition-colors"
                          >
                            <span>Discuss This Service</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
