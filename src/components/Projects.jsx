import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = SITE_CONTENT;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#fafafa] border border-black/5 shadow-pill text-xs font-semibold uppercase tracking-wider text-black mb-4">
            {projects.badge}
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-black max-w-3xl mb-4">
            {projects.heading}
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.items.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.15, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -8 }}
              data-cursor="View Project"
              onClick={() => setSelectedProject(proj)}
              className="group cursor-pointer rounded-3xl sm:rounded-[36px] bg-[#fafafa] border border-black/5 hover:border-black/15 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Project Image Container with Dark Backdrop for Fade Effect */}
              <div className="overflow-hidden aspect-[4/3] bg-white relative p-4 sm:p-6">
                <div className="w-full h-full rounded-2xl sm:rounded-[24px] overflow-hidden relative shadow-sm border border-black/5 bg-[#1a1a1a]">
                  
                  {/* Image with smooth fade on hover */}
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:opacity-45 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Category Tag Overlay - Shifts from dark frosted glass to mint green with black text */}
                  <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider transition-colors duration-300 group-hover:bg-[#66ffd9] group-hover:text-black">
                    {proj.category}
                  </div>

                </div>
              </div>

              {/* Project Card Footer */}
              <div className="p-6 sm:p-8 flex items-center justify-between gap-4 border-t border-black/5 bg-[#fafafa] transition-colors duration-300 group-hover:bg-white">
                <div className="max-w-[80%]">
                  {/* Title remains black */}
                  <h3 className="font-extrabold text-xl sm:text-2xl text-black font-sans tracking-tight line-clamp-1">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/60 font-medium mt-1">
                    Click to view detailed case study
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm shrink-0 group-hover:scale-105">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
