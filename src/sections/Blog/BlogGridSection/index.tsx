import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Button } from '@components/Common';
import Sidebar from '@sections/Blog/Sidebar';

export const blogs = [
  {
    id: 1,
    category: 'Web Design',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'How to build a website',
    content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    image: '/assets/images/blog-1.jpg',
  },
  {
    id: 2,
    category: 'Web Design',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'How to build a website',
    content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    image: '/assets/images/blog-2.jpg',
  },
  {
    id: 3,
    category: 'Web Design',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'How to build a website',
    content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    image: '/assets/images/blog-3.jpg',
  },
  {
    id: 4,
    category: 'Web Design',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'How to build a website',
    content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    image: '/assets/images/blog-1.jpg',
  },
  {
    id: 5,
    category: 'Web Design',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'How to build a website',
    content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    image: '/assets/images/blog-2.jpg',
  },
  {
    id: 6,
    category: 'Web Design',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'How to build a website',
    content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    image: '/assets/images/blog-3.jpg',
  },
  {
    id: 7,
    category: 'Web Design',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'How to build a website',
    content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    image: '/assets/images/blog-1.jpg',
  },
  {
    id: 8,
    category: 'Web Design',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'How to build a website',
    content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    image: '/assets/images/blog-2.jpg',
  },
  {
    id: 9,
    category: 'Web Design',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'How to build a website',
    content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    image: '/assets/images/blog-3.jpg',
  },
  {
    id: 10,
    category: 'Web Design',
    author: 'John Doe',
    date: '01 Jan, 2045',
    title: 'How to build a website',
    content: 'Dolor et eos labore stet justo sed est sed sed sed dolor stet amet',
    image: '/assets/images/blog-1.jpg',
  },
];

const BlogGridSection = () => {
  return (
    <section className="blog-grid-section py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative flex flex-col group">
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  className="group-hover:scale-125 transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="p-6 bg-primary-light flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} className="text-primary w-3" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-primary w-3" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                <h4 className="text-6 font-bold text-primary-dark">{blog.title}</h4>
                <p className="">{blog.content}</p>
                <Link
                  href={`/blogs/${blog.id}`}
                  className="flex items-center gap-2 uppercase text-primary hover:text-primary-dark font-semibold"
                >
                  Read More <FontAwesomeIcon icon={faArrowRight} className="text-primary w-3" />
                </Link>
              </div>
              <Button size="sm" className="absolute left-0 top-12">
                {blog.category}
              </Button>
            </div>
          ))}
        </div>
        <Sidebar />
      </div>
    </section>
  );
};

export default BlogGridSection;
