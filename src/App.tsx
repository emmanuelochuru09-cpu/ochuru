import { useState } from 'react';
import Header from './components/Header.tsx';
import HeroSection from './components/HeroSection.tsx';
import ComparisonSection from './components/ComparisonSection.tsx';
import ShowcaseSection from './components/ShowcaseSection.tsx';
import CostCalculator from './components/CostCalculator.tsx';
import AIBlueprintGenerator from './components/AIBlueprintGenerator.tsx';
import WebsiteAudit from './components/WebsiteAudit.tsx';
import ProcessSection from './components/ProcessSection.tsx';
import FounderTrustSection from './components/FounderTrustSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';
import AdCampaignStudioModal from './components/AdCampaignStudioModal.tsx';
import ProjectCredentialsModal from './components/ProjectCredentialsModal.tsx';

export default function App() {
  const [isAdStudioOpen, setIsAdStudioOpen] = useState(false);
  const [isCredentialsOpen, setIsCredentialsOpen] = useState(false);
  const [selectedProjectForBrief, setSelectedProjectForBrief] = useState('');

  const handleSelectProjectForBrief = (title: string) => {
    setSelectedProjectForBrief(title);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <Header
        onOpenAdStudio={() => setIsAdStudioOpen(true)}
        onOpenCredentials={() => setIsCredentialsOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Interactive Live Performance Studio */}
        <HeroSection />

        {/* Why A Website Matters (Comparison Matrix) */}
        <ComparisonSection />

        {/* Portfolio & Case Studies (Interactive Vector Previews) */}
        <ShowcaseSection onSelectProjectForBrief={handleSelectProjectForBrief} />

        {/* Interactive Naira Pricing & ROI Estimator */}
        <CostCalculator />

        {/* AI Website Strategy Blueprint Generator (Gemini Powered) */}
        <AIBlueprintGenerator />

        {/* 60-Second Digital Presence Audit */}
        <WebsiteAudit />

        {/* 4-Step Transparent Process */}
        <ProcessSection />

        {/* Founder & Senior Craftsmanship (Typography Monogram, No Pictures) */}
        <FounderTrustSection />

        {/* Client Brief Intake Form */}
        <ContactSection initialProjectType={selectedProjectForBrief} />
      </main>

      {/* Site Footer */}
      <Footer onOpenAdStudio={() => setIsAdStudioOpen(true)} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Turnkey Ad Campaign Studio & Outreach Kit Modal */}
      <AdCampaignStudioModal
        isOpen={isAdStudioOpen}
        onClose={() => setIsAdStudioOpen(false)}
      />

      {/* Project Credentials & API Key Modal */}
      <ProjectCredentialsModal
        isOpen={isCredentialsOpen}
        onClose={() => setIsCredentialsOpen(false)}
      />
    </div>
  );
}
