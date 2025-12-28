import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BioSection from './components/BioSection';
import MentorshipSection from './components/MentorshipSection';
import PodcastSection from './components/PodcastSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-body text-gray-800 dark:text-gray-200">
      <Navbar />
      <Hero />
      <BioSection />
      <MentorshipSection />
      <PodcastSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
