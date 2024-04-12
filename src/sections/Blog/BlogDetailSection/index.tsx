import React, { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Input, TextArea } from '@components/Common';
import Sidebar from '@sections/Blog/Sidebar';

import { blogs } from '@constants/blogs';

const BlogDetailSection = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = useMemo(() => {
    return blogs.find((item) => item.id.toString() === id);
  }, [id]);

  return blog && (
    <section className="blog-detail-section py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 flex flex-col gap-10">
          <img src={blog.image} className="w-full" />
          <h1 className="text-7 md:text-10 font-extrabold text-primary-dark">
            { blog.title }
          </h1>
          { blog.content }
          {/* <div>
            <div className="section-title section-title-sm">
              <h3 className="text-primary-dark font-bold text-7 leading-[1.2]">3 Comments</h3>
            </div>
            <div className="flex gap-4 items-start mb-4">
              <img src="/assets/images/user.jpg" className="w-11" />
              <div className="flex flex-col gap-3">
                <h6 className="font-bold text-5 text-primary">
                  <Link href="#">John doe</Link>
                  <small className="text-primary-dark italic ml-2">01 Jan 2045</small>
                </h6>
                <p>
                  Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                  accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod
                </p>
                <div className="bg-primary-light p-2 w-fit font-bold text-primary-dark cursor-pointer">
                  Reply
                </div>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <img src="/assets/images/user.jpg" className="w-11" />
              <div className="flex flex-col gap-3">
                <h6 className="font-bold text-5 text-primary">
                  <Link href="#">John doe</Link>
                  <small className="text-primary-dark italic ml-2">01 Jan 2045</small>
                </h6>
                <p>
                  Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                  accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod
                </p>
                <div className="bg-primary-light p-2 w-fit font-bold text-primary-dark cursor-pointer">
                  Reply
                </div>
                <div className="flex gap-4 items-start mt-4">
                  <img src="/assets/images/user.jpg" className="w-11" />
                  <div className="flex flex-col gap-3">
                    <h6 className="font-bold text-5 text-primary">
                      <Link href="#">John doe</Link>
                      <small className="text-primary-dark italic ml-2">01 Jan 2045</small>
                    </h6>
                    <p>
                      Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                      labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod
                    </p>
                    <div className="bg-primary-light p-2 w-fit font-bold text-primary-dark cursor-pointer">
                      Reply
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="p-6 sm:p-12 bg-primary-light">
            <div className="section-title section-title-sm">
              <h3 className="text-primary-dark font-bold text-7 leading-[1.2]">Leave A Comment</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
              </div>
              <Input placeholder="Subject" />
              <TextArea placeholder="Message" />
              <Button className="font-bold">Leave Your Comment</Button>
            </div>
          </div> */}
        </div>
        <Sidebar />
      </div>
    </section>
  );
};

export default BlogDetailSection;
