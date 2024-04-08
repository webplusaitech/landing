import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Button } from '@components/Common';

const blogs = [
  {
    id: 1,
    category: 'Web Development',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'Get Orbital',
    content: 'Digital Payment Platform',
    image: '/assets/images/blog-1.png',
  },
  {
    id: 2,
    category: 'Web Development',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'CUBS',
    content: 'Green Energy Sustainability Platform',
    image: '/assets/images/blog-2.png',
  },
  {
    id: 3,
    category: 'Web Development',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'Dentacloud',
    content: 'Dental Practice Mediation Platform',
    image: '/assets/images/blog-3.png',
  },
];

const LatestBlogSection = () => {
  return (
    <section className="latest-blog-section py-20">
      <div className="container mx-auto">
        <div className="section-title center max-w-[600px] mx-auto">
          <h5>Our Projects</h5>
          {/* <h1>Read The Latest Articles from Our Blog Post</h1> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative flex flex-col group">
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  className="group-hover:scale-125 transition-all duration-500 ease-in-out w-full"
                />
              </div>
              <div className="p-6 bg-primary-light flex flex-col gap-4">
                <div className="flex gap-4">
                  {/* <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} className="text-primary w-3" />
                    <span>{blog.author}</span>
                  </div> */}
                  {/* <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-primary w-3" />
                    <span>{blog.date}</span>
                  </div> */}
                </div>
                <h4 className="text-6 font-bold text-primary-dark">{blog.title}</h4>
                <p className="">{blog.content}</p>
                {/* <Link
                  href="#"
                  className="flex items-center gap-2 uppercase text-primary hover:text-primary-dark font-semibold"
                >
                  Read More <FontAwesomeIcon icon={faArrowRight} className="text-primary w-3" />
                </Link> */}
              </div>
              <Button size="sm" className="absolute left-0 top-12">
                {blog.category}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;
