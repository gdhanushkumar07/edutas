import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'pr-assessment',
    slug: 'pr-assessment',
    title: 'PR Assessment',
    category: 'primary',
    shortDesc: 'Comprehensive eligibility evaluation for Australian Permanent Residency pathways tailored to your background and qualifications.',
    description: 'Our PR Assessment service provides an objective, structured evaluation of your eligibility under Australian skilled migration streams (such as Subclass 189, 190, and 491). We review your qualifications, work experience, English competency, and regional study advantages to chart realistic, lawful pathways.',
    iconName: 'Award',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    whoIsItFor: [
      'Graduates who have recently completed or are currently completing Australian study',
      'Overseas professionals exploring skilled migration eligibility',
      'Temporary graduate visa holders (Subclass 485) planning their permanent pathway',
      'Skilled workers looking to calculate their points score for General Skilled Migration (GSM)'
    ],
    processSteps: [
      { step: '01', title: 'Initial Profile Review', desc: 'In-depth assessment of your academic transcripts, employment history, and English scores.' },
      { step: '02', title: 'Points & ANZSCO Alignment', desc: 'Precise calculation of your points score and mapping to the relevant skilled occupation list (SOL).' },
      { step: '03', title: 'State Nomination Analysis', desc: 'Reviewing active state and regional nomination criteria across QLD, NSW, VIC, SA, WA, and TAS.' },
      { step: '04', title: 'Roadmap & Document Checklist', desc: 'Delivering a transparent step-by-step roadmap with required documentary evidence.' }
    ],
    benefits: [
      'Clarity on your realistic Australian points score',
      'Understanding of your suitable ANZSCO occupation code',
      'Insights into regional vs metropolitan migration opportunities',
      'Strategic advice on closing points gaps (NAATI, Professional Year, English)'
    ],
    requiredDocs: [
      'Passport identification pages',
      'All academic degrees, diplomas, and official transcripts',
      'Current English language test results (IELTS, PTE, or TOEFL)',
      'Detailed resume and reference letters of skilled employment history'
    ],
    faqs: [
      {
        question: 'What is the minimum points requirement for Australian General Skilled Migration?',
        answer: 'The statutory threshold to submit an Expression of Interest (EOI) in SkillSelect is 65 points. However, competitive invitation scores vary significantly by occupation, visa subclass (189 vs 190 vs 491), and state nomination quotas.'
      },
      {
        question: 'Can I claim points for studying in regional Australia?',
        answer: 'Yes, completing an eligible CRICOS-registered qualification in a designated regional area while residing there can grant you 5 additional points toward your GSM points test, plus eligibility for regional state nominations.'
      },
      {
        question: 'Does Edutas guarantee that I will receive permanent residency?',
        answer: 'No. In strict compliance with Australian regulations, Edutas does not guarantee visa or PR outcomes. All invitations and grants remain solely at the discretion of the Department of Home Affairs and nominating state authorities.'
      }
    ]
  },
  {
    id: 'career-guidance',
    slug: 'career-guidance',
    title: 'Career Guidance',
    category: 'primary',
    shortDesc: 'Strategic academic and professional counselling connecting Australian study programs with high-demand industry careers.',
    description: 'Navigating the Australian job market requires aligning your passion with market demand and long-term industry opportunities. Our career counsellors help you evaluate course curricula, industry trends, internships, and graduate employment outcomes in Australia.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    whoIsItFor: [
      'School leavers and university graduates planning overseas education',
      'Working professionals seeking a career transition or industry upskilling in Australia',
      'Students looking to understand employment prospects in priority sectors like IT, Healthcare, and Engineering',
      'International candidates uncertain between specialized degrees'
    ],
    processSteps: [
      { step: '01', title: 'Skills & Aspirations Discovery', desc: 'Evaluating your academic strengths, career ambitions, and personal interests.' },
      { step: '02', title: 'Labor Market Alignment', desc: 'Analyzing the Australian National Skills Commission priorities and high-demand occupations.' },
      { step: '03', title: 'Course & Institution Shortlisting', desc: 'Matching programs offering practical industry placements, work-integrated learning, and strong graduate employment rates.' },
      { step: '04', title: 'Long-term Strategic Planning', desc: 'Formulating a structured career roadmap from first semester through post-study graduate work.' }
    ],
    benefits: [
      'Direct alignment between study programs and industry demand',
      'Understanding of Australian professional accreditation requirements (e.g. Engineers Australia, ACS, CPA/CAANZ)',
      'Guidance on internships and work-integrated learning programs',
      'Informed confidence before investing in international education'
    ],
    requiredDocs: [
      'Current educational qualifications and CV',
      'Statement of purpose or career objectives',
      'Portfolio or work samples (if applying for design, architecture, or IT)'
    ],
    faqs: [
      {
        question: 'How do I choose between different Australian universities for my career?',
        answer: 'We evaluate universities based on program accreditation, industry connections, location advantages (regional vs capital city), internship opportunities, campus facilities, and graduate employment rates.'
      },
      {
        question: 'Are there specific fields with higher demand in Australia?',
        answer: 'Australia currently experiences strong national demand in areas including Healthcare and Nursing, Information & Cyber Security, Engineering, Early Childhood Teaching, and Data Analytics.'
      }
    ]
  },
  {
    id: 'international-students',
    slug: 'international-students',
    title: 'International Student Services',
    category: 'primary',
    shortDesc: 'Dedicated end-to-end guidance for international students relocating to study and live in Australia.',
    description: 'Studying in Australia is a transformative milestone. Our International Student Services team stands with you at every stage: from choosing your city and opening an Australian bank account to finding student accommodation, understanding OSHC health cover, and settling into campus life.',
    iconName: 'Globe',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    whoIsItFor: [
      'Prospective international students planning to study in Australia',
      'Newly arriving students preparing for their first semester in Brisbane, Sydney, Melbourne, or other cities',
      'Parents seeking transparent, trusted on-the-ground support for their children',
      'Current international students needing ongoing welfare and course transition guidance'
    ],
    processSteps: [
      { step: '01', title: 'Destination Advisory', desc: 'Exploring city life, climate, living costs, and transport across Brisbane, Sydney, Melbourne, Adelaide, and Perth.' },
      { step: '02', title: 'Pre-Departure Briefing', desc: 'Comprehensive orientation on Australian customs, quarantine, climate, packing lists, and essential documentation.' },
      { step: '03', title: 'OSHC & Essentials Setup', desc: 'Selecting appropriate Overseas Student Health Cover (OSHC) and setting up mobile SIM cards and banking.' },
      { step: '04', title: 'Post-Arrival Onboarding', desc: 'Support with airport reception, temporary accommodation, public transit cards, and tax file numbers (TFN).' }
    ],
    benefits: [
      'Seamless relocation without unexpected cultural or administrative shocks',
      'Full compliance with student visa condition 8501 (health insurance maintenance)',
      'Practical guidance on part-time student work rights in Australia (up to 48 hours per fortnight during study terms)',
      'Local network in Queensland and partner hubs across Australia'
    ],
    requiredDocs: [
      'Confirmation of Enrolment (CoE) from your Australian education provider',
      'Valid Student Visa (Subclass 500) grant letter',
      'Copy of valid OSHC policy certificate',
      'Emergency contact details and travel itinerary'
    ],
    faqs: [
      {
        question: 'What is OSHC and is it mandatory for international students?',
        answer: 'Overseas Student Health Cover (OSHC) is mandatory health insurance required by the Australian Government for international student visa holders, covering medical treatments, doctor visits, hospital care, and select pharmaceuticals.'
      },
      {
        question: 'Can international students work while studying in Australia?',
        answer: 'Yes, student visa holders are permitted to work up to 48 hours per fortnight during official academic sessions and unrestricted hours during scheduled university holiday breaks.'
      }
    ]
  },
  {
    id: 'admissions',
    slug: 'admissions',
    title: 'Admissions & University Selection',
    category: 'primary',
    shortDesc: 'End-to-end management of your university and college applications across leading Australian institutions.',
    description: 'We streamline the application process for Australian universities, TAFE institutes, and colleges. From verifying academic entry prerequisites and English requirements to securing conditional and unconditional Offer Letters and your Confirmation of Enrolment (CoE).',
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    whoIsItFor: [
      'Undergraduate and Postgraduate applicants seeking admissions to Australian institutions',
      'Students looking for credit transfer or recognition of prior learning (RPL)',
      'Applicants seeking institutional merit scholarships and fee waivers',
      'Students whose applications require fast-track verification for upcoming intake deadlines'
    ],
    processSteps: [
      { step: '01', title: 'Program & Entry Audit', desc: 'Auditing your transcripts against GPA, prerequisite subjects, and English language entrance bars.' },
      { step: '02', title: 'Application Dossier Prep', desc: 'Compiling verified academic documents, Statement of Purpose (SOP), and portfolio requirements.' },
      { step: '03', title: 'Direct Institutional Submission', desc: 'Submitting through authorized institutional admissions portals to expedite assessment turnaround.' },
      { step: '04', title: 'Offer Letter & CoE Issuance', desc: 'Assisting with offer acceptance, tuition deposit transfers, and obtaining your official CoE.' }
    ],
    benefits: [
      'Fast-track processing with top Australian education providers',
      'Expert advice on Genuine Student (GS) criteria and documentation',
      'Identification of automatic and competitive international scholarships',
      'Zero confusion over credit transfers and prerequisite equivalencies'
    ],
    requiredDocs: [
      'Official academic transcripts and graduation certificates',
      'English proficiency test scorecard (PTE, IELTS, or TOEFL)',
      'Passport information page',
      'Statement of Purpose (SOP) addressing Genuine Student intentions',
      'Evidence of employment or gap years if applicable'
    ],
    faqs: [
      {
        question: 'What are the main intake months for Australian universities?',
        answer: 'The primary intakes are Semester 1 (February/March) and Semester 2 (July/August). Several universities and private institutes also offer a Trimester 3 intake (October/November).'
      },
      {
        question: 'What is a Confirmation of Enrolment (CoE)?',
        answer: 'A CoE is an official electronic document generated by your Australian education provider via PRISMS verifying that you have accepted your offer and paid tuition deposits. It is a mandatory requirement to lodge a Student Visa (Subclass 500).'
      }
    ]
  },
  {
    id: 'english-pte',
    slug: 'english-pte',
    title: 'English & PTE Guidance',
    category: 'other',
    shortDesc: 'Targeted preparation guidance and test strategies for PTE Academic and IELTS to meet admission and visa standards.',
    description: 'Meeting the English language threshold is fundamental for both Australian institution entry and visa criteria. We guide students on choosing the appropriate test, understanding score equivalencies, and accessing structured prep resources.',
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    whoIsItFor: ['Students needing score benchmarks for Bachelor or Master degrees', 'Graduates aiming for Superior English (79+ in PTE / 8.0 in IELTS) for PR points'],
    processSteps: [
      { step: '01', title: 'Diagnostic Assessment', desc: 'Determine your current baseline and specific scoring requirements.' },
      { step: '02', title: 'Targeted Study Strategy', desc: 'Actionable guidance on templates, speaking fluency, and time management.' },
      { step: '03', title: 'Test Booking & Score Sharing', desc: 'Guidance on test center selection and sharing official score reports with universities.' }
    ],
    benefits: ['Targeted focus on high-yield sections', 'Clarity on PTE vs IELTS vs TOEFL equivalencies', 'Guidance on English waiver policies where applicable'],
    requiredDocs: ['Previous test score reports (if any)', 'Target institution requirement criteria'],
    faqs: [
      { question: 'What PTE score is typically needed for Master degrees in Australia?', answer: 'Most Australian Master degrees require an overall PTE score of 58 to 65 (with no communicative skill below 50–58), depending on the faculty (Education and Healthcare typically require 65–73+).' }
    ]
  },
  {
    id: 'skills-assessment',
    slug: 'skills-assessment',
    title: 'Skills Assessment Guidance',
    category: 'other',
    shortDesc: 'Procedural guidance on preparing your migration skills assessment with Australian assessing authorities.',
    description: 'A positive skills assessment from the designated assessing body (such as ACS, Engineers Australia, VETASSESS, or ANMAC) is a prerequisite for points-tested skilled migration. We guide you through documentary standards and guidelines.',
    iconName: 'CheckCircle2',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    whoIsItFor: ['Engineering, IT, Business, and Trade professionals preparing for GSM application'],
    processSteps: [
      { step: '01', title: 'Assessing Authority Identification', desc: 'Pinpoint the correct body for your nominated occupation.' },
      { step: '02', title: 'Document Audit', desc: 'Ensure employer references, payment evidence, and syllabus documents comply with strict guidelines.' },
      { step: '03', title: 'Submission Support', desc: 'Review application packet for completeness before formal lodging.' }
    ],
    benefits: ['Minimize risk of assessment delays or rejections', 'Verify salary and tax documentation compliance', 'Clarity on CDR requirements for engineers'],
    requiredDocs: ['Degree certificates and detailed syllabi', 'Official employer reference letters on company letterhead', 'Tax returns, payslips, and bank statements showing salary credit'],
    faqs: [
      { question: 'How long does a Skills Assessment take?', answer: 'Processing times vary widely by authority, ranging from 4 to 12 weeks, with select bodies offering fast-track priority services for an additional fee.' }
    ]
  },
  {
    id: 'scholarship-guidance',
    slug: 'scholarship-guidance',
    title: 'Scholarship Guidance',
    category: 'other',
    shortDesc: 'Identifying merit-based scholarships, faculty fee reductions, and international student bursaries.',
    description: 'Australian universities offer millions of dollars annually in international student scholarships. We help you explore automatic merit fee reductions (often 15% to 25% of annual tuition) as well as competitive prestigious awards.',
    iconName: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    whoIsItFor: ['High-achieving students seeking tuition fee relief in Australia'],
    processSteps: [
      { step: '01', title: 'Scholarship Audit', desc: 'Scan eligible scholarships across partner institutions.' },
      { step: '02', title: 'Application Preparation', desc: 'Assist with scholarship essays and supporting portfolio if required.' },
      { step: '03', title: 'Acceptance Confirmation', desc: 'Ensure scholarship terms are officially written into your Offer Letter.' }
    ],
    benefits: ['Reduced overall financial investment', 'Automatic consideration for qualifying GPAs', 'Early awareness of exclusive faculty grants'],
    requiredDocs: ['High academic transcripts', 'Extracurricular achievements or leadership records (if applicable)'],
    faqs: [
      { question: 'Do I need a separate application for Australian university scholarships?', answer: 'Many international merit scholarships are assessed automatically upon submission of your standard course application, while research and high-value competitive grants may require a separate submission.' }
    ]
  },
  {
    id: 'pre-departure',
    slug: 'pre-departure',
    title: 'Pre-departure Support',
    category: 'other',
    shortDesc: 'Complete preparation checklist covering flights, accommodation, banking, and packing for Australia.',
    description: 'Ensure a smooth transition before boarding your flight. We provide a structured pre-departure checklist covering Australian customs regulations, accommodation booking, airport transfers, banking, and emergency protocols.',
    iconName: 'PlaneTakeoff',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    whoIsItFor: ['Students with granted visas preparing for travel to Australia'],
    processSteps: [
      { step: '01', title: 'Travel & Accommodation Planning', desc: 'Coordinate dates with university orientation week and secure student housing.' },
      { step: '02', title: 'Customs & Quarantine Briefing', desc: 'Learn what food, medications, and items can and cannot be brought into Australia.' },
      { step: '03', title: 'Pre-departure Checklist Handover', desc: 'Review all physical and digital copies required at immigration.' }
    ],
    benefits: ['Zero stress at airport immigration', 'Pre-arranged arrival accommodation', 'Full compliance with strict Australian biosecurity laws'],
    requiredDocs: ['Passport & Visa Grant Notice', 'CoE & Institution Offer Letter', 'OSHC policy card and accommodation confirmation'],
    faqs: [
      { question: 'What can I not bring into Australia?', answer: 'Australia has strict biosecurity laws. Fresh fruit, meat, dairy, seeds, plants, and certain herbal medicines are strictly controlled and must be declared on your Incoming Passenger Card.' }
    ]
  },
  {
    id: 'post-arrival',
    slug: 'post-arrival',
    title: 'Post-arrival Support',
    category: 'other',
    shortDesc: 'On-the-ground support in Queensland and across Australia to help you settle in smoothly.',
    description: 'Arriving in a new country can feel overwhelming. Our Milton, Brisbane office and support network are ready to assist you with Tax File Number (TFN) applications, student public transit concessions, mobile activation, and local community networking.',
    iconName: 'MapPin',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
    whoIsItFor: ['New arrivals in Queensland and Australian study hubs'],
    processSteps: [
      { step: '01', title: 'Essentials Setup', desc: 'Apply for Australian TFN, Superannuation account, and transit travel card.' },
      { step: '02', title: 'Campus Orientation', desc: 'Navigate student IDs, timetable registration, and academic advisory.' },
      { step: '03', title: 'Community Connection', desc: 'Connect with fellow international students and local student organizations.' }
    ],
    benefits: ['Fast local setup within the first 72 hours', 'Avoid common administrative delays', 'Trusted local contact in Brisbane'],
    requiredDocs: ['Australian residential address', 'Passport and Australian phone number'],
    faqs: [
      { question: 'What is a Tax File Number (TFN) and why do I need it?', answer: 'A TFN is your unique identification number issued by the Australian Taxation Office (ATO). You need it before starting any paid work in Australia to ensure you are taxed at the correct resident rate.' }
    ]
  }
];
