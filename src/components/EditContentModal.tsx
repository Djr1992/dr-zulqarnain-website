import React, { useState } from 'react';
import { X, Save, RotateCcw, Image as ImageIcon, User, Building, Phone, Globe, Upload } from 'lucide-react';
import { SiteConfig } from '../types';

interface EditContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  onSave: (newConfig: SiteConfig) => void;
  onReset: () => void;
}

export const EditContentModal: React.FC<EditContentModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<SiteConfig>({ ...config });

  if (!isOpen) return null;

  const handleChange = (field: keyof SiteConfig, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          handleChange('doctorPhotoUrl', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 text-slate-800 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f2b38] text-white p-6 rounded-t-3xl border-b border-teal-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Customize Doctor Profile & Site Info</h3>
              <p className="text-xs text-teal-200">Edit text, doctor photo URL, phone, or links</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          
          {/* Doctor Photo Section */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
            <label className="block text-xs font-bold text-slate-700 uppercase">
              Doctor Portrait Photo
            </label>
            <div className="flex items-center gap-4">
              <img
                src={formData.doctorPhotoUrl}
                alt="Preview"
                referrerPolicy="no-referrer"
                className="w-16 h-20 object-cover rounded-xl border border-slate-300 shadow-sm"
              />
              <div className="flex-1 space-y-2">
                <input
                  type="url"
                  placeholder="Paste image URL (https://...)"
                  value={formData.doctorPhotoUrl}
                  onChange={(e) => handleChange('doctorPhotoUrl', e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                    <Upload className="w-3.5 h-3.5 text-slate-700" />
                    <span>Upload Local Image File</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Doctor Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Doctor Name
              </label>
              <input
                type="text"
                value={formData.doctorName}
                onChange={(e) => handleChange('doctorName', e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium"
              />
            </div>

            {/* Hospital Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Hospital Name
              </label>
              <input
                type="text"
                value={formData.hospitalName}
                onChange={(e) => handleChange('hospitalName', e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium"
              />
            </div>
          </div>

          {/* Designation */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Designation & Title
            </label>
            <input
              type="text"
              value={formData.designation}
              onChange={(e) => handleChange('designation', e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium"
            />
          </div>

          {/* Intro Paragraph */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Hero Intro Paragraph
            </label>
            <textarea
              rows={3}
              value={formData.introParagraph}
              onChange={(e) => handleChange('introParagraph', e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Display */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Contact Phone Number
              </label>
              <input
                type="text"
                value={formData.phoneDisplay}
                onChange={(e) => {
                  handleChange('phoneDisplay', e.target.value);
                  handleChange('phoneRaw', e.target.value.replace(/\D/g, ''));
                }}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium"
              />
            </div>

            {/* WhatsApp URL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                WhatsApp Link URL
              </label>
              <input
                type="text"
                value={formData.whatsappUrl}
                onChange={(e) => handleChange('whatsappUrl', e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium"
              />
            </div>
          </div>

          {/* Facebook URL */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Facebook Profile URL
            </label>
            <input
              type="text"
              value={formData.facebookUrl}
              onChange={(e) => handleChange('facebookUrl', e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium"
            />
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-800 font-semibold py-2 px-3 rounded-lg hover:bg-rose-50"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 bg-[#0f2b38] hover:bg-teal-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
