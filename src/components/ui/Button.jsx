import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Reusable Button component with multiple variants, sizes, and states.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className = '',
  target,
  rel,
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 border border-indigo-500/40 hover:shadow-indigo-500/35 focus:ring-indigo-500 active:scale-[0.98]',
    secondary:
      'bg-slate-850 hover:bg-slate-800 text-slate-100 border border-slate-700/80 hover:border-slate-600 focus:ring-slate-400 active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 focus:ring-slate-500 active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-slate-800/50 text-slate-400 hover:text-slate-100 focus:ring-slate-500',
    accent:
      'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 text-white font-semibold shadow-lg shadow-indigo-500/20 border border-white/10 active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}
