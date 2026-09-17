import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Consultation & Guidance',
    summary: 'Personalized evaluation of your goals, academic history, and migration ambitions.',
    description: 'We sit down with you—in our Milton, Brisbane office or online—to review your prior education, career ambitions, budget, and long-term residency expectations. We explore accredited Australian university and vocational pathways tailored to your strengths.',
    icon: 'MessageSquare',
    deliverables: [
      'Comprehensive profile & qualification audit',
      'Personalized course & university shortlist',
      'Tuition, cost of living & scholarship estimates',
      'Migration & points strategy overview'
    ]
  },
  {
    stepNumber: '02',
    title: 'Application Management',
    summary: 'Document compilation, Genuine Student (GS) compliance, and university submission.',
    description: 'Our experienced admissions team prepares and verifies your application package. We review your Statement of Purpose (SOP), academic transcripts, references, and English scores to ensure rapid turnaround without institutional delays.',
    icon: 'FileText',
    deliverables: [
      'Verified academic document dossier',
      'Tailored Genuine Student (GS) statement assistance',
      'Direct lodgement with Australian partner institutions',
      'Application fee waiver handling where eligible'
    ]
  },
  {
    stepNumber: '03',
    title: 'Offer & Admission',
    summary: 'Conditional and unconditional Offer Letter processing and securing your CoE.',
    description: 'Once your application is approved by the Australian university, we guide you through reviewing offer conditions, financial capacity evidence, accepting the offer, making initial tuition deposits securely, and obtaining your Confirmation of Enrolment (CoE).',
    icon: 'Award',
    deliverables: [
      'Offer letter review & condition clearance',
      'Scholarship grant verification',
      'Safe fee payment guidance via official university portals',
      'Issuance of official electronic CoE'
    ]
  },
  {
    stepNumber: '04',
    title: 'Visa & Pre-Departure Support',
    summary: 'Student Visa (Subclass 500) guidance, OSHC insurance, and travel preparation.',
    description: 'We provide structured guidance on assembling your student visa dossier in accordance with current Department of Home Affairs requirements. We also arrange your Overseas Student Health Cover (OSHC) and provide complete pre-flight orientation.',
    icon: 'Plane',
    deliverables: [
      'Comprehensive visa checklist & document verification',
      'OSHC health insurance selection & policy confirmation',
      'Biometrics & health examination guidance',
      'Pre-departure orientation & Australian customs briefing'
    ]
  },
  {
    stepNumber: '05',
    title: 'Complete Your Course with Ease',
    summary: 'Onshore orientation in Queensland, ongoing support, and post-study transition.',
    description: 'Your journey does not end when your flight touches down. Our team in Milton, Brisbane supports you with Tax File Numbers, student concessions, temporary housing, and future transitions toward Temporary Graduate (Subclass 485) and skilled PR pathways.',
    icon: 'CheckCircle',
    deliverables: [
      'Brisbane & Queensland onshore arrival onboarding',
      'TFN, banking & transit card setup guidance',
      'Course progression & visa condition compliance support',
      'Subclass 485 Temporary Graduate pathway planning'
    ]
  }
];
