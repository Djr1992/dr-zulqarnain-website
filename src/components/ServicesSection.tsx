import React, { useState } from 'react';
import {
  Activity,
  HeartPulse,
  Zap,
  Waves,
  Siren,
  ChevronRight,
  BookOpen,
  X,
  MessageSquare,
  Calendar,
  Check,
  Search,
  Sparkles,
  Info
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  services: ServiceItem[];
  whatsappUrl: string;
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  whatsappUrl,
  onSelectServiceForBooking,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Helper to map icon names to Lucide icon components
  const renderIcon = (iconName: string, className: string = 'w-6 h-6') => {
    switch (iconName) {
      case 'Activity':
        return <Activity className={className} />;
      case 'HeartPulse':
        return <HeartPulse className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'Waves':
        return <Waves className={className} />;
      case 'Siren':
        return <Siren className={className} />;
      default:
        return <Activity className={className} />;
    }
  };

  const filteredServices = services.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.article.whatIsIt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-semibold uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5 text-teal-600" />
            <span>Cardiovascular Procedures & Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950 tracking-tight">
            Specialized Cardiac Interventions & Diagnostics
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Click on any card to read a patient-friendly guide describing what the procedure is, why it's needed, and what to expect.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mb-10 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {['All', 'Diagnostic', 'Interventional', 'Electrophysiology', 'Emergency'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-teal-800 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search procedure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white text-slate-800 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            />
          </div>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isEmergency = service.category === 'Emergency';
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between overflow-hidden ${
                  isEmergency
                    ? 'border-rose-300 ring-2 ring-rose-500/20 bg-gradient-to-b from-rose-50/30 to-white'
                    : 'border-slate-200/90 hover:border-teal-400'
                }`}
              >
                {/* Card Top */}
                <div className="p-6 space-y-4">
                  {/* Top Badges Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isEmergency
                          ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse'
                          : 'bg-teal-50 text-teal-800 border border-teal-200'
                      }`}
                    >
                      {service.badgeText}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {service.wordCount} words
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 pt-1">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110 ${
                        isEmergency
                          ? 'bg-rose-600 text-white'
                          : 'bg-[#0f2b38] text-teal-300'
                      }`}
                    >
                      {renderIcon(service.iconName, 'w-6 h-6')}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0f2b38] group-hover:text-teal-700 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <span className="text-xs font-semibold text-slate-500 block">
                        Category: {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {service.summary}
                  </p>
                </div>

                {/* Card Bottom / Action */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-teal-700 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    Patient Guide Article
                  </span>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 bg-[#0f2b38] hover:bg-teal-800 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shadow-sm"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 text-slate-500">
            <p className="text-lg font-medium">No services match your search or filter.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-3 text-sm font-semibold text-teal-700 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* SERVICE ARTICLE MODAL / EXPANDABLE READER */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-800 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Sticky Header */}
            <div className="sticky top-0 z-20 bg-[#0f2b38] text-white p-6 rounded-t-3xl border-b border-teal-800 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300">
                  {renderIcon(selectedService.iconName, 'w-6 h-6')}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-900/80 px-2 py-0.5 rounded border border-teal-700">
                    {selectedService.category} • Patient Article
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close procedure article"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body: The 150-200 Word Informative Blog Article */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Article Sub-Header */}
              <div className="bg-teal-50 p-4 rounded-2xl border border-teal-100 flex items-start gap-3 text-teal-900 text-sm">
                <Info className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Educational Article by Dr. Muhammad Zulqarnain</p>
                  <p className="text-xs text-teal-800 mt-0.5">
                    Written in simple, patient-friendly language to help you understand your procedure, reduce anxiety, and know what to expect.
                  </p>
                </div>
              </div>

              {/* SECTION 1: What is it? */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-lg font-bold text-[#0f2b38]">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 text-sm flex items-center justify-center font-bold">
                    1
                  </span>
                  <h4>What is {selectedService.shortTitle}?</h4>
                </div>
                <p className="text-slate-700 text-base leading-relaxed pl-9">
                  {selectedService.article.whatIsIt}
                </p>
              </div>

              {/* SECTION 2: Why is it needed? */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-lg font-bold text-[#0f2b38]">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 text-sm flex items-center justify-center font-bold">
                    2
                  </span>
                  <h4>Why is this procedure needed?</h4>
                </div>
                <p className="text-slate-700 text-base leading-relaxed pl-9">
                  {selectedService.article.whyNeeded}
                </p>
              </div>

              {/* SECTION 3: What to expect before, during & after */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-lg font-bold text-[#0f2b38]">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 text-sm flex items-center justify-center font-bold">
                    3
                  </span>
                  <h4>What to expect before, during & after?</h4>
                </div>
                <p className="text-slate-700 text-base leading-relaxed pl-9">
                  {selectedService.article.whatToExpect}
                </p>
              </div>

              {/* Ideal Candidate Callout */}
              {selectedService.article.idealFor && (
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Recommended For:
                  </span>
                  <p className="text-sm font-medium text-slate-800">
                    {selectedService.article.idealFor}
                  </p>
                </div>
              )}

              {/* Action Bar inside Modal */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span>Consultant: Dr. Muhammad Zulqarnain</span>
                  <span className="mx-2">•</span>
                  <span>Sadiq Hospital Sargodha</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`${whatsappUrl}?text=${encodeURIComponent(
                      `Hello Dr. Zulqarnain, I would like to inquire about ${selectedService.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      const serviceName = selectedService.title;
                      setSelectedService(null);
                      onSelectServiceForBooking(serviceName);
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#0f2b38] hover:bg-teal-800 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Procedure OPD</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
