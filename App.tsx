
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MissionSection from './components/MissionSection';
import ActivitiesSection from './components/ActivitiesSection';
import BenefitsSection from './components/BenefitsSection';
import ProjectsSection from './components/ProjectsSection';
import ImpactSection from './components/ImpactSection';
import CommandSection from './components/CommandSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ActivitiesSection />
        <BenefitsSection />
        <ProjectsSection />
        <ImpactSection />
        <CommandSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;