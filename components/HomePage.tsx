
import React from 'react';
import { AboutCard } from './AboutCard';
import { Timeline } from './Timeline';

interface HomePageProps {
    openContactModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ openContactModal }) => {
  return (
    <div className="space-y-12">
      <AboutCard openContactModal={openContactModal} />
      <Timeline />
    </div>
  );
};
