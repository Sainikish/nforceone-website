import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomeView from './components/views/HomeView';
import ServicesView from './components/views/ServicesView';
import ServiceDetailView from './components/views/ServiceDetailView';
import IndustriesView from './components/views/IndustriesView';
import IndustryDetailView from './components/views/IndustryDetailView';
import AboutView from './components/views/AboutView';
import CareersFaqView from './components/views/CareersFaqView';
import ContactView from './components/views/ContactView';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home'); // home, services, service-detail, industries, industry-detail, about, careers, contact
  const [selectedService, setSelectedService] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateToService = (service) => {
    setSelectedService(service);
    setCurrentTab('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToIndustry = (industry) => {
    setSelectedIndustry(industry);
    setCurrentTab('industry-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans">
      
      {/* Main Navigation */}
      <Navbar 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        navigateToService={navigateToService}
        navigateToIndustry={navigateToIndustry}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* View Router / Display */}
      {currentTab === 'home' && (
        <HomeView 
          setCurrentTab={setCurrentTab}
          navigateToService={navigateToService}
          navigateToIndustry={navigateToIndustry}
        />
      )}

      {currentTab === 'services' && (
        <ServicesView 
          navigateToService={navigateToService}
        />
      )}

      {currentTab === 'service-detail' && (
        <ServiceDetailView 
          selectedService={selectedService}
          setCurrentTab={setCurrentTab}
        />
      )}

      {currentTab === 'industries' && (
        <IndustriesView 
          navigateToIndustry={navigateToIndustry}
        />
      )}

      {currentTab === 'industry-detail' && (
        <IndustryDetailView 
          selectedIndustry={selectedIndustry}
          setCurrentTab={setCurrentTab}
        />
      )}

      {currentTab === 'about' && (
        <AboutView />
      )}

      {currentTab === 'careers' && (
        <CareersFaqView />
      )}

      {currentTab === 'contact' && (
        <ContactView />
      )}

      {/* Enterprise Footer */}
      <Footer setCurrentTab={setCurrentTab} />

    </div>
  );
}
