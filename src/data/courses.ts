import { Course } from '../types';

export const COURSES: Course[] = [
  {
    id: 'masters-in-it',
    slug: 'masters-in-it',
    title: 'Master of Information Technology',
    discipline: 'Information Technology',
    degreeLevel: 'Masters',
    duration: '2.0 Years (Full-time)',
    intakes: ['February', 'July', 'November'],
    location: 'Brisbane, QLD',
    state: 'QLD',
    university: 'Leading Queensland University (CRICOS Accredited)',
    campus: 'Brisbane City Campus',
    studyMode: 'On Campus',
    feeEstimate: '$34,500 – $39,800 AUD / Year',
    overview: 'Develop advanced computing expertise in software engineering, enterprise cloud architectures, and database systems. Accredited by the Australian Computer Society (ACS) at the professional level, with industry internship opportunities.',
    eligibility: [
      'Recognised Bachelor degree in any discipline (or IT-related field for advanced standing)',
      'Academic IELTS 6.5 (no band < 6.0) or PTE Academic 58 (no score < 50)',
      'Australian equivalent GPA 4.0 on a 7.0 point scale'
    ],
    careerOutcomes: [
      'Software Developer / Systems Architect',
      'IT Project Consultant',
      'Database Administrator',
      'Cloud Solutions Specialist'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    cricosRegistered: true,
    featured: true
  },
  {
    id: 'masters-in-engineering',
    slug: 'masters-in-engineering',
    title: 'Master of Professional Engineering',
    discipline: 'Engineering',
    degreeLevel: 'Masters',
    duration: '2.0 Years (Full-time)',
    intakes: ['February', 'July'],
    location: 'Sydney, NSW',
    state: 'NSW',
    university: 'Australian Institute of Engineering & Technology',
    campus: 'Sydney Central Campus',
    studyMode: 'On Campus',
    feeEstimate: '$38,000 – $43,500 AUD / Year',
    overview: 'Comprehensive professional training across Civil, Mechanical, or Electrical engineering specializations. Designed in alignment with Engineers Australia accreditation standards, featuring 450 hours of industry-based practice.',
    eligibility: [
      'Bachelor of Engineering or relevant cognate engineering discipline',
      'Academic IELTS 6.5 (minimum 6.0 in each subtest) or PTE 58+',
      'Successful completion of tertiary mathematics and physics prerequisites'
    ],
    careerOutcomes: [
      'Professional Civil / Mechanical / Electrical Engineer',
      'Project Engineering Manager',
      'Infrastructure Design Consultant',
      'Renewable Energy Systems Engineer'
    ],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    cricosRegistered: true,
    featured: true
  },
  {
    id: 'masters-in-accounting',
    slug: 'masters-in-accounting',
    title: 'Master of Professional Accounting',
    discipline: 'Accounting & Finance',
    degreeLevel: 'Masters',
    duration: '2.0 Years (Full-time)',
    intakes: ['March', 'July', 'November'],
    location: 'Melbourne, VIC',
    state: 'VIC',
    university: 'Melbourne School of Business & Economics',
    campus: 'Melbourne CBD Campus',
    studyMode: 'On Campus',
    feeEstimate: '$32,000 – $36,500 AUD / Year',
    overview: 'Gain core competencies across corporate financial reporting, taxation law, auditing, and corporate finance. Designed for graduates seeking associate membership with CPA Australia and Chartered Accountants ANZ (CAANZ).',
    eligibility: [
      'Recognised Bachelor degree in any discipline',
      'Academic IELTS 6.5 (no subscore below 6.0) or PTE Academic 58+',
      'Genuine Student (GS) compliance assessment'
    ],
    careerOutcomes: [
      'Certified Practicing Accountant (CPA pathway)',
      'Financial Analyst / Tax Advisor',
      'Corporate Auditor',
      'Forensic Accountant'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    cricosRegistered: true,
    featured: true
  },
  {
    id: 'master-data-science',
    slug: 'master-data-science',
    title: 'Master of Data Science & Analytics',
    discipline: 'Information Technology',
    degreeLevel: 'Masters',
    duration: '2.0 Years (Full-time)',
    intakes: ['February', 'July'],
    location: 'Brisbane, QLD',
    state: 'QLD',
    university: 'Queensland Technology University',
    campus: 'Brisbane Riverside',
    studyMode: 'On Campus',
    feeEstimate: '$36,000 – $41,000 AUD / Year',
    overview: 'Master modern machine learning, big data pipelines, statistical modeling, and data-driven executive decision making. Includes a capstone project with Australian corporate partners.',
    eligibility: [
      'Bachelor degree in computer science, statistics, mathematics, engineering or related cognate discipline',
      'IELTS 6.5 (no band < 6.0) or PTE Academic 58+'
    ],
    careerOutcomes: [
      'Data Scientist',
      'Machine Learning Engineer',
      'Business Intelligence Director',
      'Quantitative Risk Analyst'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    cricosRegistered: true,
    featured: true
  },
  {
    id: 'bachelor-of-nursing',
    slug: 'bachelor-of-nursing',
    title: 'Bachelor of Nursing',
    discipline: 'Healthcare & Nursing',
    degreeLevel: 'Bachelors',
    duration: '3.0 Years (Full-time)',
    intakes: ['February'],
    location: 'Adelaide, SA',
    state: 'SA',
    university: 'South Australian College of Health Sciences',
    campus: 'Adelaide Regional Campus',
    studyMode: 'On Campus',
    feeEstimate: '$35,000 – $38,500 AUD / Year',
    overview: 'Accredited by the Australian Nursing and Midwifery Accreditation Council (ANMAC). Prepares graduates to apply for registration as a Registered Nurse (Division 1) with the Nursing and Midwifery Board of Australia (NMBA). Includes 800+ clinical placement hours.',
    eligibility: [
      'Australian Year 12 equivalent with competitive academic scores',
      'Academic IELTS 7.0 overall with minimum 7.0 in each subtest (or PTE Academic 65 with 65 in each band)',
      'Police check and immunization clearance prior to clinical placement'
    ],
    careerOutcomes: [
      'Registered Nurse (AHPRA Accredited)',
      'Clinical Nurse Specialist',
      'Emergency / Intensive Care Nurse',
      'Aged Care & Community Healthcare Lead'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    cricosRegistered: true,
    featured: true
  },
  {
    id: 'master-cyber-security',
    slug: 'master-cyber-security',
    title: 'Master of Cyber Security',
    discipline: 'Information Technology',
    degreeLevel: 'Masters',
    duration: '2.0 Years (Full-time)',
    intakes: ['February', 'July'],
    location: 'Perth, WA',
    state: 'WA',
    university: 'Western Australia Institute of Technology',
    campus: 'Perth Tech Campus',
    studyMode: 'On Campus',
    feeEstimate: '$33,000 – $37,000 AUD / Year',
    overview: 'Specialized postgraduate training in penetration testing, incident response, network defense, and governance. Taught using modern cyber range environments and real-world vulnerability simulations.',
    eligibility: [
      'Bachelor degree in IT, computer science, or engineering',
      'IELTS 6.5 (minimum 6.0 in each skill) or PTE 58+'
    ],
    careerOutcomes: [
      'Cyber Security Analyst',
      'Penetration Tester / Ethical Hacker',
      'Information Security Officer (CISO pathway)',
      'Security Operations Center (SOC) Specialist'
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    cricosRegistered: true,
    featured: true
  },
  {
    id: 'bachelor-of-business',
    slug: 'bachelor-of-business',
    title: 'Bachelor of Business (Management & Marketing)',
    discipline: 'Business & Management',
    degreeLevel: 'Bachelors',
    duration: '3.0 Years (Full-time)',
    intakes: ['February', 'July', 'October'],
    location: 'Gold Coast, QLD',
    state: 'QLD',
    university: 'Queensland Coast Business Institute',
    campus: 'Gold Coast Innovation Campus',
    studyMode: 'On Campus',
    feeEstimate: '$28,000 – $32,000 AUD / Year',
    overview: 'Develop agile leadership, digital marketing mastery, supply chain fundamentals, and organizational entrepreneurship. Offers guaranteed industry placement projects with Queensland commercial partners.',
    eligibility: [
      'Completion of high school Year 12 or equivalent qualification',
      'IELTS 6.0 (no band < 5.5) or PTE Academic 50+'
    ],
    careerOutcomes: [
      'Marketing & Brand Manager',
      'Business Operations Specialist',
      'Human Resources Officer',
      'Entrepreneur & Startup Founder'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    cricosRegistered: true,
    featured: false
  },
  {
    id: 'diploma-hospitality',
    slug: 'diploma-hospitality',
    title: 'Diploma of Hospitality Management',
    discipline: 'Hospitality & Tourism',
    degreeLevel: 'Diploma',
    duration: '1.5 Years (Full-time)',
    intakes: ['January', 'April', 'July', 'October'],
    location: 'Hobart, TAS',
    state: 'TAS',
    university: 'Tasmanian Vocational & Culinary Institute',
    campus: 'Hobart Regional Campus',
    studyMode: 'On Campus',
    feeEstimate: '$14,500 – $18,000 AUD / Year',
    overview: 'Hands-on practical training in food and beverage operations, resort management, customer service excellence, and commercial catering. Eligible for regional study incentives in Tasmania.',
    eligibility: [
      'Completion of Year 11/12 or mature age entry criteria',
      'IELTS 5.5 overall (no subscore below 5.0) or equivalent PTE 42'
    ],
    careerOutcomes: [
      'Restaurant & Hospitality Manager',
      'Hotel Front Office Supervisor',
      'Resort Event Coordinator'
    ],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    cricosRegistered: true,
    featured: false
  }
];
