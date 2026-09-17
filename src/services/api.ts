import { ConsultationFormData, ContactFormData, PRPointsCriteria } from '../types';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

export const submitConsultationRequest = async (
  formData: ConsultationFormData
): Promise<ApiResponse> => {
  // Simulate network request
  await new Promise((resolve) => setTimeout(resolve, 800));

  const errors: Record<string, string> = {};

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!formData.phone || formData.phone.trim().length < 8) {
    errors.phone = 'Please provide a valid contact number';
  }

  if (!formData.preferredDate) {
    errors.preferredDate = 'Please select a preferred date';
  }

  if (!formData.preferredTime) {
    errors.preferredTime = 'Please select a preferred time slot';
  }

  if (!formData.service) {
    errors.service = 'Please select a service';
  }

  if (!formData.consent) {
    errors.consent = 'You must agree to be contacted by Edutas';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please resolve the highlighted issues in the consultation form.',
      errors
    };
  }

  // Store in local history for session review / debugging
  try {
    const existing = JSON.parse(localStorage.getItem('edutas_consultations') || '[]');
    existing.push({
      ...formData,
      id: 'REQ-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('edutas_consultations', JSON.stringify(existing));
  } catch (e) {
    // ignore in restricted iframes
  }

  return {
    success: true,
    message: 'Thank you! Your consultation request has been received. An Edutas education & migration advisor will contact you within 24 business hours to confirm your appointment.'
  };
};

export const submitContactForm = async (
  formData: ContactFormData
): Promise<ApiResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 750));

  const errors: Record<string, string> = {};

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = 'Full name is required';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'A valid email address is required';
  }

  if (!formData.phone || formData.phone.trim().length < 8) {
    errors.phone = 'Phone number is required';
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Please provide more details regarding your enquiry (min 10 characters)';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please complete all required fields.',
      errors
    };
  }

  try {
    const existing = JSON.parse(localStorage.getItem('edutas_contact_messages') || '[]');
    existing.push({
      ...formData,
      id: 'MSG-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('edutas_contact_messages', JSON.stringify(existing));
  } catch (e) {
    // ignore
  }

  return {
    success: true,
    message: 'Message sent successfully. Our team at 339 Coronation Drive, Milton will get back to you shortly.'
  };
};

export const subscribeNewsletter = async (email: string): Promise<ApiResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    };
  }

  try {
    const existing = JSON.parse(localStorage.getItem('edutas_newsletter_subscribers') || '[]');
    if (!existing.includes(email)) {
      existing.push(email);
      localStorage.setItem('edutas_newsletter_subscribers', JSON.stringify(existing));
    }
  } catch (e) {
    // ignore
  }

  return {
    success: true,
    message: 'You have been subscribed to Australian Education & Migration Updates.'
  };
};

/**
 * Calculates General Skilled Migration (GSM) points based on official Australian criteria.
 */
export const calculatePRPoints = (criteria: PRPointsCriteria): { total: number; breakdown: { label: string; points: number }[] } => {
  const breakdown: { label: string; points: number }[] = [];
  let total = 0;

  // Age points
  let agePoints = 0;
  if (criteria.ageGroup === '18-24') agePoints = 25;
  else if (criteria.ageGroup === '25-32') agePoints = 30;
  else if (criteria.ageGroup === '33-39') agePoints = 25;
  else if (criteria.ageGroup === '40-44') agePoints = 15;
  else agePoints = 0;
  breakdown.push({ label: `Age (${criteria.ageGroup})`, points: agePoints });
  total += agePoints;

  // English
  let engPoints = 0;
  if (criteria.englishLevel === 'superior') engPoints = 20; // IELTS 8.0 / PTE 79+
  else if (criteria.englishLevel === 'proficient') engPoints = 10; // IELTS 7.0 / PTE 65+
  else engPoints = 0; // Competent (IELTS 6.0 / PTE 50+) has 0 points
  breakdown.push({ label: `English Language (${criteria.englishLevel})`, points: engPoints });
  total += engPoints;

  // Educational Qualifications
  let eduPoints = 0;
  if (criteria.educationalQualification === 'doctorate') eduPoints = 20;
  else if (criteria.educationalQualification === 'degree_or_masters') eduPoints = 15;
  else if (criteria.educationalQualification === 'diploma_or_trade') eduPoints = 10;
  breakdown.push({ label: 'Educational Qualifications', points: eduPoints });
  total += eduPoints;

  // Australian Study Requirement (at least 2 academic years CRICOS)
  const ausStudyPoints = criteria.australianStudy ? 5 : 0;
  if (ausStudyPoints > 0) {
    breakdown.push({ label: 'Australian Study Requirement (2+ years)', points: 5 });
    total += 5;
  }

  // Specialist Educational Qualification (STEM Master by research or PhD)
  if (criteria.specialistEducationalQualification) {
    breakdown.push({ label: 'Specialist STEM Qualification in Australia', points: 10 });
    total += 10;
  }

  // Study in Regional Australia
  if (criteria.studyInRegionalAustralia) {
    breakdown.push({ label: 'Regional Australian Study', points: 5 });
    total += 5;
  }

  // Community Language (NAATI CCL)
  if (criteria.communityLanguageNaati) {
    breakdown.push({ label: 'Credentialled Community Language (NAATI)', points: 5 });
    total += 5;
  }

  // Professional Year in Australia
  if (criteria.professionalYear) {
    breakdown.push({ label: 'Professional Year Program (IT/Eng/Accounting)', points: 5 });
    total += 5;
  }

  // Australian Skilled Employment
  let ausWorkPoints = 0;
  if (criteria.australianWorkExperience === '1-2') ausWorkPoints = 5;
  else if (criteria.australianWorkExperience === '3-4') ausWorkPoints = 10;
  else if (criteria.australianWorkExperience === '5-7') ausWorkPoints = 15;
  else if (criteria.australianWorkExperience === '8+') ausWorkPoints = 20;
  if (ausWorkPoints > 0) {
    breakdown.push({ label: `Australian Work Experience (${criteria.australianWorkExperience} yrs)`, points: ausWorkPoints });
    total += ausWorkPoints;
  }

  // Overseas Skilled Employment
  let osWorkPoints = 0;
  if (criteria.overseasWorkExperience === '3-4') osWorkPoints = 5;
  else if (criteria.overseasWorkExperience === '5-7') osWorkPoints = 10;
  else if (criteria.overseasWorkExperience === '8+') osWorkPoints = 15;
  if (osWorkPoints > 0) {
    breakdown.push({ label: `Overseas Work Experience (${criteria.overseasWorkExperience} yrs)`, points: osWorkPoints });
    total += osWorkPoints;
  }

  // Partner Skills
  let partnerPoints = 0;
  if (criteria.partnerSkills === 'single') partnerPoints = 10;
  else if (criteria.partnerSkills === 'skilled_partner') partnerPoints = 10;
  else if (criteria.partnerSkills === 'competent_english_partner') partnerPoints = 5;
  else if (criteria.partnerSkills === 'aus_citizen_pr_partner') partnerPoints = 10;
  if (partnerPoints > 0) {
    breakdown.push({ label: 'Partner Skills / Single Applicant', points: partnerPoints });
    total += partnerPoints;
  }

  return { total, breakdown };
};
