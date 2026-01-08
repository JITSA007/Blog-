
import React from 'react';
import { EXPERIENCE_TIMELINE } from '../constants';
import { BriefcaseIcon } from './Icons';

export const Timeline: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Professional Journey</h2>
      <div className="relative border-l-2 border-slate-700 ml-4">
        {EXPERIENCE_TIMELINE.map((exp, index) => (
          <div key={index} className="mb-8 ml-8">
            <div className="absolute -left-5 -top-1.5 flex items-center justify-center w-10 h-10 bg-earthy-green rounded-full ring-8 ring-deep-blue">
              <BriefcaseIcon className="w-5 h-5 text-deep-blue" />
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                <time className="text-sm font-normal leading-none text-slate">{exp.period}</time>
                <h3 className="text-xl font-semibold text-white mt-1">{exp.role} at <span className="text-earthy-green">{exp.company}</span></h3>
                <p className="mt-2 text-base font-normal text-light-slate">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
