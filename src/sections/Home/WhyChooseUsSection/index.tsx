import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faAward, faUsersCog, faPhone } from '@fortawesome/free-solid-svg-icons';

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us-section py-20">
      <div className="container mx-auto">
        <div className="section-title center max-w-[600px] mx-auto">
          <h5>Why Choose Us</h5>
          <h1>Reasons to Partner with WebPlusAI Tech</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="w-[60px] h-[60px] flex-center bg-primary">
                <FontAwesomeIcon icon={faCubes} className="text-white w-5" />
              </div>
              <h4 className="font-bold text-6 text-primary-dark mt-2">Innovation Leaders</h4>
              <p>
                As Innovation Leaders, our unwavering commitment to pushing the boundaries of
                technological advancement drives us to continually innovate, creating bespoke software 
                solutions tailored to meet the evolving needs of our clients
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-[60px] h-[60px] flex-center bg-primary">
                <FontAwesomeIcon icon={faAward} className="text-white w-5" />
              </div>
              <h4 className="font-bold text-6 text-primary-dark mt-2">Tech Experts</h4>
              <p>
                Our team of tech experts leverages the latest tools and methodologies to engineer
                custom software solutions tailored to meet your unique business needs.
              </p>
            </div>
          </div>
          {/* <div className="flex items-end">
            <img src="/assets/images/feature.jpg" alt="Feature" />
          </div> */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="w-[60px] h-[60px] flex-center bg-primary">
                <FontAwesomeIcon icon={faUsersCog} className="text-white w-5" />
              </div>
              <h4 className="font-bold text-6 text-primary-dark mt-2">Client-Centric</h4>
              <p>
                At the heart of our approach, we are inherently client-centric, dedicated to
                understanding your vision and delivering software solutions that not only meet but
                exceed your expectations.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-[60px] h-[60px] flex-center bg-primary">
                <FontAwesomeIcon icon={faPhone} className="text-white w-5" />
              </div>
              <h4 className="font-bold text-6 text-primary-dark mt-2">Agile Approach</h4>
              <p>
                Embracing an agile approach, we prioritize adaptability and collaboration, ensuring
                swift development cycles and delivering high-quality software solutions that evolve
                with your changing needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
