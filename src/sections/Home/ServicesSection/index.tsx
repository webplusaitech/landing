import React from 'react';
import {
  faShield,
  faShieldAlt,
  faChartPie,
  faCode,
  faMobileAndroid,
  faSearch,
  faMobileAndroidAlt,
  faTabletAndroid,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    id: 1,
    icon: faShieldAlt,
    heading: 'Web Development',
    content:
      'Empowering businesses with innovative web solutions tailored to their unique needs and goals.',
  },
  {
    id: 2,
    icon: faChartPie,
    heading: 'AI Solutions',
    content:
      'Transforming businesses with cutting-edge AI solutions that drive efficiency, innovation, and growth.',
  },
  {
    id: 3,
    icon: faCode,
    heading: 'Custom Softwares',
    content:
      'Crafting bespoke software solutions to perfectly fit your business requirements and propel your success.',
  },
  {
    id: 4,
    icon: faMobile,
    heading: 'Data Science Services',
    content:
      'Unleashing the power of data with our expert-driven analytics and insights, tailored to fuel your business growth.',
  },
  {
    id: 5,
    icon: faSearch,
    heading: 'Digital Transformation',
    content:
      'Guiding businesses through seamless digital transformations, driving innovation and efficiency every step of the way.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-20">
      <div className="container mx-auto">
        <div className="section-title center max-w-[600px] mx-auto">
          <h5>Our Services</h5>
          <h1>Custom IT Solutions for Your Successful Business</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="h-[300px] px-7.5 bg-primary-light relative transition-all duration-500 flex flex-col items-center justify-center gap-6 group"
            >
              <div className="w-[60px] h-[60px] bg-primary flex-center rotate-45">
                <FontAwesomeIcon icon={service.icon} className="w-5 text-white -rotate-45" />
              </div>
              <h4 className="font-bold text-primary-dark text-6">{service.heading}</h4>
              <p>{service.content}</p>
              <div className="w-15 h-12 flex-center bg-primary opacity-0 absoulte -bottom-12 group-hover:opacity-100 group-hover:-bottom-6 absolute transition-all duration-500 ease-in-out cursor-pointer">
                <FontAwesomeIcon icon={faArrowRight} className="text-white w-4" />
              </div>
            </div>
          ))}
          <div className="h-[300px] p-12 bg-primary relative transition-all duration-500 flex flex-col items-center justify-center gap-4 text-white text-center">
            <h3 className="font-bold text-white text-6 sm:text-7">Contact Us</h3>
            <p className="text-center">
              Reach out to us today to start your journey towards innovative software solutions
              tailored to your needs.
            </p>
            <h2 className="font-bold text-white text-6 sm:text-8">+421909253018</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
