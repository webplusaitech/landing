import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Banner';
import LogoSection from '@sections/Home/LogoSection';
import PricingPlansSection from '@sections/Home/PricingPlansSection';
import ContactSection from '@sections/Home/ContactSection';

const PricePage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <TopBanner title="Prices" name="Prices" />
        <div className="md:py-20">
          <PricingPlansSection />
          <ContactSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default PricePage;
