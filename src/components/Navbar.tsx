import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Award,
  Compass,
  Globe,
  FileCheck,
  Plane,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { Logo } from './Logo';

export interface NavActionProps {
  currentView?: string;
  activeView?: string;
  onNavigate: (view: string, subParam?: string) => void;
  onOpenSearch: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavActionProps> = ({
  currentView: propView,
  activeView,
  onNavigate,
  onOpenSearch,
  onOpenConsultation
}) => {
  const currentView = activeView || propView || 'home';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownItemClick = (view: string, subParam?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(view, subParam);
  };

  return (
    <header
      id="main-site-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
        isScrolled ? 'py-2.5 shadow-md border-slate-200' : 'py-4 border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Logo
              size={isScrolled ? 'sm' : 'md'}
              onClick={() => handleDropdownItemClick('home')}
            />
          </div>

          {/* Desktop Navigation Links with Working Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-semibold text-slate-700">
            {/* HOME */}
            <button
              id="nav-home-btn"
              onClick={() => handleDropdownItemClick('home')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-red-600 ${
                currentView === 'home' ? 'text-red-600 bg-red-50/60 font-bold' : ''
              }`}
            >
              HOME
            </button>

            {/* ABOUT US DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-about-trigger"
                onClick={() => handleDropdownItemClick('about')}
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-red-600 ${
                  currentView === 'about' ? 'text-red-600 bg-red-50/60 font-bold' : ''
                }`}
              >
                <span>ABOUT US</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 text-sm">
                    <button
                      id="dropdown-about-edutas"
                      onClick={() => handleDropdownItemClick('about')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0f2b5c] flex items-center justify-center shrink-0 mt-0.5">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">About Edutas</div>
                        <div className="text-xs text-slate-500 font-normal">Our Brisbane origins, vision &amp; values</div>
                      </div>
                    </button>

                    <button
                      id="dropdown-why-choose-us"
                      onClick={() => handleDropdownItemClick('about', 'why-choose-us')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Why Choose Us</div>
                        <div className="text-xs text-slate-500 font-normal">10+ years experience &amp; student trust</div>
                      </div>
                    </button>

                    <button
                      id="dropdown-our-approach"
                      onClick={() => handleDropdownItemClick('about', 'process')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Our 5-Step Process</div>
                        <div className="text-xs text-slate-500 font-normal">From consultation to graduation</div>
                      </div>
                    </button>

                    <button
                      id="dropdown-success-stories"
                      onClick={() => handleDropdownItemClick('about', 'stats')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Verified Impact</div>
                        <div className="text-xs text-slate-500 font-normal">8,000+ students &amp; 858+ guidance sessions</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-services-trigger"
                onClick={() => handleDropdownItemClick('services')}
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-red-600 ${
                  currentView === 'services' ? 'text-red-600 bg-red-50/60 font-bold' : ''
                }`}
              >
                <span>SERVICES</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 text-sm">
                    <button
                      id="dropdown-service-pr-assessment"
                      onClick={() => handleDropdownItemClick('service-detail', 'pr-assessment')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">PR Assessment</div>
                        <div className="text-xs text-slate-500 font-normal">Skilled migration points &amp; eligibility audit</div>
                      </div>
                    </button>

                    <button
                      id="dropdown-service-career-guidance"
                      onClick={() => handleDropdownItemClick('service-detail', 'career-guidance')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Career Guidance</div>
                        <div className="text-xs text-slate-500 font-normal">Course selection aligned to Australian job market</div>
                      </div>
                    </button>

                    <button
                      id="dropdown-service-international-students"
                      onClick={() => handleDropdownItemClick('service-detail', 'international-students')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">International Student Services</div>
                        <div className="text-xs text-slate-500 font-normal">Onshore arrival, OSHC, banking &amp; study support</div>
                      </div>
                    </button>

                    <button
                      id="dropdown-service-admissions"
                      onClick={() => handleDropdownItemClick('service-detail', 'admissions')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Admissions &amp; Selection</div>
                        <div className="text-xs text-slate-500 font-normal">University offer letters &amp; CoE management</div>
                      </div>
                    </button>

                    <div className="mt-1 pt-2 border-t border-slate-100 px-2">
                      <button
                        onClick={() => handleDropdownItemClick('services')}
                        className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center justify-between w-full py-1"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* OTHER SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('other-services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-other-services-trigger"
                onClick={() => handleDropdownItemClick('services')}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-red-600"
              >
                <span>OTHER SERVICES</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'other-services' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'other-services' && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 text-sm">
                    <button
                      onClick={() => handleDropdownItemClick('service-detail', 'english-pte')}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2.5"
                    >
                      <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-slate-800 font-medium">English &amp; PTE Guidance</span>
                    </button>
                    <button
                      onClick={() => handleDropdownItemClick('service-detail', 'skills-assessment')}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2.5"
                    >
                      <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-slate-800 font-medium">Skills Assessment</span>
                    </button>
                    <button
                      onClick={() => handleDropdownItemClick('service-detail', 'scholarship-guidance')}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2.5"
                    >
                      <Award className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-slate-800 font-medium">Scholarship Guidance</span>
                    </button>
                    <button
                      onClick={() => handleDropdownItemClick('service-detail', 'pre-departure')}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2.5"
                    >
                      <Plane className="w-4 h-4 text-purple-600 shrink-0" />
                      <span className="text-slate-800 font-medium">Pre-departure Support</span>
                    </button>
                    <button
                      onClick={() => handleDropdownItemClick('service-detail', 'post-arrival')}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2.5"
                    >
                      <Globe className="w-4 h-4 text-teal-600 shrink-0" />
                      <span className="text-slate-800 font-medium">Post-arrival Support</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ADMISSIONS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('admissions')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-admissions-trigger"
                onClick={() => handleDropdownItemClick('admissions')}
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-red-600 ${
                  currentView === 'admissions' || currentView === 'courses' ? 'text-red-600 bg-red-50/60 font-bold' : ''
                }`}
              >
                <span>ADMISSIONS</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'admissions' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'admissions' && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 text-sm">
                    <button
                      id="dropdown-course-search"
                      onClick={() => handleDropdownItemClick('courses')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-semibold text-slate-900">Course Search</div>
                      <div className="text-xs text-slate-500 font-normal">IT, Engineering, Accounting &amp; more</div>
                    </button>
                    <button
                      id="dropdown-university-search"
                      onClick={() => handleDropdownItemClick('admissions', 'universities')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-semibold text-slate-900">University Search</div>
                      <div className="text-xs text-slate-500 font-normal">Australian CRICOS registered providers</div>
                    </button>
                    <button
                      id="dropdown-app-process"
                      onClick={() => handleDropdownItemClick('admissions', 'process')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-semibold text-slate-900">Application Process</div>
                      <div className="text-xs text-slate-500 font-normal">Offer letters &amp; CoE issuance guide</div>
                    </button>
                    <button
                      id="dropdown-admission-requirements"
                      onClick={() => handleDropdownItemClick('admissions', 'requirements')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-semibold text-slate-900">Admission Requirements</div>
                      <div className="text-xs text-slate-500 font-normal">Academic, English &amp; GS criteria</div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* VISA DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('visa')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-visa-trigger"
                onClick={() => handleDropdownItemClick('visa')}
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-red-600 ${
                  currentView === 'visa' ? 'text-red-600 bg-red-50/60 font-bold' : ''
                }`}
              >
                <span>VISA</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === 'visa' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'visa' && (
                <div className="absolute top-full right-0 w-72 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 text-sm">
                    <button
                      id="dropdown-visa-student"
                      onClick={() => handleDropdownItemClick('visa', 'subclass-500')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-semibold text-slate-900">Student Visa (Subclass 500)</div>
                      <div className="text-xs text-slate-500 font-normal">Primary study visa requirements &amp; rights</div>
                    </button>
                    <button
                      id="dropdown-visa-guidance"
                      onClick={() => handleDropdownItemClick('visa', 'guidance')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-semibold text-slate-900">Visa Guidance</div>
                      <div className="text-xs text-slate-500 font-normal">Step-by-step application guidance</div>
                    </button>
                    <button
                      id="dropdown-visa-documentation"
                      onClick={() => handleDropdownItemClick('visa', 'documentation')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-semibold text-slate-900">Visa Documentation</div>
                      <div className="text-xs text-slate-500 font-normal">Financial proof, OSHC &amp; GS checklist</div>
                    </button>
                    <button
                      id="dropdown-visa-process"
                      onClick={() => handleDropdownItemClick('visa', 'process')}
                      className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="font-semibold text-slate-900">Visa Process</div>
                      <div className="text-xs text-slate-500 font-normal">Biometrics, health checks &amp; tracking</div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* CONTACT LINK */}
            <button
              id="nav-contact-btn"
              onClick={() => handleDropdownItemClick('contact')}
              className={`px-3 py-2 rounded-lg transition-colors hover:text-red-600 ${
                currentView === 'contact' ? 'text-red-600 bg-red-50/60 font-bold' : ''
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Working Search Icon */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl text-slate-600 hover:text-[#0f2b5c] hover:bg-slate-100 transition-colors"
              title="Search courses, services, and admissions (Ctrl/Cmd + K)"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Apply Now / Consultation CTA */}
            <button
              id="nav-apply-now-btn"
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-md shadow-red-600/20 active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Apply Now</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto px-4 py-6 space-y-4 text-slate-800 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-2 font-medium">
            <button
              onClick={() => handleDropdownItemClick('home')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 font-bold text-[#0f2b5c]"
            >
              Home
            </button>

            {/* About submenu */}
            <div className="border-t border-slate-100 pt-2">
              <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">About Us</div>
              <button
                onClick={() => handleDropdownItemClick('about')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm"
              >
                About Edutas
              </button>
              <button
                onClick={() => handleDropdownItemClick('about', 'why-choose-us')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => handleDropdownItemClick('about', 'stats')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm"
              >
                Our Verified Impact
              </button>
            </div>

            {/* Services submenu */}
            <div className="border-t border-slate-100 pt-2">
              <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Primary Services</div>
              <button
                onClick={() => handleDropdownItemClick('service-detail', 'pr-assessment')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm font-medium text-red-600"
              >
                PR Assessment
              </button>
              <button
                onClick={() => handleDropdownItemClick('service-detail', 'career-guidance')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm"
              >
                Career Guidance
              </button>
              <button
                onClick={() => handleDropdownItemClick('service-detail', 'international-students')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm"
              >
                International Student Services
              </button>
              <button
                onClick={() => handleDropdownItemClick('service-detail', 'admissions')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm"
              >
                Admissions &amp; University Selection
              </button>
            </div>

            {/* Courses & Admissions */}
            <div className="border-t border-slate-100 pt-2">
              <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">Courses &amp; Admissions</div>
              <button
                onClick={() => handleDropdownItemClick('courses')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm font-semibold text-[#0f2b5c]"
              >
                Discover Study Options (IT, Eng, Accounting)
              </button>
              <button
                onClick={() => handleDropdownItemClick('admissions')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm"
              >
                Admissions Process &amp; Requirements
              </button>
              <button
                onClick={() => handleDropdownItemClick('visa')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm"
              >
                Student Visa (Subclass 500) Guidance
              </button>
            </div>

            {/* Contact */}
            <div className="border-t border-slate-100 pt-2">
              <button
                onClick={() => handleDropdownItemClick('contact')}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm font-semibold text-slate-900"
              >
                Contact Us (Milton, Brisbane)
              </button>
            </div>
          </div>

          {/* Quick Apply Button on Mobile */}
          <div className="pt-3 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-xl font-bold text-center text-white bg-gradient-to-r from-red-600 to-red-700 shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Apply Now / Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
