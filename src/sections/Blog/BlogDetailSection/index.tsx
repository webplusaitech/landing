import React from 'react';
import Link from 'next/link';

import { Button, Input, TextArea } from '@components/Common';
import Sidebar from '@sections/Blog/Sidebar';

const BlogDetailSection = () => {
  return (
    <section className="blog-detail-section py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 flex flex-col gap-10">
          <img src="/assets/images/blog-1.jpg" className="w-full" />
          <h1 className="text-7 md:text-10 font-extrabold text-primary-dark">
            Diam dolor est labore duo ipsum clita sed et lorem tempor duo
          </h1>
          <p>
            Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna
            lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna
            accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum
            sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita.
            Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.
            <br />
            <br />
            Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero
            stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
            dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet
            eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est
            dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.
            <br />
            <br />
            Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt
            at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna
            amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
            labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy
            elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet
            ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea
            eos.
            <br />
            <br />
            Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero
            stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
            dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet
            eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est
            dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.
          </p>
          <div>
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
          </div>
          <div className="p-6 sm:p-12 bg-primary-light">
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
          </div>
        </div>
        <Sidebar />
      </div>
    </section>
  );
};

export default BlogDetailSection;
