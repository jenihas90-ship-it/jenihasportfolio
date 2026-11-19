import React, { useState } from 'react';
import {
  Award,
  ExternalLink,
  Download,
  Eye,
  Copy,
  Check,
  Calendar,
  Building2,
  FileCheck,
} from 'lucide-react';

export default function CertificateCard({ cert, onPreview }) {
  const [copiedId, setCopiedId] = useState(false);

  const {
    title,
    issuer,
    issuerShort,
    issuerLogoText,
    program,
    date,
    credentialId,
    verificationUrl,
    pdfUrl,
    accentColor = 'indigo', // indigo, cyan, emerald, purple
    partnerNote,
    skills = [],
  } = cert;

  const handleCopyId = (e) => {
    e.stopPropagation();
    if (!credentialId) return;
    navigator.clipboard.writeText(credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const accentStyles = {
    cyan: {
      border: 'hover:border-cyan-500/50 group-hover:shadow-cyan-500/10',
      badge: 'text-cyan-300 bg-cyan-950/70 border-cyan-800/60',
      topGlow: 'group-hover:via-cyan-500/70',
      tag: 'bg-cyan-950/40 text-cyan-300 border-cyan-800/40',
      issuerBadge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      btnPreview: 'bg-cyan-600 hover:bg-cyan-500 text-white',
    },
    emerald: {
      border: 'hover:border-emerald-500/50 group-hover:shadow-emerald-500/10',
      badge: 'text-emerald-300 bg-emerald-950/70 border-emerald-800/60',
      topGlow: 'group-hover:via-emerald-500/70',
      tag: 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40',
      issuerBadge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      btnPreview: 'bg-emerald-600 hover:bg-emerald-500 text-white',
    },
    indigo: {
      border: 'hover:border-indigo-500/50 group-hover:shadow-indigo-500/10',
      badge: 'text-indigo-300 bg-indigo-950/70 border-indigo-800/60',
      topGlow: 'group-hover:via-indigo-500/70',
      tag: 'bg-indigo-950/40 text-indigo-300 border-indigo-800/40',
      issuerBadge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      btnPreview: 'bg-indigo-600 hover:bg-indigo-500 text-white',
    },
    purple: {
      border: 'hover:border-purple-500/50 group-hover:shadow-purple-500/10',
      badge: 'text-purple-300 bg-purple-950/70 border-purple-800/60',
      topGlow: 'group-hover:via-purple-500/70',
      tag: 'bg-purple-950/40 text-purple-300 border-purple-800/40',
      issuerBadge: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      btnPreview: 'bg-purple-600 hover:bg-purple-500 text-white',
    },
  };

  const style = accentStyles[accentColor] || accentStyles.indigo;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-slate-900/75 border border-slate-800/90 p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${style.border}`}
    >
      {/* Top subtle highlight line */}
      <div
        className={`absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent ${style.topGlow} transition-all duration-300`}
      />

      <div>
        {/* Header: Issuer Logo / Monogram + Status Pill */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs tracking-wider border ${style.issuerBadge} shadow-sm`}
            >
              {issuerLogoText || issuerShort || 'CERT'}
            </div>
            <div>
              <span className="text-xs font-semibold text-white block leading-tight">
                {issuer}
              </span>
              {program && (
                <span className="text-[11px] text-slate-400 font-medium block">
                  {program}
                </span>
              )}
            </div>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${style.badge} shrink-0`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Verified
          </span>
        </div>

        {/* Certificate Title */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 leading-snug group-hover:text-indigo-200 transition-colors">
          {title}
        </h3>

        {/* Partner note or collaborative initiative */}
        {partnerNote && (
          <p className="text-xs text-slate-400 mb-4 flex items-start gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
            <span>{partnerNote}</span>
          </p>
        )}

        {/* Metadata grid: Date & Credential ID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-400">Issued:</span>
            <span className="font-medium text-slate-200">{date}</span>
          </div>

          {credentialId && (
            <div className="flex items-center justify-between gap-1 text-slate-300">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <FileCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="text-slate-400">ID:</span>
                <span
                  title={credentialId}
                  className="font-mono text-[11px] text-indigo-300 truncate max-w-[100px]"
                >
                  {credentialId.length > 12 ? `${credentialId.slice(0, 8)}...` : credentialId}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyId}
                title="Copy Credential ID"
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              >
                {copiedId ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Competencies / Skills Acquired */}
        {skills.length > 0 && (
          <div className="mb-5">
            <div className="text-[11px] font-medium text-slate-400 mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              <span>Competencies & Topics Covered</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-medium border ${style.tag}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* Preview Modal Button */}
          <button
            type="button"
            onClick={() => onPreview(cert)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview</span>
          </button>

          {/* Download PDF button */}
          {pdfUrl && (
            <a
              href={pdfUrl}
              download
              title="Download official PDF copy"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF</span>
            </a>
          )}
        </div>

        {/* Verification URL Button */}
        {verificationUrl && (
          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors group/link"
          >
            <span>Verify</span>
            <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
}
