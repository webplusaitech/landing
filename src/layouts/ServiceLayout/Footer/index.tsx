import React from 'react';

import {
  ArrowRightUpIcon,
  FacebookIcon,
  GlobalIcon,
  LinkedinIcon,
  LocationIcon,
  MailSendLineIcon,
  PhoneIcon,
  PinterestIcon,
  YoutubeIcon,
} from '@components/Common/icons';
import { TwitterIcon } from '@components/Common/icons/Twitter';

import styles from './styles.module.css';
import { Button, Input } from '@components/Common';

export const Footer = () => {
  return (
    <section
      className="relative section-container bg-cover bg-no-repeat bg-center pt-60"
      style={{ backgroundImage: 'url(/assets/images/services/footer_home_3_bg-scaled.jpg)' }}
    >
      <div className="relative section-content text-white">
        <div className="flex flex-col lg:flex-row gap-10 pb-10">
          <div className="pr-10 w-100">
            <img className="h-10" src="/assets/images/services/logo10.webp" alt="Logo" />
            <p className="my-8">
              Fermentum odio eu feugiat pretiums nibh. Dolor sit consectetur adipiscini over the
              aenean bcom here.
            </p>
            <div className="flex gap-2">
              <div className="w-9 h-9 flex-center bg-blue-200 rounded-full text-blue-dark">
                <FacebookIcon />
              </div>
              <div className="w-9 h-9 flex-center bg-blue-200 rounded-full text-blue-dark">
                <TwitterIcon />
              </div>
              <div className="w-9 h-9 flex-center bg-blue-200 rounded-full text-blue-dark">
                <LinkedinIcon />
              </div>
              <div className="w-9 h-9 flex-center bg-blue-200 rounded-full text-blue-dark">
                <PinterestIcon />
              </div>
              <div className="w-9 h-9 flex-center bg-blue-200 rounded-full text-blue-dark">
                <YoutubeIcon />
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-white font-bold text-6">Company</h3>
              <div className="flex flex-col mt-5 gap-3">
                <div className={styles.linkItem}>About us</div>
                <div className={styles.linkItem}>Services</div>
                <div className={styles.linkItem}>FAQ</div>
                <div className={styles.linkItem}>Blog Standard</div>
                <div className={styles.linkItem}>Contact Us</div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-6">Solutions</h3>
              <div className="flex flex-col mt-5 gap-3">
                <div className={styles.linkItem}>Advanced Analytic</div>
                <div className={styles.linkItem}>Business Services</div>
                <div className={styles.linkItem}>Consulting Services</div>
                <div className={styles.linkItem}>Consumer Product</div>
                <div className={styles.linkItem}>Financial Services</div>
              </div>
            </div>
            <div className="text-4">
              <h3 className="text-white font-bold text-6">Contact Us</h3>
              <div className="flex flex-col mt-5 gap-5">
                <div className="gap-2 flex">
                  <PhoneIcon className="text-blue-dark mt-1" />
                  <span>(00) 123 456 789</span>
                </div>
                <div className="gap-2 flex">
                  <MailSendLineIcon className="text-blue-dark mt-1" />
                  <span>support@rstheme.com</span>
                </div>
                <div className="gap-2 flex">
                  <LocationIcon className="text-blue-dark mt-1" />
                  <span>25 San Fairport, US 1565 united State City</span>
                </div>
                <div className="gap-2 flex">
                  <GlobalIcon className="text-blue-dark mt-1" />
                  <span>yourdomainname.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray" />
        <div className="w-full flex flex-wrap justify-between pt-4 pb-5 text-4">
          <p className="text-white">© 2023 Bcom. Designed By RSTheme.</p>
          <div className="flex gap-7 items-start lg:items-center flex-col lg:flex-row mt-10 lg:mt-0">
            <a
              className="text-white opacity-90 hover:text-blue-dark transition-all duration-300"
              href="#"
            >
              About
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-white hidden lg:block"></span>
            <a
              className="text-white opacity-90 hover:text-blue-dark transition-all duration-300"
              href="#"
            >
              FAQ
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-white hidden lg:block"></span>
            <a
              className="text-white opacity-90 hover:text-blue-dark transition-all duration-300"
              href="#"
            >
              Blog Standard
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-white hidden lg:block"></span>
            <a
              className="text-white opacity-90 hover:text-blue-dark transition-all duration-300"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
        <div></div>
      </div>
      <div className="absolute w-full top-0 -translate-y-1/2">
        <div className="section-content bg-blue-300 rounded-lg p-12.5 flex lg:flex-row flex-col gap-20">
          <div className="relative">
            <h1 className="text-white font-extrabold text-8 lg:text-12.5 leading-tight">
              Subscribe to our newsletter & get latest updates.
            </h1>
            <img
              className="absolute w-15 -right-10 -bottom-5 hidden lg:block"
              src="/assets/images/services/subscribe_top_pointer.png"
              alt="Subscribe"
            />
          </div>
          <div className="flex items-center w-full lg:w-3/5">
            <Input placeholder="Email Address" className="rounded-l-xl py-8 text-primary-dark" />
            <div className="bg-primary-dark rounded-r-xl w-17 min-w-17 h-17 flex-center text-white">
              <ArrowRightUpIcon size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
