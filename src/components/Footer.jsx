import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';

export default function Footer() {
  const { footer, brand } = SITE_CONTENT;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-black/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-black/5">
          
          {/* Col 1 & 2: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex group" 
              data-cursor="Visit Home"
            >
              <span className="font-extrabold tracking-tight text-2xl text-black font-sans hover:text-[#00cc99] transition-colors">
                {brand.name}
              </span>
            </a>

            <p className="text-sm text-black/60 max-w-sm leading-relaxed">
              Full Stack Developer & WordPress Developer with 1+ year of experience delivering 3+ live websites and actively engineering internal company web solutions.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${brand.email}`}
                className="text-sm font-semibold text-black hover:text-[#6670ff] transition-colors inline-flex items-center gap-1.5"
              >
                <span>{brand.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4 className="font-bold text-sm text-black uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footer.usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-black/60 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h4 className="font-bold text-sm text-black uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              {footer.socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-black/60 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black/50 font-medium">
          <div>
            © Copyright {brand.copyrightYear} · {brand.name} · Full Stack & WordPress Developer
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="Scroll to Top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fafafa] border border-black/5 hover:border-black/15 text-black transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
