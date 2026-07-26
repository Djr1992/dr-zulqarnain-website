import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  ExternalLink,
  Clock,
  Calendar,
  Building,
  Check,
  Copy,
  Navigation,
  Sparkles
} from 'lucide-react';
import { ClinicLocation, SiteConfig } from '../types';

interface LocationsContactSectionProps {
  locations: ClinicLocation[];
  config: SiteConfig;
  onOpenAppointment: () => void;
}

export const LocationsContactSection: React.FC<LocationsContactSectionProps> = ({
  locations,
  config,
  onOpenAppointment,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyAddress = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="locations" className="py-16 sm:py-20 bg-slate-50 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-teal-700" />
            <span>Clinic OPD Locations & Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950 tracking-tight">
            Consult Dr. Muhammad Zulqarnain
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Available for consultation at Nawaz Sharif Institute Of Cardiology, Sargodha.
          </p>
        </div>

        {/* 2 Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg relative flex flex-col justify-between hover:border-teal-400 hover:shadow-xl transition-all"
            >
              {loc.isMainFacility && (
                <div className="absolute -top-3 right-6 bg-teal-800 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-teal-600 uppercase tracking-wider shadow-md">
                  Main Hospital Facility
                </div>
              )}

              <div className="space-y-6">
                {/* Location Title & City */}
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-800 to-teal-950 text-teal-300 flex items-center justify-center shrink-0 shadow-md">
                    <Building className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                      {loc.city} OPD Clinic
                    </span>
                    <h3 className="text-2xl font-extrabold text-teal-950 leading-tight">
                      {loc.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">{loc.landmark}</p>
                  </div>
                </div>

                {/* Info List */}
                <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-sm text-slate-700">
                  {/* Address */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                      <div>
                        <span className="text-xs font-semibold text-slate-500 block">Address</span>
                        <span className="font-semibold text-slate-800">{loc.address}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopyAddress(loc.id, loc.address)}
                      className="text-xs text-teal-700 hover:text-teal-900 font-medium flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200"
                      title="Copy address"
                    >
                      {copiedId === loc.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Timing */}
                  <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200/60">
                    <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">Timing & Days</span>
                      <span className="font-semibold text-slate-800">
                        {loc.days}: {loc.timing}
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200/60">
                    <Phone className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">Contact Phone</span>
                      <a
                        href={`tel:${config.phoneRaw}`}
                        className="font-bold text-teal-800 hover:underline"
                      >
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Location */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${config.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0f2b38] hover:bg-teal-900 text-white font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {loc.phone}</span>
                </a>

                <a
                  href={loc.mapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl border border-slate-200 transition-all"
                >
                  <Navigation className="w-4 h-4 text-teal-700" />
                  <span>Map Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Contact Action Card */}
        <div className="bg-gradient-to-r from-[#0f2b38] via-[#0b222d] to-[#081c24] text-white rounded-3xl p-8 shadow-2xl border border-teal-800/80 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1 text-teal-300 text-xs font-bold uppercase tracking-wider bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-700/60">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Quick Appointment & Inquiries
              </span>
              <h3 className="text-2xl font-bold text-white">Need Urgent Cardiac Advice?</h3>
              <p className="text-slate-300 text-sm max-w-lg">
                Connect directly on WhatsApp or Facebook for OPD timings, procedure details, or immediate appointment booking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-lg border border-emerald-400/30"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ({config.phoneDisplay})</span>
              </a>

              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-blue-600 text-white font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-lg border border-blue-400/30"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Facebook Page</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
