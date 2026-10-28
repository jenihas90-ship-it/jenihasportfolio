import React from 'react';
import { BookOpen, ExternalLink, Globe, TrendingUp, ShieldAlert, ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';

export default function Publications() {
  const domainUrl = 'https://jenihightechnology.org.et/wordpress/';

  const articles = [
    {
      id: 1,
      title: 'Architecting High-CPC Advertising Niches & Monetization Pipelines',
      category: 'High-CPC & Digital Marketing',
      icon: TrendingUp,
      readTime: '6 min read',
      excerpt:
        'An in-depth analysis of keyword yields, ad arbitrage mechanics, and high-CPC niche traffic funnels spanning legal, enterprise software, and programmatic ad architectures.',
      tags: ['Digital Marketing', 'High-CPC Niches', 'Ad Architecture'],
      url: domainUrl,
    },
    {
      id: 2,
      title: 'Insurance Technology & Lead-Gen Funnel Optimizations',
      category: 'Insurance Niches',
      icon: ShieldAlert,
      readTime: '7 min read',
      excerpt:
        'Technical breakdowns of user acquisition pathways, actuarial lead attribution, and programmatic landing pages configured for high-value insurance verticals.',
      tags: ['Insurance Tech', 'Lead Generation', 'CRO Architecture'],
      url: domainUrl,
    },
    {
      id: 3,
      title: 'WooCommerce & WordPress Enterprise Infrastructure Tuning',
      category: 'WordPress Ecosystem',
      icon: ShoppingBag,
      readTime: '5 min read',
      excerpt:
        'Optimizing database query latencies, object caching, headless integration patterns, and checkout conversion rates across high-volume WooCommerce stores.',
      tags: ['WordPress', 'WooCommerce', 'Performance Optimization'],
      url: domainUrl,
    },
  ];

  return (
    <section id="publications" className="py-20 md:py-28 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60 text-xs font-semibold text-purple-300">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>Technical Writing & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Publications & Market Architectures
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Exploring digital marketing architectures, high-CPC advertising niches, insurance lead-generation models, and enterprise WordPress / WooCommerce ecosystems.
          </p>

          {/* Platform banner */}
          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl">
            <Globe className="w-4 h-4 text-indigo-400" />
            <span>Published on:</span>
            <a
              href={domainUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-2 flex items-center gap-1"
            >
              jenihightechnology.org.et/wordpress
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <div
                key={article.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 p-6 transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-purple-950/60 text-purple-300 border border-purple-800/50">
                      <Icon className="w-3.5 h-3.5" />
                      {article.category}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div>
                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-5">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Article Link */}
                  <Button
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    icon={ExternalLink}
                    iconPosition="right"
                    className="w-full justify-center group-hover:border-purple-500 group-hover:text-purple-300"
                  >
                    Read on WordPress
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Hub Footer */}
        <div className="text-center">
          <Button
            href={domainUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="md"
            icon={ExternalLink}
            iconPosition="right"
          >
            Browse All Published Articles & Insights
          </Button>
        </div>
      </div>
    </section>
  );
}
