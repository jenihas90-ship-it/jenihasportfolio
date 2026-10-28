import React from 'react';
import { ExternalLink, CheckCircle2, Zap, Layers } from 'lucide-react';
import Button from './Button';

export default function ProjectCard({ project }) {
  const {
    title,
    tagline,
    description,
    techStack = [],
    keyIntegrations,
    liveLink,
    metrics = [],
    badgeText = 'Production Live',
    accentColor = 'indigo', // indigo, cyan, emerald
  } = project;

  const accentBorderMap = {
    indigo: 'hover:border-indigo-500/50 group-hover:shadow-indigo-500/10',
    cyan: 'hover:border-cyan-500/50 group-hover:shadow-cyan-500/10',
    emerald: 'hover:border-emerald-500/50 group-hover:shadow-emerald-500/10',
  };

  const accentBadgeMap = {
    indigo: 'text-indigo-400 bg-indigo-950/60 border-indigo-800/50',
    cyan: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/50',
    emerald: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/50',
  };

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        accentBorderMap[accentColor] || accentBorderMap.indigo
      }`}
    >
      {/* Top subtle glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent group-hover:via-indigo-500/70 transition-all duration-300" />

      <div>
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${
              accentBadgeMap[accentColor] || accentBadgeMap.indigo
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {badgeText}
          </span>
          {tagline && (
            <span className="text-xs text-slate-400 font-mono tracking-tight">
              {tagline}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Key Integrations Highlight Box */}
        {keyIntegrations && (
          <div className="mb-6 rounded-xl bg-slate-950/80 border border-slate-800/90 p-3.5 text-xs md:text-sm">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-1">
              <Zap className="w-4 h-4 shrink-0 text-amber-400" />
              <span>Key Architecture & Integrations</span>
            </div>
            <p className="text-slate-300 font-mono text-xs pl-6">
              {keyIntegrations}
            </p>
          </div>
        )}

        {/* Metrics or Highlights list */}
        {metrics && metrics.length > 0 && (
          <ul className="mb-6 space-y-2">
            {metrics.map((metric, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-slate-800/80 mb-6">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2 font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        {liveLink && (
          <Button
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            icon={ExternalLink}
            iconPosition="right"
            className="w-full justify-center group-hover:bg-indigo-500"
          >
            Visit Live Deployment
          </Button>
        )}
      </div>
    </div>
  );
}
