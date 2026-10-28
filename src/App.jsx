import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import SkillsMatrix from './components/sections/SkillsMatrix';
import ProjectShowcase from './components/sections/ProjectShowcase';
import Publications from './components/sections/Publications';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Glassmorphic Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <SkillsMatrix />
        <ProjectShowcase />
        <Publications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
