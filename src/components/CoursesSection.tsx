import React from 'react';
import { ArrowRight, Clock, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { COURSES } from '../data/courses';
import { Course } from '../types';

interface CoursesSectionProps {
  onSelectCourse: (slug: string) => void;
  onExploreAllCourses: () => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourse,
  onExploreAllCourses
}) => {
  // Focus on reference featured courses: Masters in IT, Masters in Engineering, Masters in Accounting + Data Science
  const featuredCourses = COURSES.filter((c) => c.featured).slice(0, 4);

  return (
    <section id="courses-section" className="py-16 lg:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              POPULAR AUSTRALIAN PROGRAMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3f] tracking-tight mt-3">
              Discover Study Options in Australia
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl">
              High-demand Australian Master&apos;s and Bachelor degrees offering accredited learning,
              practical internships, and graduate employment opportunities.
            </p>
          </div>

          <button
            id="explore-all-courses-top-btn"
            onClick={onExploreAllCourses}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-[#0f2b5c] bg-slate-100 hover:bg-slate-200 transition-colors self-start md:self-auto"
          >
            <span>Search All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course: Course) => (
            <div
              key={course.id}
              id={`course-card-${course.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Course Image */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0f2b5c]/90 text-white font-semibold text-[11px] backdrop-blur-xs">
                  {course.discipline}
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-[10px]">
                  CRICOS
                </div>
              </div>

              {/* Course Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
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

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.overview}
                  </p>
                </div>

                {/* Bottom metadata & CTA */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-[11px] text-slate-500 mb-2">
                    Est. Tuition: <span className="font-semibold text-slate-700">{course.feeEstimate}</span>
                  </div>

                  <button
                    id={`explore-course-btn-${course.slug}`}
                    onClick={() => onSelectCourse(course.slug)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs text-[#0f2b5c] bg-slate-50 group-hover:bg-red-600 group-hover:text-white border border-slate-200 group-hover:border-red-600 transition-all"
                  >
                    <span>Explore Course</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
