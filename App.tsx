
import React from 'react';
import { COURSES } from './constants';
import CourseCard from './components/CourseCard';
import Checkpoint from './components/Checkpoint';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Header Section */}
      <header className="py-16 px-4 bg-gradient-to-b from-[#6a041a] to-[#ab022f] text-white text-center shadow-lg relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
          </svg>
        </div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Roadmap Redes
          </h1>
          <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-bold uppercase tracking-widest">
            Ciclo 2 • Trayectoria de Aprendizaje
          </div>
          <p className="mt-6 text-white/80 max-w-xl mx-auto font-medium text-lg px-4 leading-snug">
            Domina los fundamentos de la ciberseguridad, programación y hardware para convertirte en un experto en infraestructuras.
          </p>
        </div>
      </header>

      {/* Roadmap Content */}
      <main className="max-w-4xl mx-auto px-6 mt-12">
        <div className="flex flex-col items-center">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
          <Checkpoint />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-slate-200">
        <p className="text-slate-400 text-sm font-medium">
          Diseñado para el éxito del estudiante de Redes &copy; {new Date().getFullYear()}
        </p>
        <div className="flex justify-center gap-4 mt-4">
           <div className="w-1.5 h-1.5 rounded-full bg-[#6a041a]" />
           <div className="w-1.5 h-1.5 rounded-full bg-[#9a0526]" />
           <div className="w-1.5 h-1.5 rounded-full bg-[#ab022f]" />
        </div>
      </footer>
    </div>
  );
};

export default App;
