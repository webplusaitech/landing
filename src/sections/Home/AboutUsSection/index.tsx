import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@components/Common';

const AboutUsSection = () => {
  return (
    <section className="about-section py-20 md:py-30">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-12 gap-10">
        <div className="col-span-1 md:col-span-12 lg:col-span-7 pr-10">
          <div className="section-title">
            <h5>About Us</h5>
            <h1>Driving Innovation and Excellence</h1>
          </div>
          <p className="mb-6">
            We are dedicated to driving innovation and excellence through our commitment to
            continuous improvement, groundbreaking technology, and unparalleled customer
            satisfaction.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-primary w-6" />
              <span className="text-5 font-semibold text-primary-dark">Innovation Leaders</span>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-primary w-6" />
              <span className="text-5 font-semibold text-primary-dark">Tech Experts</span>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-primary w-6" />
              <span className="text-5 font-semibold text-primary-dark">Client-Centric</span>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheck} className="text-primary w-6" />
              <span className="text-5 font-semibold text-primary-dark">Agile Approach</span>
            </div>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-[60px] h-[60px] flex-center bg-primary">
              <FontAwesomeIcon icon={faPhone} className="text-white w-4" />
            </div>
            <div>
              <h5 className="text-5 font-semibold text-primary-dark mb-2">Contact Us</h5>
              <h4 className="text-primary font-bold leading-[1] text-6">+421909253018</h4>
            </div>
          </div>
          {/* <Button>Request A Quote</Button> */}
        </div>
        <div className="col-span-1 sm:col-span-12 lg:col-span-5">
          <img src="/assets/images/about.jpg" alt="About" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
