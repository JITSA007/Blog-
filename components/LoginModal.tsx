
import React from 'react';
import { ModalShell } from './ModalShell';
import { GoogleIcon } from './Icons';

interface LoginModalProps {
  onClose: () => void;
  onGoogleLogin: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onClose, onGoogleLogin }) => {
  return (
    <ModalShell title="Join the Inner Circle" onClose={onClose}>
        <div className="text-center text-slate mb-8">
            <p>Sign up to unlock exclusive content and get a <span className="text-earthy-green font-semibold">Verified Scholar</span> badge.</p>
            <p className="text-xs mt-2">One-click signup with your Google account.</p>
        </div>
      
        <button
          type="button"
          onClick={onGoogleLogin}
          className="w-full bg-white text-gray-700 font-semibold py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-100 flex items-center justify-center space-x-3 transition-all transform hover:scale-105"
        >
          <GoogleIcon className="w-6 h-6"/>
          <span>Sign up with Google</span>
        </button>
      
    </ModalShell>
  );
};
