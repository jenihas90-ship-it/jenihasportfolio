import React from 'react';

const categoryColorMap = {
  Frontend: {
    bg: 'bg-cyan-950/40',
    border: 'border-cyan-500/30 hover:border-cyan-400/60',
    text: 'text-cyan-300',
    dot: 'bg-cyan-400',
  },
  'Backend & API': {
    bg: 'bg-emerald-950/40',
    border: 'border-emerald-500/30 hover:border-emerald-400/60',
    text: 'text-emerald-300',
    dot: 'bg-emerald-400',
  },
  'Mobile & App Dev': {
    bg: 'bg-amber-950/40',
    border: 'border-amber-500/30 hover:border-amber-400/60',
    text: 'text-amber-300',
    dot: 'bg-amber-400',
  },
  'Database & Infrastructure': {
    bg: 'bg-indigo-950/40',
    border: 'border-indigo-500/30 hover:border-indigo-400/60',
    text: 'text-indigo-300',
    dot: 'bg-indigo-400',
  },
  Default: {
    bg: 'bg-slate-900/60',
    border: 'border-slate-700/60 hover:border-slate-500',
    text: 'text-slate-300',
    dot: 'bg-indigo-400',
  },
};

export default function SkillBadge({ name, category = 'Default', highlight = false, className = '' }) {
  const theme = categoryColorMap[category] || categoryColorMap.Default;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium border transition-all duration-200 backdrop-blur-sm ${
        theme.bg
      } ${theme.border} ${theme.text} ${
        highlight ? 'ring-1 ring-indigo-400/50 shadow-sm shadow-indigo-500/20' : ''
      } ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} shrink-0 animate-pulse`} />
      <span>{name}</span>
    </div>
  );
}
