
import React from 'react';
import { COLORS } from '../constants';
import { CheckSquare } from './Icons';

const Checkpoint: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12 mb-20 flex flex-col items-center">
      <div className="absolute -top-12 bottom-0 left-1/2 w-0.5 bg-[#ab022f] -z-10 -translate-x-1/2" />
      
      <div 
        className="w-12 h-12 rounded-full border-4 border-[#ab022f] bg-white flex items-center justify-center mb-6 z-10 shadow-lg"
      >
        <div className="text-[#ab022f]"><CheckSquare /></div>
      </div>

      <div 
        style={{ backgroundColor: COLORS.checkpoint }}
        className="w-full text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden group"
      >
        {/* Subtle Decorative Circle */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white/80">Meta Alcanzada</span>
          <h2 className="text-3xl font-black mb-6 tracking-tight">Checkpoint del Ciclo 2</h2>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm max-w-md">
            <p className="text-lg leading-relaxed italic">
              “Configura una red LAN básica en Cisco Packet Tracer e implementa un script en Python que escanee dispositivos en la red local.”
            </p>
          </div>
          
          <div className="mt-8 flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-2 h-2 rounded-full bg-white opacity-40 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkpoint;
