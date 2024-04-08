import React from 'react';

import { FullLayout, Meta } from '@layouts';
import TopBanner from '@components/Banner';
import LogoSection from '@sections/Home/LogoSection';
import BlogDetailSection from '@sections/Blog/BlogDetailSection';

const BlogDetailPage = () => {
  return (
    <FullLayout meta={<Meta />}>
      <div className="w-full">
        <TopBanner title="Blog Detail" name="Blog Detail" />
        <div className="md:py-20">
          <BlogDetailSection />
          <LogoSection />
        </div>
      </div>
    </FullLayout>
  );
};

export default BlogDetailPage;
