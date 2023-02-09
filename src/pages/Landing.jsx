import React from 'react';

import Hero from '../components/Hero';
import LandingLayout from '../components/layouts/Landinglayout';
import Navbar from '../components/Navbar';

export default function Landing() {
  return (
    <div>
      <Navbar />
      <LandingLayout>
        <Hero
          title='Go CashLess with PayMe Link'
          subtitle='Your Everyday Essential For Collecting Payment for Your Business'
          image='https://source.unsplash.com/collection/404339/800x600'
          ctaText='Create Your Account Now'
          ctaLink='/signup'
        />
      </LandingLayout>
    </div>
  );
}
