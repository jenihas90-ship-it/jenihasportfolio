import React, { useState, useEffect } from 'react';
import {
  Award,
  ShieldCheck,
  Search,
  ExternalLink,
  Download,
  X,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import CertificateCard from '../ui/CertificateCard';

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIssuer, setSelectedIssuer] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewCert, setPreviewCert] = useState(null);

  // Close preview modal on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setPreviewCert(null);
      }
    };
    if (previewCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [previewCert]);

  const certificatesData = [
    {
      id: 'udacity-ai',
      title: 'Global Chapters - Ethiopia - AI Fundamentals',
      issuer: 'Udacity',
      issuerShort: 'UDACITY',
      issuerLogoText: 'AI',
      program: '5 Million Ethiopian Coders Initiative',
      date: 'November 6, 2026',
      credentialId: '3e46a08e-2828-41f9-8743-80d55b8126e7',
      verificationUrl: 'https://confirm.udacity.com/lp/3e46a08e-2828-41f9-8743-80d55b8126e7',
      pdfUrl: '/certificates/udacity-ai-fundamentals.pdf',
      category: 'AI & Data',
      accentColor: 'cyan',
      recipient: 'Jenihas Getachew',
      partnerNote:
        'In partnership with UAE Ministry of Cabinet Affairs, Government Experience Exchange Office, Ministry of Labor & Skills, and MInT.',
      skills: ['Artificial Intelligence', 'Machine Learning Principles', 'Prompt Architecture', 'Algorithmic Logic'],
    },
    {
      id: 'udacity-android',
      title: 'Global Chapters - Ethiopia - Android Fundamentals',
      issuer: 'Udacity',
      issuerShort: 'UDACITY',
      issuerLogoText: 'AND',
      program: '5 Million Ethiopian Coders Initiative',
      date: 'November 5, 2026',
      credentialId: 'a66bc34d-df22-48b6-8bc6-aacb09515250',
      verificationUrl: 'https://confirm.udacity.com/lp/a66bc34d-df22-48b6-8bc6-aacb09515250',
      pdfUrl: '/certificates/udacity-android-fundamentals.pdf',
      category: 'Mobile Dev',
      accentColor: 'indigo',
      recipient: 'Jenihas Getachew',
      partnerNote:
        'Joint initiative by UAE Government Experience Exchange Office & Ethiopian Ministry of Innovation & Technology (MInT).',
      skills: ['Android Studio', 'Mobile Architecture', 'Layout Design', 'Kotlin & Java Toolchains', 'App Lifecycle'],
    },
    {
      id: 'cisco-cybersecurity',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      issuerShort: 'CISCO',
      issuerLogoText: 'CISCO',
      program: 'Cisco Networking Academy Credential (6 Hours)',
      date: 'November 11, 2026',
      credentialId: 'e0f3048b-d940-4e29-b729-abf6ace01fb4',
      verificationUrl: 'https://www.netacad.com/certificates/?issuanceId=e0f3048b-d940-4e29-b729-abf6ace01fb4',
      pdfUrl: '/certificates/cisco-cybersecurity.pdf',
      category: 'Cybersecurity',
      accentColor: 'emerald',
      recipient: 'Jenihas Getachew',
      partnerNote:
        'Comprehensive 6-hour foundational certification exploring global cyber threat landscapes and defensive protocols.',
      skills: ['Cyber Best Practices', 'Privacy & Data Confidentiality', 'Network Vulnerabilities', 'Threat Detection'],
    },
    {
      id: 'udacity-data',
      title: 'Global Chapters - Ethiopia - Data Fundamentals',
      issuer: 'Udacity',
      issuerShort: 'UDACITY',
      issuerLogoText: 'DATA',
      program: '5 Million Ethiopian Coders Initiative',
      date: 'November 5, 2026',
      credentialId: '8ca5db0f-7290-4495-8f29-ed77640a9336',
      verificationUrl: 'https://confirm.udacity.com/lp/8ca5db0f-7290-4495-8f29-ed77640a9336',
      pdfUrl: '/certificates/udacity-data-fundamentals.pdf',
      category: 'AI & Data',
      accentColor: 'cyan',
      recipient: 'Jenihas Getachew',
      partnerNote:
        'Supported by UAE Ministry of Cabinet Affairs & Ethiopian Ministry of Labor and Skills.',
      skills: ['Data Analysis', 'Data Cleaning', 'Relational Databases', 'Information Visualization'],
    },
    {
      id: 'eshe-ce106',
      title: "e-SHE: CE106's Keeping Yourself Safe Online",
      issuer: 'Ministry of Education (e-SHE)',
      issuerShort: 'e-SHE',
      issuerLogoText: 'e-SHE',
      program: 'Ethiopian Smart Higher Education Platform',
      date: 'February 18, 2025',
      credentialId: '01fde1b3c32146d6a910fcde46b2d923',
      verificationUrl: 'https://eshe.ethernet.edu.et/',
      pdfUrl: '/certificates/eshe-keeping-yourself-safe-online.pdf',
      category: 'Cybersecurity',
      accentColor: 'emerald',
      recipient: 'Jenihas Getachew Adugna',
      partnerNote:
        'In partnership with Mastercard Foundation, Arizona State University (ASU EdPlus), and SYSSHAYASHONE.',
      skills: ['Online Safety', 'Authentication Security', 'Personal Data Privacy', 'Anti-Phishing Best Practices'],
    },
    {
      id: 'eshe-oex100',
      title: "e-SHE: OEX100's SS 1 How to Take a Course",
      issuer: 'Ministry of Education (e-SHE)',
      issuerShort: 'e-SHE',
      issuerLogoText: 'e-SHE',
      program: 'Ethiopian Smart Higher Education Platform',
      date: 'November 7, 2026',
      credentialId: '6db14537a6fb4dc683047592d68b3a6b',
      verificationUrl: 'https://eshe.ethernet.edu.et/',
      pdfUrl: '/certificates/eshe-how-to-take-a-course.pdf',
      category: 'Academic & Professional',
      accentColor: 'purple',
      recipient: 'Jenihas Getachew Adugna',
      partnerNote:
        'In partnership with Mastercard Foundation, Arizona State University (ASU EdPlus), and SYSSHAYASHONE.',
      skills: ['Digital Course Navigation', 'Active Learning Methodologies', 'Self-Paced Academic Systems'],
    },
    {
      id: 'eshe-ce105',
      title: "e-SHE: CE105's SS 3 Academic Integrity",
      issuer: 'Ministry of Education (e-SHE)',
      issuerShort: 'e-SHE',
      issuerLogoText: 'e-SHE',
      program: 'Ethiopian Smart Higher Education Platform',
      date: 'February 18, 2025',
      credentialId: '4681b6932d4c4b81ba271e66fbbcf20e',
      verificationUrl: 'https://eshe.ethernet.edu.et/',
      pdfUrl: '/certificates/eshe-academic-integrity.pdf',
      category: 'Academic & Professional',
      accentColor: 'purple',
      recipient: 'Jenihas Getachew Adugna',
      partnerNote:
        'In partnership with Mastercard Foundation, Arizona State University (ASU EdPlus), and SYSSHAYASHONE.',
      skills: ['Academic Integrity', 'Plagiarism Prevention', 'Scientific Rigor', 'Citation Protocols'],
    },
    {
      id: 'eshe-ce104',
      title: "e-SHE: CE104's Set Goals to Manage Your Time",
      issuer: 'Ministry of Education (e-SHE)',
      issuerShort: 'e-SHE',
      issuerLogoText: 'e-SHE',
      program: 'Ethiopian Smart Higher Education Platform',
      date: 'February 18, 2025',
      credentialId: '470e643d73e241be932d00801acf6d73',
      verificationUrl: 'https://eshe.ethernet.edu.et/',
      pdfUrl: '/certificates/eshe-set-goals-to-manage-your-time.pdf',
      category: 'Academic & Professional',
      accentColor: 'purple',
      recipient: 'Jenihas Getachew Adugna',
      partnerNote:
        'In partnership with Mastercard Foundation, Arizona State University (ASU EdPlus), and SYSSHAYASHONE.',
      skills: ['Time Management', 'Goal Architecture', 'Milestone Tracking', 'Productivity Optimization'],
    },
    {
      id: 'eshe-ce102',
      title: "e-SHE: CE102's SS 5 How to Evaluate Resources",
      issuer: 'Ministry of Education (e-SHE)',
      issuerShort: 'e-SHE',
      issuerLogoText: 'e-SHE',
      program: 'Ethiopian Smart Higher Education Platform',
      date: 'March 2, 2025',
      credentialId: 'b98bb866ea2e401da84c0e9c5e343f70',
      verificationUrl: 'https://eshe.ethernet.edu.et/',
      pdfUrl: '/certificates/eshe-how-to-evaluate-resources.pdf',
      category: 'Academic & Professional',
      accentColor: 'purple',
      recipient: 'Jenihas Getachew Adugna',
      partnerNote:
        'In partnership with Mastercard Foundation, Arizona State University (ASU EdPlus), and SYSSHAYASHONE.',
      skills: ['Source Evaluation', 'Information Literacy', 'Empirical Fact-Checking', 'Academic Research'],
    },
    {
      id: 'eshe-ds201',
      title: "e-SHE: DS201's Strategies for Successful Online Learning",
      issuer: 'Ministry of Education (e-SHE)',
      issuerShort: 'e-SHE',
      issuerLogoText: 'e-SHE',
      program: 'Ethiopian Smart Higher Education Platform',
      date: 'February 18, 2025',
      credentialId: '8bc06e8378bd4fc7a4d15b81dfccadd3',
      verificationUrl: 'https://eshe.ethernet.edu.et/',
      pdfUrl: '/certificates/eshe-strategies-for-successful-online-learning.pdf',
      category: 'Academic & Professional',
      accentColor: 'purple',
      recipient: 'Jenihas Getachew Adugna',
      partnerNote:
        'In partnership with Mastercard Foundation, Arizona State University (ASU EdPlus), and SYSSHAYASHONE.',
      skills: ['Self-Regulated Learning', 'Digital Study Strategies', 'Online Collaboration', 'Cognitive Focus'],
    },
  ];

  const categories = [
    { label: 'All Credentials', value: 'All', count: 10 },
    { label: 'AI & Data', value: 'AI & Data', count: 2 },
    { label: 'Mobile Dev', value: 'Mobile Dev', count: 1 },
    { label: 'Cybersecurity', value: 'Cybersecurity', count: 2 },
    { label: 'Academic & Professional', value: 'Academic & Professional', count: 5 },
  ];

  const issuers = [
    { label: 'All Issuers', value: 'All' },
    { label: 'Udacity', value: 'Udacity' },
    { label: 'Cisco', value: 'Cisco Networking Academy' },
    { label: 'e-SHE / MoE', value: 'Ministry of Education (e-SHE)' },
  ];

  const filteredCertificates = certificatesData.filter((cert) => {
    const matchesCategory =
      selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesIssuer =
      selectedIssuer === 'All' || cert.issuer === selectedIssuer;
    const matchesSearch =
      searchQuery.trim() === '' ||
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cert.credentialId && cert.credentialId.toLowerCase().includes(searchQuery.toLowerCase())) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesIssuer && matchesSearch;
  });

  return (
    <section id="certificates" className="py-20 md:py-28 relative bg-slate-950/70 border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[300px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/60 text-xs font-semibold text-cyan-300">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Verified Credentials & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Accredited Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Verified technical credentials and academic achievements spanning Artificial Intelligence, Mobile App Engineering, Cybersecurity, Data Analytics, and Digital Excellence.
          </p>
        </div>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">10</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Verified Credentials</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">3</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Global & National Issuers</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Online Verifiable</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">PDF</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Direct Downloads</div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                  selectedCategory === cat.value
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedCategory === cat.value
                      ? 'bg-indigo-500/50 text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Issuer filter + Live Search Box */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
            {/* Issuer Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-400 font-mono mr-1">Issuer:</span>
              {issuers.map((iss) => (
                <button
                  key={iss.value}
                  type="button"
                  onClick={() => setSelectedIssuer(iss.value)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    selectedIssuer === iss.value
                      ? 'bg-slate-800 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80'
                  }`}
                >
                  {iss.label}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search certifications or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-xl pl-9 pr-8 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                onPreview={(c) => setPreviewCert(c)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-slate-800">
            <Award className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h4 className="text-white font-semibold text-base mb-1">No certifications found</h4>
            <p className="text-slate-400 text-xs">
              Try adjusting your search query or switching the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedIssuer('All');
                setSearchQuery('');
              }}
              className="mt-4 px-3 py-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium underline"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Verification Guarantee Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border border-slate-800 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base">
                Verifiable Educational & Technical Credentials
              </h4>
              <p className="text-slate-400 text-xs md:text-sm mt-0.5">
                Every certification listed is backed by official digital issuance IDs, accessible online via Udacity, Cisco NetAcad, and e-SHE verification services.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3.5 py-1.5 rounded-lg flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              100% Genuine Records
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Certificate Preview Modal */}
      {previewCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setPreviewCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs">
                  {previewCert.issuerLogoText || 'CERT'}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base leading-tight truncate max-w-[280px] sm:max-w-md">
                    {previewCert.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {previewCert.issuer} • {previewCert.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Download PDF button */}
                {previewCert.pdfUrl && (
                  <a
                    href={previewCert.pdfUrl}
                    download
                    title="Download original PDF"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                )}

                {/* Open in new tab button */}
                {previewCert.pdfUrl && (
                  <a
                    href={previewCert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open PDF in new tab"
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setPreviewCert(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF or Viewer */}
            <div className="flex-1 bg-slate-950 p-2 sm:p-4 overflow-y-auto min-h-[400px] sm:min-h-[550px] flex flex-col items-center justify-center">
              {previewCert.pdfUrl ? (
                <iframe
                  src={`${previewCert.pdfUrl}#toolbar=0&navpanes=0`}
                  title={previewCert.title}
                  className="w-full h-[450px] sm:h-[580px] rounded-xl border border-slate-800 bg-slate-900"
                />
              ) : (
                <div className="text-center p-8">
                  <FileText className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                  <p className="text-slate-300 text-sm">Preview not available for this credential.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="font-mono text-[11px] text-slate-300">
                  Recipient: <strong className="text-white font-medium">{previewCert.recipient}</strong>
                </span>
                {previewCert.credentialId && (
                  <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
                    • ID: {previewCert.credentialId}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {previewCert.verificationUrl && (
                  <a
                    href={previewCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
                  >
                    <span>Verify with Issuer</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setPreviewCert(null)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
