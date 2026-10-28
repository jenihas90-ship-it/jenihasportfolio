import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Monogram & Name */}
          <a
            href="#about"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              JG
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-semibold tracking-tight text-sm md:text-base group-hover:text-indigo-400 transition-colors">
                Jenihas Getachew
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wide">
                CS • Jimma University '27
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action / Quick Contact */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:jenihas90@gmail.com"
              title="Email Jenihas"
              className="p-2 rounded-lg text-slate-400 hover:text-indigo-300 hover:bg-slate-800/60 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={Sparkles}
              iconPosition="left"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 transition-all duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-slate-400 px-2 py-1">
                <span>Direct Contact:</span>
                <span className="font-mono text-indigo-400">+25193709738</span>
              </div>
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
