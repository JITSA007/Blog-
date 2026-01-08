
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { CheckCircleIcon } from './Icons';

interface AboutCardProps {
    openContactModal: () => void;
}

export const AboutCard: React.FC<AboutCardProps> = ({ openContactModal }) => {
  return (
    <section className="bg-slate-800 rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center md:col-span-1">
                <img src="https://picsum.photos/seed/jitendra/200/200" alt="Jitendra Prajapat" className="w-40 h-40 rounded-full border-4 border-earthy-green object-cover mb-4" />
                <h2 className="text-3xl font-bold text-white">{PERSONAL_INFO.name}</h2>
                <p className="text-earthy-green mt-1 text-md">{PERSONAL_INFO.role}</p>
            </div>
            <div className="md:col-span-2">
                 <p className="text-light-slate text-lg italic mb-4">"{PERSONAL_INFO.summary.intro}"</p>
                 <div className="space-y-2 text-slate text-md">
                     <p>{PERSONAL_INFO.summary.byDay}</p>
                     <p>{PERSONAL_INFO.summary.byNight}</p>
                     <p>{PERSONAL_INFO.summary.inBetween}</p>
                 </div>
            </div>
        </div>
      <div className="mt-8 border-t border-slate-700 pt-8">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">What I bring to the table:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PERSONAL_INFO.strengths.map((strength, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-earthy-green flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white">{strength.title}</h4>
                <p className="text-slate text-sm">{strength.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button 
            onClick={openContactModal}
            className="bg-earthy-green text-deep-blue font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105 duration-300 shadow-lg">
            Contact Me for Collaborations & Speaking
          </button>
        </div>
      </div>
    </section>
  );
};
