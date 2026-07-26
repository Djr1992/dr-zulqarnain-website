export interface ServiceArticle {
  whatIsIt: string;
  whyNeeded: string;
  whatToExpect: string;
  idealFor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  category: 'Diagnostic' | 'Interventional' | 'Emergency' | 'Electrophysiology';
  summary: string;
  iconName: string;
  wordCount: number;
  article: ServiceArticle;
  readTime: string;
  badgeText: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  isUrdu?: boolean;
  avatarBg: string;
  verified: boolean;
}

export interface ClinicLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  landmark: string;
  timing: string;
  days: string;
  phone: string;
  whatsappUrl: string;
  mapQueryUrl: string;
  isMainFacility: boolean;
}

export interface SiteConfig {
  doctorName: string;
  designation: string;
  hospitalName: string;
  introParagraph: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappUrl: string;
  facebookUrl: string;
  doctorPhotoUrl: string;
  sadiqHospitalAddress: string;
  sillanwaliAddress: string;
}
