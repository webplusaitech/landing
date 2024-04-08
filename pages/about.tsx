import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Banner';
import AboutUsSection from '@sections/Home/AboutUsSection';
import TeamSection from '@sections/Home/TeamSection';
import LogoSection from '@sections/Home/LogoSection';

const AboutPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <TopBanner title="About Us" name="About" />
        <div className="md:py-20">
          <AboutUsSection />
          <TeamSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default AboutPage;
