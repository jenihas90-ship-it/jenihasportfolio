import React, { useState } from 'react';
import {
  Code,
  Server,
  Smartphone,
  Database,
  Layers,
  CheckCircle,
} from 'lucide-react';
import SkillBadge from '../ui/SkillBadge';

export default function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Exact data structure specified in Section 4.B
  const skillsData = [
    {
      category: 'Frontend',
      icon: Code,
      accent: 'cyan',
      description:
        'Crafting responsive, high-performance interfaces with modern React paradigms, utility-first CSS, and smooth interaction states.',
      skills: ['React.js', 'Tailwind CSS'],
      details: [
        'Component-driven architecture with clean state management',
        'Mobile-first responsive styling & dark-mode aesthetics',
        'Vite-powered fast refresh & optimized asset bundling',
      ],
    },
    {
      category: 'Backend & API',
      icon: Server,
      accent: 'emerald',
      description:
        'Building scalable RESTful services, server-side business logic, webhook pipelines, and seamless third-party payment integrations.',
      skills: ['Node.js', 'Express', 'PHP', 'Python'],
      details: [
        'REST API design & JSON payload handling',
        'Chapa & Telebirr fintech integration workflows',
        'Backend scripting, routing, and microservice integration',
      ],
    },
    {
      category: 'Mobile & App Dev',
      icon: Smartphone,
      accent: 'amber',
      description:
        'Developing native and localized mobile experiences engineered for emerging market retail workflows and offline resilience.',
      skills: ['Android Studio'],
      details: [
        'Android Studio environment configuration and SDK toolchains',
        'Mobile-first UI/UX for retail & point-of-sale environments',
        'Localized language handling & device screen adaptation',
      ],
    },
    {
      category: 'Database & Infrastructure',
      icon: Database,
      accent: 'indigo',
      description:
        'Managing persistent document datastores, automated CI/CD deployment pipelines, and edge network hosting.',
      skills: ['MongoDB', 'Vercel'],
      details: [
        'MongoDB document schema design & CRUD aggregation',
        'Vercel CI/CD pipeline automation & global Edge network',
        'Environment secrets management & production health checks',
      ],
    },
  ];

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredData =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Categorized Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive overview of foundational technologies, frameworks, and deployment platforms utilized across production web, mobile, and backend architectures.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-500'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredData.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-xl"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-indigo-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {group.skills.length} core {group.skills.length > 1 ? 'technologies' : 'technology'}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {group.description}
                  </p>

                  {/* Badges mapped via SkillBadge */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {group.skills.map((skill) => (
                      <SkillBadge
                        key={skill}
                        name={skill}
                        category={group.category}
                        highlight={true}
                      />
                    ))}
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                    Core Competencies
                  </div>
                  {group.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
