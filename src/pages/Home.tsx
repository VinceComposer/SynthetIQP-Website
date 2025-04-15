import React from 'react';
import Hero from '../components/Hero';
import HowWeHelp from '../components/HowWeHelp';
import HowItWorks from '../components/HowItWorks';
import Problem from '../components/Problem';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import ContactOptions from '../components/ContactOptions';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <HowWeHelp />
        <HowItWorks />
        <Problem />
        <CaseStudies />
        <Testimonials />
        <ContactOptions />
      </main>
    </div>
  );
}