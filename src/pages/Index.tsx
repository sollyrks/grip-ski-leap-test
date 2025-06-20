
import React from 'react';
import Hero from '@/components/Hero';
import BrandStory from '@/components/BrandStory';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PrivacyModal from '@/components/PrivacyModal';
import VideoSection from '@/components/VideoSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <PrivacyModal />
      <Hero />
      <VideoSection />
      <BrandStory />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
