import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Banner';
import LogoSection from '@sections/Home/LogoSection';
import ContactSection from '@sections/Home/ContactSection';

const QuotePage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <TopBanner title="Free Quote" name="Free Quote" />
        <div className="md:py-20">
          <ContactSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default QuotePage;
