
import React, { useState } from 'react';
import { ModalShell } from './ModalShell';

interface AdditionalInfoModalProps {
  onClose: () => void;
  onSignup: (details: { university: string, fieldOfStudy: string }) => void;
}

export const AdditionalInfoModal: React.FC<AdditionalInfoModalProps> = ({ onClose, onSignup }) => {
  const [university, setUniversity] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (university && fieldOfStudy) {
      onSignup({ university, fieldOfStudy });
    }
  };

  return (
    <ModalShell title="Complete Your Profile" onClose={onClose}>
        <div className="text-center text-slate mb-6">
            <p>Just one more step! Please provide your academic details to become a <span className="text-earthy-green font-semibold">Verified Scholar</span>.</p>
        </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="university" className="block text-sm font-medium text-light-slate">
            University / Institution
          </label>
          <input
            type="text"
            id="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            required
            placeholder="e.g., Jaipur National University"
            className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-earthy-green focus:border-earthy-green placeholder-slate"
          />
        </div>
        <div>
          <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-light-slate">
            Field of Study
          </label>
          <input
            type="text"
            id="fieldOfStudy"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
            required
            placeholder="e.g., Computer Science, AI/ML"
            className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-earthy-green focus:border-earthy-green placeholder-slate"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-earthy-green text-deep-blue font-bold py-3 px-4 rounded-lg hover:bg-opacity-80 transition-transform transform hover:scale-105"
        >
          Complete Signup
        </button>
      </form>
    </ModalShell>
  );
};
