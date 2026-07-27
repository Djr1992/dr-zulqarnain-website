import React from 'react';
import { MessageSquare, ExternalLink, Calendar, ShieldCheck, Award, HeartHandshake, CheckCircle2, Camera } from 'lucide-react';
import { SiteConfig } from '../types';

interface HeroProps {
  config: SiteConfig;
  onOpenAppointment: () => void;
  onOpenEditor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onOpenAppointment, onOpenEditor }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-teal-900 via-teal-850 to-teal-950 text-white py-12 lg:py-20 overflow-hidden">
      {/* Background Subtle Medical Grid and Glow Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Doctor Info & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Hospital Designation Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/80 border border-teal-600/50 text-teal-200 text-xs sm:text-sm font-medium backdrop-blur-sm shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-semibold text-white">{config.hospitalName} Sargodha</span>
              <span className="text-teal-400">•</span>
              <span>Interventional Cardiology Unit</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {config.doctorName}
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
              <p className="text-lg sm:text-xl font-medium text-teal-200/95 leading-snug pt-1">
                {config.designation}
              </p>
            </div>

            {/* Intro Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {config.introParagraph}
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-slate-200 font-medium">
              <div className="flex items-center gap-2 bg-teal-950/40 border border-teal-800/40 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Angiography & Angioplasty Specialist</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-950/40 border border-teal-800/40 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Emergency 24/7 STEMI Management</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-950/40 border border-teal-800/40 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pacemaker & Echocardiography Care</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-950/40 border border-teal-800/40 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nawaz Sharif Institute Of Cardiology, Sargodha</span>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {/* WhatsApp Button */}
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-xl transition-all shadow-lg shadow-emerald-950/50 border border-emerald-400/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Facebook Button */}
              <a
                href={config.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#1877F2] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-xl transition-all shadow-lg shadow-blue-950/50 border border-blue-400/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Facebook Profile</span>
              </a>

              {/* Book Appointment Button */}
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-xl transition-all shadow-lg shadow-teal-950/50 border border-teal-300/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Quick Stats Banner */}
            <div className="pt-6 border-t border-teal-800/50 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">12+</div>
                <div className="text-xs text-slate-400 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">5,000+</div>
                <div className="text-xs text-slate-400 font-medium">Cardiac Procedures</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-teal-300">24/7</div>
                <div className="text-xs text-slate-400 font-medium">Emergency Care</div>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Portrait Photo Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Accent Ring Behind Image */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-teal-500 via-cyan-400 to-emerald-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>

            <div className="relative w-full max-w-md bg-teal-950/90 rounded-2xl border-2 border-teal-400/50 p-3 shadow-2xl overflow-hidden group">
              
              {/* Doctor Photo Container */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900 border border-teal-800/60">
                <img
                  src={config.doctorPhotoUrl}
                  alt={config.doctorName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top sm:object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback image if custom image URL breaks
                    (e.target as HTMLImageElement).src = '/doctor_photo.jpg';
                  }}
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f28] via-transparent to-transparent opacity-80"></div>

                {/* Edit Photo Overlay Badge */}
                <button
                  onClick={onOpenEditor}
                  className="absolute top-3 right-3 bg-black/60 hover:bg-black/90 text-teal-200 hover:text-white backdrop-blur-md text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-teal-500/40 flex items-center gap-1.5 transition-all shadow-md opacity-90 group-hover:opacity-100"
                  title="Change or upload doctor portrait photo"
                >
                  <Camera className="w-3.5 h-3.5 text-teal-400" />
                  <span>Edit Photo</span>
                </button>

                {/* Verified Badge on Photo */}
                <div className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/50 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Consultant Cardiologist</span>
                </div>

                {/* Caption overlaid on image */}
                <div className="absolute bottom-4 left-4 right-4 text-left space-y-0.5">
                  <div className="text-lg font-bold text-white drop-shadow">{config.doctorName}</div>
                  <div className="text-xs font-medium text-teal-300 drop-shadow">
                    Assistant Professor of Cardiology
                  </div>
                  <div className="text-[11px] text-slate-300 flex items-center gap-1 pt-1">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Nawaz Sharif Institute Of Cardiology, Sargodha</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div className="mt-3 p-3 bg-teal-950/60 rounded-xl border border-teal-800/50 flex items-center justify-between text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>OPD Consultation Days: Mon - Sat</span>
                </div>
                <span className="font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  Open Today
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
