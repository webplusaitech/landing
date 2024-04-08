import React from 'react';
import { Button, Input } from '@components/Common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ArrowRightIcon } from '@components/Common/icons';
import { blogs } from '@sections/Blog/BlogGridSection';
import Link from 'next/link';

const categories = [
  'Web Design',
  'Web Development',
  'Web Development',
  'Keyword Research',
  'Email Marketing',
];

const tags = [
  'Design',
  'Development',
  'Marketing',
  'SEO',
  'Writing',
  'Consulting',
  'Design',
  'Development',
  'Marketing',
  'SEO',
  'Writing',
  'Consulting',
];

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex w-full">
        <Input placeholder="Keyword" className="w-full" />
        <Button className="px-6">
          <FontAwesomeIcon icon={faSearch} className="w-5 text-white" />
        </Button>
      </div>
      <div>
        <div className="section-title section-title-sm">
          <h3 className="text-primary-dark font-bold text-7 leading-[1.2]">Categories</h3>
        </div>
        <div className="flex flex-col gap-2">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-primary-light rounded-sm flex items-center px-4 py-2 gap-2 group cursor-pointer"
            >
              <ArrowRightIcon className="group-hover:text-primary" />
              <h5 className="font-bold text-primary-dark text-5 group-hover:text-primary transition-colors duration-300">
                {cat}
              </h5>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="section-title section-title-sm">
          <h3 className="text-primary-dark font-bold text-7 leading-[1.2]">Recent Post</h3>
        </div>
        <div className="flex flex-col gap-4">
          {blogs.slice(0, 6).map((blog) => (
            <div key={blog.id} className="flex bg-primary-light">
              <img src={blog.image} alt={blog.title} className="w-30" />
              <Link
                href="#"
                className="text-5 font-bold text-primary-dark flex items-center px-4 hover:text-primary transition-colors duration-300"
              >
                {blog.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <img src={blogs[0].image} alt={blogs[0].title} className="w-full" />
      </div>
      <div className="">
        <div className="section-title section-title-sm">
          <h3 className="text-primary-dark font-bold text-7 leading-[1.2]">Tag Cloud</h3>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <div
              className="bg-primary-light px-3 py-2 flex items-center text-primary-dark font-semibold"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div className="section-title section-title-sm">
          <h3 className="text-primary-dark font-bold text-7 leading-[1.2]">Plain Text</h3>
        </div>
        <div className="bg-primary-light py-6 px-10 flex flex-col items-center">
          <p className="text-center mb-4">
            Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor
            clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor
            ipsum amet diam
          </p>
          <Button size="sm">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
