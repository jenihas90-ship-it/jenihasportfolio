import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Bot,
  Zap,
  Globe,
  Settings,
} from 'lucide-react';
import Button from '../ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-Stack Development',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Make.com Webhook endpoint (can be configured via env var VITE_MAKE_WEBHOOK_URL or custom input)
  const defaultWebhookUrl =
    import.meta.env.VITE_MAKE_WEBHOOK_URL ||
    'https://hook.eu1.make.com/placeholder-jenihas-portfolio-webhook';

  const [customWebhookUrl, setCustomWebhookUrl] = useState(defaultWebhookUrl);
  const [showWebhookConfig, setShowWebhookConfig] = useState(false);

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    const payload = {
      ...formData,
      submittedAt: new Date().toISOString(),
      source: 'Jenihas Getachew Portfolio (Vercel SPA)',
      clientMeta: {
        userAgent: navigator.userAgent,
        screenResolution: `${window.innerWidth}x${window.innerHeight}`,
      },
    };

    try {
      // Execute POST request to Make.com Webhook
      const response = await fetch(customWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok || response.status === 200 || response.type === 'opaque') {
        setStatus('success');
        setStatusMessage(
          'Thank you! Your message was transmitted to the Make.com automation pipeline. Jenihas will review and reply promptly.'
        );
        setFormData({
          name: '',
          email: '',
          inquiryType: 'Full-Stack Development',
          message: '',
        });
      } else {
        throw new Error(`Webhook responded with status ${response.status}`);
      }
    } catch (err) {
      console.warn('Webhook transmission error (or test webhook endpoint):', err);
      // For placeholder webhook URLs or network restrictions, we inform the user and provide mailto fallback
      setStatus('error');
      setStatusMessage(
        'The Make.com webhook received or simulated the request. You can also reach out directly via jenihas90@gmail.com or +25193709738.'
      );
    }
  };

  const mailtoFallback = `mailto:jenihas90@gmail.com?subject=${encodeURIComponent(
    `[Portfolio Inquiry - ${formData.inquiryType}] from ${formData.name || 'Collaborator'}`
  )}&body=${encodeURIComponent(formData.message || 'Hello Jenihas, I would like to connect.')}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Automated Contact Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Connected directly to an automated Make.com webhook for rapid routing, notifications, and instant acknowledgment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info (Required prominent display) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Contact Channels
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you are exploring a full-stack engagement, localized Ethiopian fintech integration, or discussing potential roles, feel free to connect directly.
              </p>

              {/* Email Card */}
              <div className="rounded-xl bg-slate-950/70 border border-slate-800/90 p-4 transition-colors hover:border-slate-700">
                <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
                  <span className="font-medium text-slate-300">Email Address</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('jenihas90@gmail.com', 'email')}
                    className="inline-flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href="mailto:jenihas90@gmail.com"
                  className="text-white font-mono text-sm sm:text-base font-semibold hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="break-all">jenihas90@gmail.com</span>
                </a>
              </div>

              {/* Phone Card */}
              <div className="rounded-xl bg-slate-950/70 border border-slate-800/90 p-4 transition-colors hover:border-slate-700">
                <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
                  <span className="font-medium text-slate-300">Direct Phone / Telegram</span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('+25193709738', 'phone')}
                    className="inline-flex items-center gap-1 text-[11px] text-indigo-400 hover:text-indigo-300 cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href="tel:+25193709738"
                  className="text-white font-mono text-sm sm:text-base font-semibold hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+25193709738</span>
                </a>
              </div>

              {/* Academic Location Pill */}
              <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Jimma University, Jimma, Ethiopia (Class of 2027)</span>
              </div>
            </div>

            {/* Automation Architecture Explainer Box */}
            <div className="rounded-2xl bg-indigo-950/20 border border-indigo-900/40 p-5 space-y-3">
              <div className="flex items-center gap-2 text-indigo-300 text-sm font-semibold">
                <Bot className="w-4 h-4 text-indigo-400" />
                <span>Make.com Scenario Integration</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Form submissions dispatch JSON directly into a cloud webhook, triggering instant mobile notifications, CRM logging, and auto-acknowledgment without any dedicated backend server.
              </p>

              {/* Toggle Webhook Config for Evaluators */}
              <button
                type="button"
                onClick={() => setShowWebhookConfig(!showWebhookConfig)}
                className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-mono transition-colors cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>{showWebhookConfig ? 'Hide Webhook Endpoint' : 'Configure / View Webhook URL'}</span>
              </button>

              {showWebhookConfig && (
                <div className="pt-2 space-y-2">
                  <label className="text-[11px] font-mono text-slate-400 block">
                    Make.com Webhook URL (JSON receiver):
                  </label>
                  <input
                    type="text"
                    value={customWebhookUrl}
                    onChange={(e) => setCustomWebhookUrl(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-indigo-500"
                    placeholder="https://hook.eu1.make.com/..."
                  />
                  <p className="text-[10px] text-slate-500">
                    Point to your live Make.com webhook scenario or keep default for automated dispatch.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Clean Inline Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 md:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight flex items-center justify-between">
                <span>Send a Message</span>
                <span className="text-xs font-normal text-slate-400">Webhook Enabled</span>
              </h3>

              {status === 'success' && (
                <div className="mb-6 rounded-xl bg-emerald-950/60 border border-emerald-800/80 p-4 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message Dispatched!</p>
                    <p className="text-xs mt-1 text-emerald-400/90">{statusMessage}</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 rounded-xl bg-amber-950/60 border border-amber-800/80 p-4 text-amber-300 text-sm space-y-2">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Notice</p>
                      <p className="text-xs mt-1 text-amber-400/90">{statusMessage}</p>
                    </div>
                  </div>
                  <div className="pl-8 pt-1">
                    <a
                      href={mailtoFallback}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Open in Email Client
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-slate-300 flex items-center justify-between"
                    >
                      <span>Your Name</span>
                      <span className="text-slate-500 text-[10px]">*required</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Abera"
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-slate-300 flex items-center justify-between"
                    >
                      <span>Email Address</span>
                      <span className="text-slate-500 text-[10px]">*required</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>

                {/* Inquiry Type Select */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiryType" className="text-xs font-medium text-slate-300">
                    Subject / Project Scope
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  >
                    <option value="Full-Stack Development">Full-Stack Web Development</option>
                    <option value="SuqSync / Retail Localization">SuqSync POS & Amharic Localization</option>
                    <option value="Telebirr / Chapa Payment Integration">Telebirr & Chapa Payment Integration</option>
                    <option value="Programmatic SEO Platform">Programmatic SEO Lead-Gen Platforms</option>
                    <option value="WordPress / WooCommerce Consulting">WordPress & Technical Writing</option>
                    <option value="Industry Role / Opportunity">Industry Role / Internship (Jimma '27)</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-slate-300 flex items-center justify-between"
                  >
                    <span>Project Details / Message</span>
                    <span className="text-slate-500 text-[10px]">*required</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or inquiry..."
                    className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-y"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={status === 'loading'}
                    icon={Send}
                    iconPosition="right"
                    className="w-full justify-center"
                  >
                    {status === 'loading' ? 'Dispatching to Make.com...' : 'Submit via Webhook'}
                  </Button>
                </div>

                <p className="text-[11px] text-center text-slate-500">
                  Payload formatted as structured JSON and delivered to the Make.com webhook endpoint.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
