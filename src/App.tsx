import React, { useState, useEffect } from 'react';
import { SiteConfig } from './types';
import {
  DEFAULT_SITE_CONFIG,
  SERVICES_DATA,
  PATIENT_REVIEWS,
  CLINIC_LOCATIONS,
} from './data/medicalData';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DoctorOverview } from './components/DoctorOverview';
import { ServicesSection } from './components/ServicesSection';
import { PatientReviewsSection } from './components/PatientReviewsSection';
import { LocationsContactSection } from './components/LocationsContactSection';
import { AppointmentModal } from './components/AppointmentModal';
import { EditContentModal } from './components/EditContentModal';
import { Footer } from './components/Footer';

export default function App() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('dr_zulqarnain_site_config_v2');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading config from localStorage', e);
    }
    return DEFAULT_SITE_CONFIG;
  });

  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [editorModalOpen, setEditorModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  // Persist siteConfig changes to localStorage
  const handleSaveConfig = (newConfig: SiteConfig) => {
    setSiteConfig(newConfig);
    try {
      localStorage.setItem('dr_zulqarnain_site_config_v2', JSON.stringify(newConfig));
    } catch (e) {
      console.error('Error saving config to localStorage', e);
    }
  };

  const handleResetConfig = () => {
    setSiteConfig(DEFAULT_SITE_CONFIG);
    try {
      localStorage.removeItem('dr_zulqarnain_site_config_v2');
    } catch (e) {
      console.error('Error resetting config in localStorage', e);
    }
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 antialiased selection:bg-teal-500 selection:text-white">
      {/* Header */}
      <Header
        config={siteConfig}
        onOpenAppointment={() => {
          setSelectedServiceForBooking('General Cardiac Consultation');
          setAppointmentModalOpen(true);
        }}
        onOpenEditor={() => setEditorModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          config={siteConfig}
          onOpenAppointment={() => {
            setSelectedServiceForBooking('General Cardiac Consultation');
            setAppointmentModalOpen(true);
          }}
          onOpenEditor={() => setEditorModalOpen(true)}
        />

        {/* Doctor Overview & Qualifications */}
        <DoctorOverview
          config={siteConfig}
          onOpenAppointment={() => {
            setSelectedServiceForBooking('General Cardiac Consultation');
            setAppointmentModalOpen(true);
          }}
        />

        {/* 5 Services Section with 150-200 Word Informative Articles */}
        <ServicesSection
          services={SERVICES_DATA}
          whatsappUrl={siteConfig.whatsappUrl}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* Patient Reviews Section (Facebook style with 4 specific reviews) */}
        <PatientReviewsSection
          reviews={PATIENT_REVIEWS}
          facebookUrl={siteConfig.facebookUrl}
        />

        {/* Contact / Locations Section (Sadiq Hospital & Sillanwali) */}
        <LocationsContactSection
          locations={CLINIC_LOCATIONS}
          config={siteConfig}
          onOpenAppointment={() => {
            setSelectedServiceForBooking('General Cardiac Consultation');
            setAppointmentModalOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        config={siteConfig}
        onOpenAppointment={() => {
          setSelectedServiceForBooking('General Cardiac Consultation');
          setAppointmentModalOpen(true);
        }}
        onOpenEditor={() => setEditorModalOpen(true)}
      />

      {/* Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        config={siteConfig}
        preselectedService={selectedServiceForBooking}
      />

      <EditContentModal
        isOpen={editorModalOpen}
        onClose={() => setEditorModalOpen(false)}
        config={siteConfig}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
