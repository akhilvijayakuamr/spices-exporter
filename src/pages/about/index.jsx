import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import FounderStory from './components/FounderStory';
import HeritageTimeline from './components/HeritageTimeline';
import FarmingPartners from './components/FarmingPartners';
import QualityPhilosophy from './components/QualityPhilosophy';
import SustainabilityCommitment from './components/SustainabilityCommitment';
import Certifications from './components/Certifications';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Spice Heritage | Three Generations of Excellence</title>
        <meta 
          name="description" 
          content="Discover the story behind Spice Heritage. Three generations of spice expertise, sustainable farming partnerships, and unwavering commitment to quality from Kerala to tables worldwide." 
        />
        <meta 
          name="keywords" 
          content="spice heritage, organic spices, sustainable farming, Kerala spices, fair trade spices, spice quality, traditional cultivation" 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <FounderStory />
          <HeritageTimeline />
          <FarmingPartners />
          <QualityPhilosophy />
          <SustainabilityCommitment />
          <Certifications />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;