import React from 'react';
import { Star, ThumbsUp, Facebook, MessageCircle, CheckCircle, Quote, ShieldCheck, Heart } from 'lucide-react';
import { ReviewItem } from '../types';

interface PatientReviewsSectionProps {
  reviews: ReviewItem[];
  facebookUrl: string;
}

export const PatientReviewsSection: React.FC<PatientReviewsSectionProps> = ({
  reviews,
  facebookUrl,
}) => {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-teal-950 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-900/80 text-teal-300 border border-teal-700/60 text-xs font-semibold uppercase tracking-wider">
            <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
            <span>Community Feedback & Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Patient Experience & Words of Gratitude
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Real reviews shared by patients and families across Sargodha, Sillanwali, and neighboring areas.
          </p>
        </div>

        {/* 4 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => {
            const authorInitials = rev.author
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2);

            return (
              <div
                key={rev.id}
                className="bg-teal-900/90 rounded-2xl p-6 border border-teal-700/60 shadow-xl relative flex flex-col justify-between hover:border-teal-400 transition-all group"
              >
                {/* Quote Icon Background */}
                <Quote className="absolute top-4 right-4 w-12 h-12 text-teal-900/40 pointer-events-none group-hover:text-teal-800/60 transition-colors" />

                <div className="space-y-4 relative z-10">
                  {/* Facebook Reviewer Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Avatar Circle */}
                      <div
                        className={`w-12 h-12 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md border-2 border-teal-400/30`}
                      >
                        {authorInitials || 'FB'}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3
                            className={`font-bold text-base text-white ${
                              rev.isUrdu ? 'font-serif text-lg' : ''
                            }`}
                            dir={rev.isUrdu ? 'rtl' : 'ltr'}
                          >
                            {rev.author}
                          </h3>
                          {rev.verified && (
                            <span className="text-teal-400" title="Verified Facebook Patient Review">
                              <CheckCircle className="w-4 h-4 fill-teal-400 text-[#0f2b38]" />
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400 flex items-center gap-2">
                          <span>{rev.location}</span>
                          <span>•</span>
                          <span>{rev.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Facebook Icon Tag */}
                    <div className="w-8 h-8 rounded-full bg-[#1877F2]/20 border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2]">
                      <Facebook className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Rating Stars & Recommends Badge */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" /> Recommends Dr. Zulqarnain
                    </span>
                  </div>

                  {/* Review Text */}
                  <div
                    className={`text-slate-200 text-base leading-relaxed bg-[#0a1f28] p-4 rounded-xl border border-teal-900/60 ${
                      rev.isUrdu ? 'text-right font-serif text-lg leading-loose' : 'text-left'
                    }`}
                    dir={rev.isUrdu ? 'rtl' : 'ltr'}
                  >
                    "{rev.comment}"
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3 border-t border-teal-900/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    Verified Sadiq Hospital Patient
                  </span>
                  <span className="text-teal-400 hover:underline cursor-pointer">
                    View on Facebook
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Facebook Link Callout */}
        <div className="mt-12 bg-[#0a1f28] rounded-2xl p-6 border border-teal-800/80 text-center max-w-2xl mx-auto space-y-4 shadow-xl">
          <div className="flex items-center justify-center gap-2 text-teal-300 font-semibold text-sm">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            <span>Over 100+ Positive Feedback Recommendations</span>
          </div>
          <p className="text-slate-300 text-sm">
            Have you been treated by Dr. Muhammad Zulqarnain? Share your experience or recommendation on his official Facebook page.
          </p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg border border-blue-400/30"
          >
            <Facebook className="w-5 h-5" />
            <span>Visit Facebook Page & Reviews</span>
          </a>
        </div>

      </div>
    </section>
  );
};
