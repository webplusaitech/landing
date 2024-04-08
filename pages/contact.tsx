import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Banner';
import LogoSection from '@sections/Home/LogoSection';
import ContactUsSection from '@sections/Contact/ContactUsSection';

const ContactPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <TopBanner title="Contact Us" name="Contact" />
        <div className="md:py-20">
          <ContactUsSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default ContactPage;
