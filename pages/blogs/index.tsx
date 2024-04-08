import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Banner';
import LogoSection from '@sections/Home/LogoSection';
import BlogGridSection from '@sections/Blog/BlogGridSection';

const BlogsPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <TopBanner title="Blog Grid" name="Blog Grid" />
        <div className="md:py-20">
          <BlogGridSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default BlogsPage;
