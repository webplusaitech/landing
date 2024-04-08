import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Banner';
import LogoSection from '@sections/Home/LogoSection';
import TeamSection from '@sections/Home/TeamSection';

const TeamPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <TopBanner title="Team Members" name="Team Members" />
        <div className="md:py-20">
          <TeamSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default TeamPage;
