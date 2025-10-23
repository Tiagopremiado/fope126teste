
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MissionSection from './components/MissionSection';
import ActivitiesSection from './components/ActivitiesSection';
import BenefitsSection from './components/BenefitsSection';
import ProjectsSection from './components/ProjectsSection';
import ImpactSection from './components/ImpactSection';
import GalleryCTASection from './components/GalleryCTASection';
import CommandSection from './components/CommandSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';

type Page = 'home' | 'gallery';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  if (currentPage === 'gallery') {
    return <GalleryPage onClose={() => navigateTo('home')} />;
  }

  return (
    <div className="bg-black">
      <Header onNavigateToGallery={() => navigateTo('gallery')} />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ActivitiesSection />
        <BenefitsSection />
        <ProjectsSection />
        <ImpactSection />
        <GalleryCTASection onNavigateToGallery={() => navigateTo('gallery')} />
        <CommandSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
