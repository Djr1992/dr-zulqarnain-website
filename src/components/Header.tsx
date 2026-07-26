import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Heart, ShieldCheck, Clock, MapPin, Edit3 } from 'lucide-react';
import { SiteConfig } from '../types';

interface HeaderProps {
  config: SiteConfig;
  onOpenAppointment: () => void;
  onOpenEditor: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenAppointment, onOpenEditor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-teal-800 text-white shadow-xl border-b border-teal-700">
      {/* Top emergency announcement bar */}
      <div className="bg-teal-950 border-b border-teal-800/80 py-1.5 px-4 text-xs text-teal-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 text-teal-100">
            <span className="inline-flex items-center gap-1.5 bg-teal-900/90 text-teal-200 px-2 py-0.5 rounded-full font-medium border border-teal-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Emergency Cardiac Care 24/7
            </span>
            <span className="hidden md:inline-block text-teal-700">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-teal-100">
              <MapPin className="w-3.5 h-3.5 text-teal-300" />
              Nawaz Sharif Institute Of Cardiology, Sargodha
            </span>
          </div>

          <div className="flex items-center gap-4 text-teal-100">
            <a
              href={`tel:${config.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300" />
              <span>{config.phoneDisplay}</span>
            </a>
            <span className="text-teal-700">|</span>
            <button
              onClick={onOpenEditor}
              className="flex items-center gap-1 text-teal-200 hover:text-white transition-colors text-xs font-medium bg-teal-900/60 hover:bg-teal-900 px-2 py-0.5 rounded border border-teal-700/60"
              title="Edit doctor details or photo"
            >
              <Edit3 className="w-3 h-3" />
              <span>Customize Site</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Hospital & Doctor Brand */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-700 flex items-center justify-center text-white shadow-md shadow-teal-950/50 border border-teal-400/30">
            <Heart className="w-6 h-6 text-white fill-teal-100/20" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white">{config.hospitalName}</span>
            </div>
            <h1 className="text-xs sm:text-sm font-medium text-teal-200/90 leading-tight">
              {config.doctorName}
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-teal-300 transition-colors py-1"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('overview')}
            className="hover:text-teal-300 transition-colors py-1"
          >
            Doctor Profile
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-teal-300 transition-colors py-1"
          >
            Services & Procedures
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="hover:text-teal-300 transition-colors py-1"
          >
            Patient Reviews
          </button>
          <button
            onClick={() => scrollToSection('locations')}
            className="hover:text-teal-300 transition-colors py-1"
          >
            Locations & Contact
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={config.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all shadow-sm hover:shadow-emerald-900/30 border border-emerald-400/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={onOpenAppointment}
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow-md shadow-teal-950/40 border border-teal-300/30"
          >
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-teal-900/60 text-slate-200 hover:text-white border border-teal-700/50"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1f28] border-b border-teal-800/80 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="text-xs font-semibold uppercase text-teal-400 tracking-wider mb-1">
            Navigation
          </div>
          <button
            onClick={() => scrollToSection('hero')}
            className="block w-full text-left py-2 px-3 rounded-md text-slate-200 hover:bg-teal-900/50 hover:text-white text-sm"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('overview')}
            className="block w-full text-left py-2 px-3 rounded-md text-slate-200 hover:bg-teal-900/50 hover:text-white text-sm"
          >
            About Dr. Zulqarnain
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="block w-full text-left py-2 px-3 rounded-md text-slate-200 hover:bg-teal-900/50 hover:text-white text-sm"
          >
            Services & Procedures
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="block w-full text-left py-2 px-3 rounded-md text-slate-200 hover:bg-teal-900/50 hover:text-white text-sm"
          >
            Patient Reviews
          </button>
          <button
            onClick={() => scrollToSection('locations')}
            className="block w-full text-left py-2 px-3 rounded-md text-slate-200 hover:bg-teal-900/50 hover:text-white text-sm"
          >
            Locations & Contact
          </button>

          <div className="pt-3 border-t border-teal-900 flex flex-col gap-2">
            <a
              href={config.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium text-sm py-2.5 rounded-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp ({config.phoneDisplay})
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="flex items-center justify-center gap-2 bg-teal-500 text-white font-medium text-sm py-2.5 rounded-lg"
            >
              Book Clinic Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
