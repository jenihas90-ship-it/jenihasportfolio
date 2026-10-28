import React from 'react';
import { ArrowUp, Mail, Phone, ExternalLink, Globe } from 'lucide-react';

const CURRENT_YEAR = 2027;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Academic Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-indigo-500/20">
                JG
              </div>
              <div>
                <h4 className="text-white font-bold text-lg tracking-tight">Jenihas Getachew</h4>
                <p className="text-xs text-indigo-400 font-medium">Computer Science • Jimma University (Class of 2027)</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Engineering scalable full-stack web applications, localized retail software, and programmatic SEO platforms. Built for high performance, reliability, and real-world impact.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open for Industry Opportunities & Collaborations
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h5 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#about" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Skills Matrix
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#publications" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Technical Publications
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Contact Form & Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Deployments */}
          <div>
            <h5 className="text-white text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
              Get in Touch
            </h5>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:jenihas90@gmail.com"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-indigo-300 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs break-all">jenihas90@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+25193709738"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-indigo-300 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono">+25193709738</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://suqsync.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  <span>SuqSync Live App</span>
                </a>
              </li>
              <li>
                <a
                  href="https://jenihightechnology.org.et/wordpress/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-500" />
                  <span>JeniHighTech Publications</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {CURRENT_YEAR} Jenihas Getachew. All rights reserved.</span>
            <span>•</span>
            <span className="font-mono text-slate-400">Deployed on Vercel</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
