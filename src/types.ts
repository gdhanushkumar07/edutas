export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  description: string;
  iconName: string;
  image: string;
  category: 'primary' | 'other';
  whoIsItFor: string[];
  processSteps: { step: string; title: string; desc: string }[];
  benefits: string[];
  requiredDocs: string[];
  faqs: { question: string; answer: string }[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  discipline: string;
  degreeLevel: 'Masters' | 'Bachelors' | 'Graduate Diploma' | 'Diploma';
  duration: string;
  intakes: string[];
  location: string;
  state: 'QLD' | 'NSW' | 'VIC' | 'SA' | 'WA' | 'TAS';
  university: string;
  campus: string;
  studyMode: 'On Campus' | 'Blended' | 'Online';
  feeEstimate: string;
  overview: string;
  eligibility: string[];
  careerOutcomes: string[];
  image: string;
  cricosRegistered: boolean;
  featured?: boolean;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface StatItem {
  value: string;
  numericVal: number;
  suffix: string;
  label: string;
  detail: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  category: 'Admissions' | 'Courses' | 'Student Visa' | 'PR Assessment' | 'Career Guidance' | 'International Students';
  question: string;
  answer: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  service: string;
  studyDestination: string;
  courseInterest: string;
  message: string;
  consent: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface PRPointsCriteria {
  ageGroup: string;
  englishLevel: string;
  educationalQualification: string;
  australianStudy: boolean;
  specialistEducationalQualification: boolean;
  communityLanguageNaati: boolean;
  studyInRegionalAustralia: boolean;
  partnerSkills: string;
  professionalYear: boolean;
  overseasWorkExperience: string;
  australianWorkExperience: string;
}
