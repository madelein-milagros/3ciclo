
import React, { useState } from 'react';
import { Course } from '../types';
import { COLORS } from '../constants';
import { BookIcon, LinkIcon, ToolIcon, TrophyIcon, ChevronDown, ChevronUp } from './Icons';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-8 flex flex-col items-center">
      {/* Connector Line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#ab022f] -z-10 -translate-x-1/2 h-[calc(100%+2rem)] last:h-0" />

      {/* Course Circle Badge */}
      <div 
        className="w-10 h-10 rounded-full border-4 border-[#ab022f] bg-white flex items-center justify-center mb-4 z-10"
        aria-hidden="true"
      >
        <div className="w-4 h-4 rounded-full bg-[#ab022f]" />
      </div>

      {/* Main Card */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ backgroundColor: COLORS.course }}
        className="w-full text-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-between group"
      >
        <div className="text-left">
          <span className="text-xs uppercase tracking-widest opacity-80 font-semibold block mb-1">Curso {course.id}</span>
          <h3 className="text-xl font-bold tracking-tight">{course.title}</h3>
        </div>
        <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
           <ChevronDown />
        </div>
      </button>

      {/* Expandable Content */}
      {isExpanded && (
        <div 
          className="mt-3 w-full bg-white border-2 border-[#ab022f] rounded-xl p-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden"
        >
          <div className="space-y-4 text-slate-700">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-[#ab022f] shrink-0"><BookIcon /></div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-tighter">Nombre Oficial</p>
                <p className="text-lg font-bold text-slate-800">{course.officialName}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 text-[#ab022f] shrink-0"><LinkIcon /></div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-tighter">Acceso</p>
                <div className="flex flex-col gap-2 mt-1">
                  {course.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#ab022f] hover:underline font-medium transition-colors"
                    >
                      {link.name}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 text-[#ab022f] shrink-0"><ToolIcon /></div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-tighter">Descripción</p>
                <p className="text-slate-600 leading-relaxed">{course.description}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1 text-[#ab022f] shrink-0"><TrophyIcon /></div>
              <div>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-tighter">Certificación</p>
                <p className="text-slate-800 font-semibold bg-slate-100 px-3 py-1 rounded-lg inline-block">{course.certification}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
