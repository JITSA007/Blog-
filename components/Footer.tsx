
import React from 'react';

interface FooterProps {
    openAdminLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openAdminLogin }) => {
  return (
    <footer className="bg-deep-blue border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-slate">
        <p>&copy; {new Date().getFullYear()} Jitendra Prajapat. All Rights Reserved.</p>
        <button onClick={openAdminLogin} className="text-xs text-dark-slate hover:text-earthy-green mt-2 transition-colors">
          Professor Login
        </button>
      </div>
    </footer>
  );
};
