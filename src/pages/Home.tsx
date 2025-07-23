import React from 'react';
import Hero from '../components/Hero';
import HowWeHelp from '../components/HowWeHelp';
import HowItWorks from '../components/HowItWorks';
import Problem from '../components/Problem';
import CaseStudies from '../components/CaseStudies';
import HomeTestimonials from '../components/HomeTestimonials';
import ContactOptions from '../components/ContactOptions';
import HomeCta from '../components/HomeCta'; // Import the new HomeCta component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <HowWeHelp />
        <HowItWorks />
        <Problem />
        <CaseStudies />
        <HomeTestimonials />
        <HomeCta /> {/* Use the new HomeCta component */}
        <ContactOptions />
      </main>
    </div>
  );
}