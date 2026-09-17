import React, { useState, useMemo } from 'react';
import { Search, Filter, Clock, MapPin, GraduationCap, ArrowRight, RotateCcw, Building2, CheckCircle2 } from 'lucide-react';
import { COURSES } from '../data/courses';
import { Course } from '../types';

interface CoursesViewProps {
  onSelectCourse: (slug: string) => void;
  onOpenConsultation: () => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  onSelectCourse,
  onOpenConsultation
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [selectedDegreeLevel, setSelectedDegreeLevel] = useState('All');
  const [selectedState, setSelectedState] = useState('All');
  const [selectedStudyMode, setSelectedStudyMode] = useState('All');

  const disciplines = [
    'All',
    'Information Technology',
    'Engineering',
    'Accounting & Finance',
    'Healthcare & Nursing',
    'Business & Management',
    'Hospitality & Tourism'
  ];

  const degreeLevels = ['All', 'Masters', 'Bachelors', 'Diploma'];
  const states = ['All', 'QLD', 'NSW', 'VIC', 'SA', 'WA', 'TAS'];
  const studyModes = ['All', 'On Campus', 'Blended'];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesSearch =
        searchTerm === '' ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.discipline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.university.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDiscipline =
        selectedDiscipline === 'All' || course.discipline === selectedDiscipline;

      const matchesLevel =
        selectedDegreeLevel === 'All' || course.degreeLevel === selectedDegreeLevel;

      const matchesState = selectedState === 'All' || course.state === selectedState;

      const matchesStudyMode =
        selectedStudyMode === 'All' || course.studyMode === selectedStudyMode;

      return (
        matchesSearch &&
        matchesDiscipline &&
        matchesLevel &&
        matchesState &&
        matchesStudyMode
      );
    });
  }, [searchTerm, selectedDiscipline, selectedDegreeLevel, selectedState, selectedStudyMode]);

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedDiscipline !== 'All' ||
    selectedDegreeLevel !== 'All' ||
    selectedState !== 'All' ||
    selectedStudyMode !== 'All';

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedDiscipline('All');
    setSelectedDegreeLevel('All');
    setSelectedState('All');
    setSelectedStudyMode('All');
  };

  return (
    <div id="course-explorer-page" className="bg-slate-50/50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            CRICOS REGISTERED COURSES
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0a1e3f] tracking-tight mt-3">
            Discover Study Options in Australia
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Explore accredited Australian Master&apos;s and Bachelor&apos;s programs across IT, Engineering, Accounting, Healthcare, and Business.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200/80 mb-10 space-y-4">
          {/* Main Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="course-search-input"
              type="text"
              placeholder="Search courses, universities or study areas (e.g. IT, Engineering, Accounting)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm sm:text-base focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#0f2b5c] transition-all"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {/* Discipline */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Field of Study</label>
              <select
                id="filter-discipline"
                value={selectedDiscipline}
                onChange={(e) => setSelectedDiscipline(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-medium"
              >
                {disciplines.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            {/* Degree Level */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Degree Level</label>
              <select
                id="filter-degree-level"
                value={selectedDegreeLevel}
                onChange={(e) => setSelectedDegreeLevel(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-medium"
              >
                {degreeLevels.map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

            {/* Location / State */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Location / State</label>
              <select
                id="filter-state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-medium"
              >
                {states.map((st) => (
                  <option key={st} value={st}>
                    {st === 'All' ? 'All Australian States' : st}
                  </option>
                ))}
              </select>
            </div>

            {/* Study Mode */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Study Mode</label>
              <select
                id="filter-study-mode"
                value={selectedStudyMode}
                onChange={(e) => setSelectedStudyMode(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-xs font-medium"
              >
                {studyModes.map((sm) => (
                  <option key={sm} value={sm}>{sm}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Counter & Reset Action */}
          <div className="flex items-center justify-between pt-2 text-xs text-slate-500 border-t border-slate-100">
            <span className="font-semibold text-slate-700">
              Showing <span className="text-red-600 font-bold">{filteredCourses.length}</span> course{filteredCourses.length === 1 ? '' : 's'}
            </span>

            {hasActiveFilters && (
              <button
                id="reset-course-filters-btn"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-bold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4 max-w-lg mx-auto">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No matching programs found</h3>
            <p className="text-xs text-slate-600">
              Try modifying your search criteria or resetting filters to see all available programs.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl font-bold text-xs bg-red-600 text-white"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course: Course) => (
              <div
                key={course.id}
                id={`catalog-course-${course.slug}`}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-[#0f2b5c]/90 text-white font-bold text-xs backdrop-blur-xs">
                    {course.degreeLevel}
                  </div>
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-[11px]">
                    CRICOS
                  </div>
                </div>

                {/* Course Information */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-red-500" />
                        {course.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
                      {course.title}
                    </h3>

                    <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{course.university}</span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {course.overview}
                    </p>
                  </div>

                  {/* Fee & Action */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-baseline justify-between text-xs">
                      <span className="text-slate-500">Est. Annual Fee:</span>
                      <span className="font-bold text-slate-800">{course.feeEstimate}</span>
                    </div>

                    <button
                      id={`view-course-details-${course.slug}`}
                      onClick={() => onSelectCourse(course.slug)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-white bg-[#0f2b5c] group-hover:bg-red-600 transition-colors shadow-xs"
                    >
                      <span>View Course Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
