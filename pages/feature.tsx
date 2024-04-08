import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Banner';
import LogoSection from '@sections/Home/LogoSection';
import WhyChooseUsSection from '@sections/Home/WhyChooseUsSection';

const FeaturePage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <TopBanner title="Features" name="Features" />
        <div className="md:py-20">
          <WhyChooseUsSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default FeaturePage;
