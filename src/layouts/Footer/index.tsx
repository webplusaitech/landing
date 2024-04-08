import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faLocation } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Button, Input } from '@components/Common';
import {
  ArrowRightIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneIcon,
} from '@components/Common/icons';
import { TwitterIcon } from '@components/Common/icons/Twitter';

export const Footer = () => {
  return (
    <section className="footer">
      <div className="bg-primary-dark">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-12">
            <div className="pt-12 mb-12 px-6">
              <div className="section-title section-title-sm">
                <h3 className="text-white font-bold text-7 leading-[1.2]">Get In Touch</h3>
              </div>
              <div className="flex flex-col gap-3 text-white">
                <div className="flex gap-2 items-center">
                  <LocationIcon className="text-primary" />
                  <p className="whitespace-nowrap">
                    Moyzesova 2058/8, Čadca,
                    <br />
                    02201 Slovakia
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <EmailIcon className="text-primary" />
                  <p className="whitespace-nowrap">info@webplusai.net</p>
                </div>
                <div className="flex gap-2 items-center">
                  <PhoneIcon className="text-primary" />
                  <p className="whitespace-nowrap">+421909253018</p>
                </div>
              </div>
              {/* <div className="flex gap-2 mt-4">
                <div className="w-9 h-9 flex-center bg-primary cursor-pointer rounded-sm">
                  <TwitterIcon className="text-white" />
                </div>
                <div className="w-9 h-9 flex-center bg-primary cursor-pointer rounded-sm">
                  <FacebookIcon className="text-white" />
                </div>
                <div className="w-9 h-9 flex-center bg-primary cursor-pointer rounded-sm">
                  <InstagramIcon className="text-white" />
                </div>
                <div className="w-9 h-9 flex-center bg-primary cursor-pointer rounded-sm">
                  <LinkedinIcon className="text-white" />
                </div>
              </div> */}
            </div>
            <div className="pt-12 mb-12 px-6">
              <div className="section-title section-title-sm">
                <h3 className="text-white font-bold text-7 leading-[1.2]">Quick Links</h3>
              </div>
              <div className="flex flex-col gap-3 text-white">
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>About Us</span>
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>Our Services</span>
                </Link>
                {/* <Link
                  href="/team"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>Meet The Team</span>
                </Link>
                <Link
                  href="/blogs/blogs"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>Latest Blog</span>
                </Link> */}
                <Link
                  href="/contact"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
            {/* <div className="pt-12 mb-12 px-6">
              <div className="section-title section-title-sm">
                <h3 className="text-white font-bold text-7 leading-[1.2]">Popular Links</h3>
              </div>
              <div className="flex flex-col gap-3 text-white">
                <Link
                  href="/"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>Home</span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>About Us</span>
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>Our Services</span>
                </Link>
                <Link
                  href="/team"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>Meet The Team</span>
                </Link>
                <Link
                  href="/blogs/blogs"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>Latest Blog</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-1 hover:pl-2 transition-all duration-300 ease-in-out"
                >
                  <ArrowRightIcon className="text-primary" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="bg-primary p-6 xl:px-10 flex flex-col items-center justify-center gap-6">
            <Link href="/" className={classnames('flex items-center gap-2 text-white')}>
              <FontAwesomeIcon icon={faUserTie} className="w-8" />
              <h1 className="text-10 font-extrabold">Newsletter</h1>
            </Link>
            <p className="text-white text-center">
              Stay ahead of the curve with our newsletter, delivering the latest industry insights,
              updates, and exclusive offers directly to your inbox.
            </p>
            <div className="flex items-center">
              <Input placeholder="Your Email" />
              <Button className="bg-primary-dark hover:bg-primary-dark px-4 hover:!text-white">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-700"></div>
    </section>
  );
};
