import { ServiceItem, ReviewItem, ClinicLocation, SiteConfig } from '../types';

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  doctorName: 'Dr Muhammad Zulqarnain',
  designation: 'Assistant Professor of Cardiology | Consultant Interventional Cardiologist',
  hospitalName: 'Nawaz Sharif Institute Of Cardiology',
  introParagraph:
    'Providing compassionate, world-class cardiac care and advanced interventional cardiology procedures at Nawaz Sharif Institute Of Cardiology, Sargodha. Dedicated to saving lives through accurate diagnosis, emergency heart attack treatment, and personalized patient wellness.',
  phoneDisplay: '0307-4655584',
  phoneRaw: '03074655584',
  whatsappUrl: 'https://wa.me/923074655584',
  facebookUrl: 'https://www.facebook.com/share/1DHF8odBpD/',
  // High quality professional cardiologist portrait photo of Dr. Muhammad Zulqarnain
  doctorPhotoUrl: '/doctor_photo.svg',
  sadiqHospitalAddress: 'Nawaz Sharif Institute Of Cardiology, Sargodha',
  sillanwaliAddress: 'Nawaz Sharif Institute Of Cardiology, Sargodha',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'angiography',
    title: 'Coronary Angiography',
    shortTitle: 'Angiography',
    category: 'Diagnostic',
    summary:
      'A precise diagnostic imaging test using specialized contrast dye and X-rays to visualize heart arteries and pinpoint blockages accurately.',
    iconName: 'Activity',
    wordCount: 175,
    readTime: '2 min read',
    badgeText: 'Diagnostic Gold Standard',
    article: {
      whatIsIt:
        'Coronary Angiography is an advanced, highly accurate diagnostic imaging procedure designed to evaluate the internal condition of the blood vessels (coronary arteries) supplying oxygen to your heart muscle. By injecting a safe, X-ray visible contrast dye through a thin tube called a catheter, Dr. Muhammad Zulqarnain can map out your entire cardiac circulation in real-time high-definition video.',
      whyNeeded:
        'Angiography is strongly recommended for patients experiencing recurrent chest discomfort (angina), unexplained shortness of breath, abnormal ECG or stress test findings, or those with a history of heart attack. It accurately pinpoints the exact location, length, and severity of arterial blockages caused by cholesterol plaque buildup, allowing your cardiologist to formulate the safest treatment plan.',
      whatToExpect:
        'The procedure is performed under local anesthesia in a state-of-the-art Cath Lab, meaning you remain comfortable and awake throughout. A tiny catheter is gently inserted through a vessel in your wrist (radial approach) or groin. The contrast dye flows into the coronary arteries while rapid X-ray pictures are recorded. The process takes roughly 20 to 30 minutes, involves minimal discomfort, and usually allows for same-day discharge with precise diagnostic clarity.',
      idealFor: 'Patients with chest pain, abnormal stress tests, or suspected coronary artery disease.',
    },
  },
  {
    id: 'angioplasty',
    title: 'Coronary Angioplasty & Stenting',
    shortTitle: 'Angioplasty',
    category: 'Interventional',
    summary:
      'A life-improving interventional procedure that opens narrowed or blocked coronary arteries using balloon dilation and permanent mesh stents.',
    iconName: 'HeartPulse',
    wordCount: 185,
    readTime: '2 min read',
    badgeText: 'Minimally Invasive Care',
    article: {
      whatIsIt:
        'Coronary Angioplasty, also known as Percutaneous Coronary Intervention (PCI), is a non-surgical interventional procedure used to restore blood flow through narrowed or obstructed heart arteries. Dr. Muhammad Zulqarnain uses delicate balloon catheters and modern drug-eluting metallic mesh stents to gently open the blocked vessel and re-establish vital blood circulation to the cardiac muscle.',
      whyNeeded:
        'When coronary arteries become clogged with fatty plaque deposits, the heart muscle is starved of oxygen. This leads to debilitating angina chest pain, fatigue, or permanent muscle weakening. Angioplasty is required to relieve severe symptoms, prevent future heart attacks, and improve long-term exercise tolerance and quality of life without open-heart surgery.',
      whatToExpect:
        'Under local anesthesia, a catheter carrying a tiny collapsed balloon is guided directly to the blockage site. Once positioned, the balloon is inflated for a few seconds to push the plaque against the artery wall. A drug-eluting stent is then expanded permanently in place, acting as a scaffold to keep the artery wide open. Most patients feel immediate relief, spend 24 hours under observation, and resume routine light daily activities within a few days.',
      idealFor: 'Patients with severe artery blockages, angina unresponsive to medications, or heart failure risk.',
    },
  },
  {
    id: 'pacemaker',
    title: 'Permanent Pacemaker Implantation',
    shortTitle: 'Pacemaker',
    category: 'Electrophysiology',
    summary:
      'Implantation of a compact electronic device to monitor and regulate irregular or dangerously slow heart rhythms.',
    iconName: 'Zap',
    wordCount: 180,
    readTime: '2 min read',
    badgeText: 'Rhythm Correction',
    article: {
      whatIsIt:
        'A Cardiac Pacemaker is a small, battery-powered electronic pulse generator implanted just beneath the skin near the collarbone. Connected to the heart via thin insulated wires (leads), the pacemaker continuously tracks your heart rate and delivers imperceptible electrical impulses whenever your heart beats too slowly or skips beats.',
      whyNeeded:
        'Pacemaker therapy is vital for individuals diagnosed with severe bradycardia (abnormally slow heart rate), complete heart block, or sinus node dysfunction. Without treatment, slow heart rates cause dizziness, extreme fatigue, brain fog, sudden blackouts (fainting spells), and heart failure due to insufficient blood delivery to the brain and organs.',
      whatToExpect:
        'Implantation is a routine minor procedure conducted under local anesthesia and mild relaxation medicine. A tiny pocket is created under the skin, leads are guided safely through a vein into the heart chambers using fluoroscopy, and the pacemaker is connected and programmed. Procedure time is approximately one hour. Patients experience dramatic energy recovery and can return to active living with routine periodic device checkups.',
      idealFor: 'Patients with slow heart rate (bradycardia), heart block, or fainting episodes.',
    },
  },
  {
    id: 'echocardiography',
    title: '2D / Color Doppler Echocardiography',
    shortTitle: 'Echocardiography',
    category: 'Diagnostic',
    summary:
      'A safe, painless ultrasound examination providing real-time 2D images of heart pumping strength, valve function, and wall motion.',
    iconName: 'Waves',
    wordCount: 165,
    readTime: '2 min read',
    badgeText: 'Non-Invasive Ultrasound',
    article: {
      whatIsIt:
        'Echocardiography (Echo) is a safe, painless, non-invasive ultrasound examination that produces high-resolution live motion images of your heart. Using sound waves, Echocardiography allows Dr. Muhammad Zulqarnain to inspect all four cardiac chambers, measure blood flow velocity across valves, and assess the overall pumping strength (Ejection Fraction) of your heart.',
      whyNeeded:
        'An Echo is essential for investigating heart murmurs, leaky or stiff heart valves, high blood pressure impact, breathlessness, swollen legs, and congenital heart defects. It provides crucial diagnostic insights into whether the heart muscle has been weakened by previous heart attacks or cardiomyopathy.',
      whatToExpect:
        'The test takes place in a quiet clinic room. You lie comfortably on an examination couch while a water-based gel is applied to your chest. A handheld ultrasound wand (transducer) is placed against the chest wall, transmitting live images to a monitor. There are zero needles, zero radiation, and zero downtime. The scan takes about 15 to 20 minutes, giving immediate diagnostic answers.',
      idealFor: 'Routine cardiac checkups, valve assessment, breathlessness evaluation, and hypertension monitoring.',
    },
  },
  {
    id: 'primary-angioplasty',
    title: 'Primary Angioplasty (Emergency STEMI PCI)',
    shortTitle: 'Primary Angioplasty',
    category: 'Emergency',
    summary:
      'Gold-standard emergency cardiac intervention performed immediately during an acute heart attack to unblock clogged arteries and preserve heart muscle.',
    iconName: 'Siren',
    wordCount: 195,
    readTime: '2 min read',
    badgeText: '24/7 Life-Saving Emergency',
    article: {
      whatIsIt:
        'Primary Angioplasty (Primary PCI) is the premier, gold-standard emergency interventional procedure performed immediately during an ongoing acute major heart attack (STEMI). Unlike routine elective angioplasty, Primary Angioplasty is executed as an emergency response to reopen a completely occluded coronary artery within minutes of hospital arrival.',
      whyNeeded:
        'When a blood clot completely shuts down blood flow through a main cardiac artery, the downstream heart muscle begins dying within minutes. "Time is Muscle." Rapidly reopening the blocked vessel via Primary PCI stops heart muscle necrosis, dramatically improves survival rates, reduces cardiac damage, and lowers the chance of sudden cardiac arrest compared to clot-busting medications.',
      whatToExpect:
        'Upon arriving at Nawaz Sharif Institute Of Cardiology, Sargodha with acute chest pain, the patient is instantly triaged. The specialized emergency cardiac team transports the patient directly to the Cath Lab. Dr. Muhammad Zulqarnain performs immediate coronary catheterization, removes the thrombus clot, and deploys a drug-eluting stent to restore vital blood flow. Emergency monitoring in the Intensive Cardiac Care Unit (ICCU) ensures optimal stabilization and rapid cardiac rehabilitation.',
      idealFor: 'Immediate emergency management of acute chest pain, major heart attack (STEMI), and sudden coronary thrombosis.',
    },
  },
];

export const PATIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Munir Hussain',
    location: 'Sargodha',
    rating: 5,
    comment:
      'Highly recommended. Best cardiologist. Blessing for the people of Sargodha and its peripheries.',
    date: '2 weeks ago',
    avatarBg: 'bg-teal-700',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Mohsin Rasheed',
    location: 'Sargodha & Nearby',
    rating: 5,
    comment:
      'Thank u for carrying humanity and devoting yourself to this profession. Highly recommend in sargodha and nearby areas.',
    date: '1 month ago',
    avatarBg: 'bg-navy-800',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'مکہ میثل میثل',
    location: 'Sargodha Region',
    rating: 5,
    comment:
      'میرا نام ارشد ہے میں نے 50 دن پہلے ڈاکٹر صاحب سے دل کا سٹینٹ ڈلوایا تھا الحمدللہ میں ٹھیک ٹھاک ہوں',
    date: '3 weeks ago',
    isUrdu: true,
    avatarBg: 'bg-emerald-800',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Abdullah Warraich',
    location: 'Sargodha',
    rating: 5,
    comment:
      'ڈاکٹر ذوالقرنین صاحب انتہائی قابل اور بیماری اور سمجھنے والے ڈاکٹر ہیں',
    date: '1 month ago',
    isUrdu: true,
    avatarBg: 'bg-cyan-800',
    verified: true,
  },
];

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'nawaz-sharif-cardiology',
    name: 'Nawaz Sharif Institute Of Cardiology',
    address: 'Nawaz Sharif Institute Of Cardiology, Sargodha',
    city: 'Sargodha',
    landmark: 'Nawaz Sharif Institute Of Cardiology, Sargodha',
    timing: '09:00 AM - 02:00 PM / Emergency 24/7',
    days: 'Monday to Saturday',
    phone: '0307-4655584',
    whatsappUrl: 'https://wa.me/923074655584',
    mapQueryUrl: 'https://www.google.com/maps/search/?api=1&query=Nawaz+Sharif+Institute+Of+Cardiology+Sargodha',
    isMainFacility: true,
  },
];
