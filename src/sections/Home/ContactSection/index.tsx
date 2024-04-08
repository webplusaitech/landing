import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button, Input, TextArea } from '@components/Common';

const ContactSection = () => {
  return (
    <section className="contact-section py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="col-span-1 md:col-span-12 lg:col-span-7">
          <div className="section-title">
            <h5>Contact Us</h5>
            <h1>Please Feel Free to Contact Us</h1>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faReply} className="text-primary w-5" />
              <h5 className="text-5 text-primary-dark font-semibold">Reply within 24 hours</h5>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faPhone} className="text-primary w-5" />
              <h5 className="text-5 text-primary-dark font-semibold">24 hrs telephone support</h5>
            </div>
          </div> */}
          <p className="my-5">
            We welcome the opportunity to connect with you and discuss how our team of experienced
            developers, innovative thinkers, and dedicated professionals can collaborate to bring
            your software ideas to life, addressing your unique business needs with tailored
            solutions that drive success.
          </p>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-[60px] h-[60px] flex-center bg-primary">
              <FontAwesomeIcon icon={faPhone} className="text-white w-4" />
            </div>
            <div>
              <h5 className="text-5 font-semibold text-primary-dark mb-2">
                Call to ask any question
              </h5>
              <h4 className="text-primary font-bold leading-[1] text-6">+421909253018</h4>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-12 lg:col-span-5 bg-primary p-6 sm:p-12 flex flex-col gap-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Input placeholder="Subject" />
          <TextArea placeholder="Message" />
          <Button className="bg-primary-dark hover:bg-primary-dark hover:!text-white">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
