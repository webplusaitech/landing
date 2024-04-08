import React, { useEffect, useState } from 'react';
import { useSpring, useSpringRef } from '@react-spring/web';

import { FullLayout, Meta } from '@layouts';
import HomeBanner from '@sections/Home/HomeBanner/HomeBanner';
import AboutUsSection from '@sections/Home/AboutUsSection';
import WhyChooseUsSection from '@sections/Home/WhyChooseUsSection';
import ServicesSection from '@sections/Home/ServicesSection';
import PricingPlansSection from '@sections/Home/PricingPlansSection';
import ContactSection from '@sections/Home/ContactSection';
import TestimonialSection from '@sections/Home/TestimonialSection';
import TeamSection from '@sections/Home/TeamSection';
import LatestBlogSection from '@sections/Home/LatestBlogSection';
import LogoSection from '@sections/Home/LogoSection';

const Index = () => {
  const [index] = useState(0);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const transRef = useSpringRef();

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <div className="main-home-section pb-0">
          <HomeBanner />
          <AboutUsSection />
          <WhyChooseUsSection />
          <ServicesSection />
          {/* <PricingPlansSection /> */}
          <ContactSection />
          <TestimonialSection />
          <TeamSection />
          <LatestBlogSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default Index;
