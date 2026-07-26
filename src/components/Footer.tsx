import React from 'react';
import { Heart, Phone, MessageSquare, ExternalLink, MapPin, Edit3, ShieldAlert } from 'lucide-react';
import { SiteConfig } from '../types';

interface FooterProps {
  config: SiteConfig;
  onOpenAppointment: () => void;
  onOpenEditor: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenAppointment, onOpenEditor }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-teal-950 text-slate-200 border-t border-teal-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Hospital & Doctor Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-700 flex items-center justify-center text-white shadow-md">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white block">{config.hospitalName}</span>
                <span className="text-xs text-teal-300 font-semibold">Interventional Cardiology</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>{config.doctorName}</strong>
              <br />
              {config.designation}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenEditor}
                className="inline-flex items-center gap-1.5 text-xs text-teal-300 bg-teal-950/80 hover:bg-teal-900 px-3 py-1.5 rounded-lg border border-teal-800/80 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Customize Site Content</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-teal-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-teal-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('overview')} className="hover:text-teal-300 transition-colors">
                  Doctor Profile & Qualifications
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-teal-300 transition-colors">
                  Cardiology Services & Articles
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('reviews')} className="hover:text-teal-300 transition-colors">
                  Patient Reviews & Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('locations')} className="hover:text-teal-300 transition-colors">
                  OPD Clinics & Map Locations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-teal-400">
              Cardiac Procedures
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Coronary Angiography (Radial / Femoral)</li>
              <li>• Coronary Angioplasty & Stent Implantation</li>
              <li>• Primary Angioplasty (Emergency STEMI)</li>
              <li>• Permanent Pacemaker Implantation</li>
              <li>• 2D & Color Doppler Echocardiography</li>
            </ul>
          </div>

          {/* Col 4: Emergency & OPD Locations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-teal-400">
              OPD Locations
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="bg-teal-900/60 p-3 rounded-lg border border-teal-700/60">
                <span className="font-bold text-white block">Nawaz Sharif Institute Of Cardiology</span>
                <span className="text-slate-300">Sargodha, Punjab</span>
                <span className="text-teal-300 block font-medium mt-0.5">09:00 AM - 02:00 PM / Emergency 24/7</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Banner */}
        <div className="bg-teal-900/60 p-4 rounded-xl border border-teal-700/60 flex items-start gap-3 text-xs text-slate-300">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong>Medical Disclaimer:</strong> The informative articles provided on this website are for educational and informational purposes only. They do not substitute professional medical diagnosis or individual clinical consultation. In case of acute severe chest pain or emergency heart attack symptoms, please proceed immediately to Nawaz Sharif Institute Of Cardiology, Sargodha or your nearest emergency medical facility.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Dr Muhammad Zulqarnain • Nawaz Sharif Institute Of Cardiology, Sargodha. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href={config.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
              WhatsApp
            </a>
            <span>•</span>
            <a href={config.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Facebook
            </a>
            <span>•</span>
            <button onClick={onOpenAppointment} className="hover:text-teal-300">
              Book OPD
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
