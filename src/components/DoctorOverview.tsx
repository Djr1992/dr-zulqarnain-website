import React from 'react';
import { Award, Stethoscope, Heart, Building2, MapPin, CheckCircle, GraduationCap, Clock } from 'lucide-react';
import { SiteConfig } from '../types';

interface DoctorOverviewProps {
  config: SiteConfig;
  onOpenAppointment: () => void;
}

export const DoctorOverview: React.FC<DoctorOverviewProps> = ({ config, onOpenAppointment }) => {
  return (
    <section id="overview" className="py-16 bg-slate-50 text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-teal-700" />
            <span>Consultant Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950 tracking-tight">
            Meet Your Interventional Cardiologist
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Dedicated to providing advanced, evidence-based cardiovascular care with empathy and therapeutic precision.
          </p>
        </div>

        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Primary Affiliations */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200/80 flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-950">Hospital Affiliation</h3>
                <p className="text-sm font-semibold text-teal-700 mt-1">{config.hospitalName}</p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                As <strong>Assistant Professor of Cardiology</strong>, Dr. Muhammad Zulqarnain leads interventional cardiac procedures, teaching medical residents and offering state-of-the-art treatment for complex heart disease in Sargodha.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Nawaz Sharif Institute Of Cardiology, Sargodha</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <span className="inline-block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Primary Specialty
              </span>
              <p className="text-sm font-bold text-slate-800">Interventional Cardiology & Coronary Stenting</p>
            </div>
          </div>

          {/* Card 2: Clinical Expertise */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200/80 flex flex-col justify-between hover:shadow-xl transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-200">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-teal-950">Key Clinical Specialties</h3>
                <p className="text-sm font-semibold text-cyan-700 mt-1">Comprehensive Cardiac Care</p>
              </div>
              
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Coronary Angiography:</strong> Radial & Femoral Diagnostic Arterial Mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Coronary Angioplasty:</strong> Complex Stenting & Drug-Eluting Stent Placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Primary Angioplasty (STEMI):</strong> Emergency Acute Heart Attack Lifesaving Interventions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pacemaker Implantation:</strong> Single & Dual Chamber Permanent Pacemaker Therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Echocardiography:</strong> 2D & Color Doppler Heart Function Analysis</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6">
              <span className="inline-block text-xs font-semibold text-slate-500 uppercase tracking-wide">
                Patient Approach
              </span>
              <p className="text-sm font-bold text-slate-800">100% Patient-First & Honest Medical Guidance</p>
            </div>
          </div>

          {/* Card 3: Academic & Professional Credentials */}
          <div className="bg-gradient-to-br from-teal-800 to-teal-950 text-white rounded-2xl p-6 shadow-xl border border-teal-700 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-900/80 text-teal-300 flex items-center justify-center border border-teal-700/60">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Academic Excellence</h3>
                <p className="text-sm font-semibold text-teal-300 mt-1">Teaching & Clinical Practice</p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Combining rigorous academic expertise as an <strong>Assistant Professor of Cardiology</strong> with thousands of successful clinical catheterization procedures.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="bg-teal-950/60 border border-teal-800/60 p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-teal-300 font-bold block">Sargodha & Peripheries</span>
                    <span className="text-slate-400">Trusted Heart Care Destination</span>
                  </div>
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                </div>

                <div className="bg-teal-950/60 border border-teal-800/60 p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-teal-300 font-bold block">Patient Satisfaction</span>
                    <span className="text-slate-400">5-Star Community Ratings</span>
                  </div>
                  <Heart className="w-5 h-5 text-rose-400 shrink-0" />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-teal-800/60 mt-6">
              <button
                onClick={onOpenAppointment}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-all shadow-md text-center"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
