import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { EmailIcon, LocationIcon } from '@components/Common/icons';
import { Button, Input, TextArea } from '@components/Common';

const ContactUsSection = () => {
  return (
    <section className="contact-us-section py-20">
      <div className="container mx-auto">
        <div className="section-title center max-w-[700px] mx-auto">
          <h5>Contact Us</h5>
          <h1>Get in Touch with WebPlusAI Tech</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-[60px] h-[60px] flex-center bg-primary">
              <FontAwesomeIcon icon={faPhone} className="text-white w-4" />
            </div>
            <div>
              {/* <h5 className="text-5 font-semibold text-primary-dark mb-2">
                Call to ask any question
              </h5> */}
              <h4 className="text-primary font-bold leading-[1] text-6">+421909253018</h4>
            </div>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-[60px] h-[60px] flex-center bg-primary">
              <EmailIcon className="text-white" />
            </div>
            <div>
              {/* <h5 className="text-5 font-semibold text-primary-dark mb-2">
                Email to get free quote
              </h5> */}
              <h4 className="text-primary font-bold leading-[1] text-6">info@webplusai.net</h4>
            </div>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-[60px] h-[60px] flex-center bg-primary">
              <LocationIcon className="text-white" />
            </div>
            <div>
              {/* <h5 className="text-5 font-semibold text-primary-dark mb-2">Visit our office</h5> */}
              <h4 className="text-primary font-bold leading-[1] text-6">Moyzesova 2058/8, Čadca</h4>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-primary-light" />
              <Input placeholder="Your Email" className="bg-primary-light" />
            </div>
            <Input placeholder="Subject" className="bg-primary-light" />
            <TextArea placeholder="Message" className="bg-primary-light" />
            <Button className="">Send Message</Button>
          </div>
          <div>
            <iframe
              className="position-relative rounded w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.3555903278443!2d18.7881483!3d49.4399959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471440266a6c021f%3A0x2002560d487b7caa!2sMoyzesova%202058%2F8%2C%20022%2001%20%C4%8Cadca%2C%20Slovakia!5e0!3m2!1sen!2suk!4v1712510818156!5m2!1sen!2suk"
              frameBorder="0"
              style={{ minHeight: '300px', border: 0 }}
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
