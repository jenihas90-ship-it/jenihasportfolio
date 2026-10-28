import React from 'react';
import { Rocket, Zap } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';

export default function ProjectShowcase() {
  // Exact data payload from Section 4.C
  const projects = [
    {
      id: 'suqsync',
      title: 'SuqSync',
      tagline: 'Fintech & Retail POS',
      badgeText: 'Production Deployment',
      accentColor: 'emerald',
      description:
        'A mobile-first point-of-sale and inventory tracking application engineered for Ethiopian shop owners. Features full Amharic localization to empower traditional commerce with modern cloud inventory tools.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      keyIntegrations: 'Telebirr payment processing via Chapa API',
      liveLink: 'https://suqsync.vercel.app/',
      metrics: [
        'Complete Amharic localization for shop merchants & cashiers',
        'Direct mobile wallet checkout supporting Telebirr via Chapa API',
        'Real-time inventory decrement, sales history & receipt ledger',
        'Mobile-first responsive UX tailored for smartphone POS operation',
      ],
    },
    {
      id: 'seo-platform',
      title: 'Programmatic SEO Lead-Gen Platform',
      tagline: 'Directory & Search Engine',
      badgeText: 'Production Live',
      accentColor: 'indigo',
      description:
        'A highly optimized directory website and lead-generation engine designed for dental marketing agencies. Engineered with programmatic page generation for maximum organic reach and conversion velocity.',
      techStack: ['React', 'Vercel'],
      keyIntegrations: 'Programmatic indexing, dynamic lead forms & Vercel Edge routing',
      liveLink: 'https://lseole-aqc5.vercel.app/',
      metrics: [
        'Scalable programmatic directory architecture targeting high-intent search terms',
        'Optimized Core Web Vitals delivered via Vercel Edge Network',
        'Integrated lead capture forms and conversion routing for dental clinics',
        'Dynamic directory filtering, geo-targeted listing pages, and responsive layout',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-xs font-semibold text-emerald-300">
            <Rocket className="w-3.5 h-3.5 text-emerald-400" />
            <span>Production Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Case Studies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Production-ready software deployed on Vercel, integrating real-world payment rails, localization architectures, and high-performance search optimization.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Deployment & Architecture Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">
                Architected for Vercel Edge & Zero-Downtime CI/CD
              </h4>
              <p className="text-slate-400 text-xs md:text-sm mt-0.5">
                Every release follows strict Git flow, automated builds, and cloud environment isolation.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-3 py-1.5 rounded-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              100% Vercel Uptime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
