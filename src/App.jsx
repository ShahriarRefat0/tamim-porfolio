import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BioSection from './components/BioSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import MentorshipSection from './components/MentorshipSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ToolsAndSkills from './components/ToolsAndSkills';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-body text-gray-800 dark:text-gray-200">
      <Navbar />
      <Hero />
      <div id="about">
        <BioSection />
      </div>
      <ProjectsSection />
      <MentorshipSection />
      <ServicesSection />
      <ToolsAndSkills />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
