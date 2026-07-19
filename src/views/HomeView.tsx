/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageId } from '../types';
import HeroSlider from '../components/HeroSlider';

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
  onProjectSelect: (id: string) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  
  const handleLearnMore = () => {
    setCurrentPage('work');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookConsultation = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="home-view-container" className="animate-fadeIn">
      {/* Immersive Hero */}
      <HeroSlider onLearnMoreClick={handleLearnMore} onContactClick={handleBookConsultation} />
    </div>
  );
}

