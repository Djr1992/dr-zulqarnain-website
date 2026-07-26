import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, CheckCircle, MessageSquare, Heart } from 'lucide-react';
import { SiteConfig } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  config,
  preselectedService = '',
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [clinic, setClinic] = useState('Nawaz Sharif Institute Of Cardiology (Sargodha)');
  const [service, setService] = useState(preselectedService || 'General Consultation');
  const [preferredDate, setPreferredDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const message = `*New OPD Appointment Request*
*Patient:* ${patientName}
*Phone:* ${phone}
*Clinic Location:* ${clinic}
*Procedure/Consultation:* ${service}
*Preferred Date:* ${preferredDate || 'Earliest Available'}
*Symptoms/Notes:* ${symptoms || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/923074655584?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-800 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0f2b38] text-white p-6 rounded-t-3xl border-b border-teal-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Book Clinic Appointment</h3>
              <p className="text-xs text-teal-200">{config.doctorName} • Cardiology OPD</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300 shadow-md">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#0f2b38]">Request Sent via WhatsApp!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Your appointment details have been compiled and sent to Nawaz Sharif Institute Of Cardiology's WhatsApp assistant. Our clinic coordinator will confirm your exact token number and time slot shortly.
              </p>
              <button
                onClick={handleReset}
                className="bg-[#0f2b38] hover:bg-teal-900 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Patient Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arshad Mahmood"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Contact Phone / WhatsApp <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="0300-1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              {/* Clinic Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Select Clinic Location
                </label>
                <select
                  value={clinic}
                  onChange={(e) => setClinic(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="Nawaz Sharif Institute Of Cardiology (Sargodha)">Nawaz Sharif Institute Of Cardiology - Sargodha (9AM - 2PM / 24/7 Emergency)</option>
                </select>
              </div>

              {/* Procedure / Consultation Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Procedure / Service Required
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="General Cardiac Consultation">General Cardiac Consultation</option>
                  <option value="Coronary Angiography">Coronary Angiography</option>
                  <option value="Coronary Angioplasty / Stenting">Coronary Angioplasty / Stenting</option>
                  <option value="Pacemaker Implantation">Pacemaker Implantation</option>
                  <option value="Echocardiography (Echo)">Echocardiography (Echo)</option>
                  <option value="Emergency Heart Attack (STEMI)">Emergency Primary Angioplasty</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Preferred Appointment Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Brief Symptoms */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Brief Symptoms / Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Chest pain, high blood pressure, shortness of breath, previous stent report..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-base shadow-lg transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Appointment Request on WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Clicking will open WhatsApp pre-filled with your appointment details for instant confirmation.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
