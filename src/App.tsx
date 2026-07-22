import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { LiveSpeedWidget } from './components/LiveSpeedWidget';
import { Hero } from './components/Hero';
import { DigitalCardGenerator } from './components/DigitalCardGenerator';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { GitHubLiveStats } from './components/GitHubLiveStats';
import { MonetizationSection } from './components/MonetizationSection';
import { TwitterViralHookSection } from './components/TwitterViralHookSection';
import { Footer } from './components/Footer';
import { BuyCodeModal } from './components/BuyCodeModal';
import { HireMeModal } from './components/HireMeModal';

export function App() {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090f] text-slate-100 selection:bg-[#00FF66] selection:text-black">
      {/* Fixed Live Speed Widget */}
      <LiveSpeedWidget />

      {/* Navigation Bar */}
      <Navbar
        onOpenBuyModal={() => setIsBuyModalOpen(true)}
        onOpenHireModal={() => setIsHireModalOpen(true)}
      />

      {/* Main Content Layout */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBuyModal={() => setIsBuyModalOpen(true)}
          onOpenHireModal={() => setIsHireModalOpen(true)}
        />

        {/* Core Live Tool: AI / Digital Card Generator */}
        <DigitalCardGenerator />

        {/* Interactive Code Sandbox */}
        <InteractiveSandbox />

        {/* GitHub Live Stats Badge & Proof */}
        <GitHubLiveStats />

        {/* Dual Monetization Section */}
        <MonetizationSection
          onOpenBuyModal={() => setIsBuyModalOpen(true)}
          onOpenHireModal={() => setIsHireModalOpen(true)}
        />

        {/* Twitter & LinkedIn Viral Launch Hook Section */}
        <TwitterViralHookSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Purchase & Hire Modals */}
      <BuyCodeModal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
      />

      <HireMeModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
      />
    </div>
  );
}

export default App;
