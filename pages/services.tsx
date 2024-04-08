import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Banner';
import LogoSection from '@sections/Home/LogoSection';
import ServicesSection from '@sections/Home/ServicesSection';
import TestimonialSection from '@sections/Home/TestimonialSection';

const ServicesPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <TopBanner title="Services" name="Services" />
        <div className="md:py-20">
          <ServicesSection />
          <TestimonialSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default ServicesPage;
