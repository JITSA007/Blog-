
import React, { useState } from 'react';
import { ModalShell } from './ModalShell';

interface AdminLoginModalProps {
  onClose: () => void;
  onLogin: (password: string) => void;
  error?: string | null;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ onClose, onLogin, error }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <ModalShell title="Professor Access" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="password"  className="block text-sm font-medium text-light-slate">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-earthy-green focus:border-earthy-green"
          />
        </div>
        {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-md text-center text-sm">
                <p>{error}</p>
            </div>
        )}
        <button
          type="submit"
          className="w-full bg-earthy-green text-deep-blue font-bold py-3 px-4 rounded-lg hover:bg-opacity-80 transition-transform transform hover:scale-105"
        >
          Login
        </button>
      </form>
    </ModalShell>
  );
};
