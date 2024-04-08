import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Banner';
import LogoSection from '@sections/Home/LogoSection';
import TestimonialSection from '@sections/Home/TestimonialSection';

const TestimonialPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <TopBanner title="Testimonial" name="Testimonial" />
        <div className="md:py-20">
          <TestimonialSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default TestimonialPage;
