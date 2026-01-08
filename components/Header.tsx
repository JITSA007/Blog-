
import React from 'react';
import type { User, Page } from '../types';
import { PageType } from '../types';
import { VerifiedIcon } from './Icons';

interface HeaderProps {
  user: User | null;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ user, currentPage, setCurrentPage }) => {
  const navItemClasses = (page: Page) =>
    `cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      currentPage === page ? 'bg-slate-700 text-earthy-green' : 'text-light-slate hover:bg-slate-700 hover:text-white'
    }`;

  return (
    <header className="bg-deep-blue/80 backdrop-blur-sm sticky top-0 z-50 shadow-md shadow-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">
              Jitendra's <span className="text-earthy-green">Digital Hub</span>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-4">
              <a onClick={() => setCurrentPage(PageType.Home)} className={navItemClasses(PageType.Home)}>
                Home
              </a>
              <a onClick={() => setCurrentPage(PageType.Blog)} className={navItemClasses(PageType.Blog)}>
                Knowledge Hub
              </a>
            </nav>
            {user && (
              <div className="flex items-center space-x-3 bg-slate-700 pl-2 pr-4 py-1.5 rounded-full">
                {user.pictureUrl && (
                  <img src={user.pictureUrl} alt={user.name} className="w-7 h-7 rounded-full object-cover" />
                )}
                <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-white">{user.name}</span>
                    {user.isVerified && <VerifiedIcon className="w-5 h-5 text-earthy-green" />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
