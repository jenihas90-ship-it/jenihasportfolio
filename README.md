# Jenihas Getachew — Professional Developer Portfolio

A high-performance single-page application (SPA) portfolio built for **Jenihas Getachew**, candidate of 2027 graduation in Computer Science from **Jimma University**.

Live deployments featured:
- **SuqSync**: [https://suqsync.vercel.app/](https://suqsync.vercel.app/)
- **Programmatic SEO Lead-Gen Platform**: [https://lseole-aqc5.vercel.app/](https://lseole-aqc5.vercel.app/)
- **Technical Writing & Publications**: [https://jenihightechnology.org.et/wordpress/](https://jenihightechnology.org.et/wordpress/)

---

## 🛠 Tech Stack

- **Core Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 with dark-mode aesthetic and glassmorphism styling
- **Icons**: Lucide React
- **Automation / Contact Backend**: Make.com Webhook pipeline (serverless JSON payload routing)
- **Deployment Platform**: Vercel CI/CD pipeline (configured with `vercel.json` SPA rewrite rules)

---

## 📁 Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Sticky glassmorphism header & responsive navigation
│   │   └── Footer.jsx          # Academic notice, quick links, and contact channels
│   ├── sections/
│   │   ├── Hero.jsx            # Headline, graduation status, copyable contact, terminal
│   │   ├── SkillsMatrix.jsx    # Categorized skill badges (Frontend, Backend, Mobile, DB)
│   │   ├── ProjectShowcase.jsx # High-fidelity cards for SuqSync & Dental SEO platform
│   │   ├── Publications.jsx    # Technical writing on digital marketing, high-CPC, WooCommerce
│   │   └── Contact.jsx         # Inline form integrated with Make.com webhook + direct info
│   └── ui/
│       ├── Button.jsx          # Reusable button with variants, sizes, and states
│       ├── ProjectCard.jsx     # Detailed case study card with live link and tech badges
│       └── SkillBadge.jsx      # Categorized skill badge with pulsating accents
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```

---

## ⚡ Make.com Webhook Integration

The Contact form is architected to dispatch structured JSON directly to a Make.com webhook endpoint:

```json
{
  "name": "Alex Abera",
  "email": "alex@example.com",
  "inquiryType": "Full-Stack Development",
  "message": "Project description...",
  "submittedAt": "2026-10-28T06:00:00.000Z",
  "source": "Jenihas Getachew Portfolio (Vercel SPA)"
}
```

To configure your own Make.com webhook URL, define an environment variable:

```env
VITE_MAKE_WEBHOOK_URL="https://hook.eu1.make.com/your-custom-webhook-id"
```

The contact component also includes an inline toggle to configure or test custom webhook URLs on the fly, with automated fallback to `mailto:jenihas90@gmail.com`.

---

## 📬 Contact Information

- **Email**: [jenihas90@gmail.com](mailto:jenihas90@gmail.com)
- **Phone**: [+25193709738](tel:+25193709738)
- **Institution**: Jimma University, Jimma, Ethiopia (Class of 2027)
