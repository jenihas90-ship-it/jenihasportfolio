import React, { useState } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  Copy,
  Check,
  GraduationCap,
} from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background radial glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid line background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>Jimma University • Class of 2027</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-xs font-semibold text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Industry Roles</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Jenihas Getachew
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                  Computer Science
                </span>
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Candidate of 2027 graduation in Computer Science from Jimma University, specializing in full-stack web applications, localized software solutions, and programmatic SEO.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                View Projects
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
              >
                Contact Me
              </Button>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              {/* Email Chip */}
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-2 text-slate-300 hover:border-slate-700 transition-colors">
                <Mail className="w-4 h-4 text-indigo-400" />
                <a
                  href="mailto:jenihas90@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  jenihas90@gmail.com
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('jenihas90@gmail.com', 'email')}
                  className="p-1 text-slate-400 hover:text-white transition-colors ml-1 cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Chip */}
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-2 text-slate-300 hover:border-slate-700 transition-colors">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a
                  href="tel:+25193709738"
                  className="font-mono hover:text-white transition-colors"
                >
                  +25193709738
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard('+25193709738', 'phone')}
                  className="p-1 text-slate-400 hover:text-white transition-colors ml-1 cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Code & Architecture Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-2xl backdrop-blur-xl">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    jenihas@jimma-cs:~$
                  </span>
                </div>
                <span className="font-mono text-[11px] text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                  Node v24 / React 19
                </span>
              </div>

              {/* Terminal code snippet */}
              <div className="font-mono text-xs leading-relaxed space-y-2 text-left">
                <p className="text-slate-400">
                  <span className="text-emerald-400">$</span> cat profile.json
                </p>
                <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800/80 space-y-1 text-slate-300">
                  <p>
                    <span className="text-indigo-400">"candidate"</span>:{' '}
                    <span className="text-amber-300">"Jenihas Getachew"</span>,
                  </p>
                  <p>
                    <span className="text-indigo-400">"university"</span>:{' '}
                    <span className="text-emerald-300">"Jimma University"</span>,
                  </p>
                  <p>
                    <span className="text-indigo-400">"graduation"</span>:{' '}
                    <span className="text-cyan-300">2027</span>,
                  </p>
                  <p>
                    <span className="text-indigo-400">"focusAreas"</span>: [
                  </p>
                  <p className="pl-4 text-slate-400">
                    <span className="text-amber-200">"Full-Stack Web Architectures"</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    <span className="text-amber-200">"Localized Ethiopian Software (Amharic)"</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    <span className="text-amber-200">"Telebirr / Chapa Payment Processing"</span>,
                  </p>
                  <p className="pl-4 text-slate-400">
                    <span className="text-amber-200">"Programmatic SEO Directory Engines"</span>
                  </p>
                  <p>],</p>
                  <p>
                    <span className="text-indigo-400">"deployments"</span>:{' '}
                    <span className="text-cyan-300">"Vercel Production CI/CD"</span>
                  </p>
                </div>

                {/* Quick Deploy Highlights */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-2.5">
                    <div className="text-[10px] text-slate-400 uppercase font-sans">Active Deployment</div>
                    <div className="text-xs font-semibold text-white">SuqSync POS</div>
                    <div className="text-[10px] text-emerald-400">Amharic + Telebirr</div>
                  </div>
                  <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-2.5">
                    <div className="text-[10px] text-slate-400 uppercase font-sans">SEO Engine</div>
                    <div className="text-xs font-semibold text-white">Dental LeadGen</div>
                    <div className="text-[10px] text-cyan-400">Programmatic Scale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
