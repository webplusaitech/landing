import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@components/Common/icons';
import { TwitterIcon } from '@components/Common/icons/Twitter';

const teamMembers = [
  {
    id: 1,
    name: 'Full Name',
    job: 'Designation',
    image: '/assets/images/team-1.jpg',
  },
  {
    id: 2,
    name: 'Full Name',
    job: 'Designation',
    image: '/assets/images/team-2.jpg',
  },
  {
    id: 3,
    name: 'Full Name',
    job: 'Designation',
    image: '/assets/images/team-3.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="team-section py-20">
      <div className="container mx-auto">
        <div className="section-title max-w-[600px] center mx-auto">
          <h5>Team Members</h5>
          <h1>Professional Stuffs Ready to Help Your Business</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card flex flex-col group">
              <div className="overflow-hidden relative">
                <img
                  className="group-hover:scale-110 transition-all duration-300 ease-in-out w-full"
                  src={member.image}
                />
                <div className="absolute left-0 right-0 top-0 bottom-0 flex-center bg-primary-dark/70 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 flex-center bg-primary cursor-pointer">
                      <TwitterIcon className="text-white" />
                    </div>
                    <div className="w-12 h-12 flex-center bg-primary cursor-pointer">
                      <FacebookIcon className="text-white" />
                    </div>
                    <div className="w-12 h-12 flex-center bg-primary cursor-pointer">
                      <InstagramIcon className="text-white" />
                    </div>
                    <div className="w-12 h-12 flex-center bg-primary cursor-pointer">
                      <LinkedinIcon className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-primary-light py-6">
                <h4 className="font-bold text-primary text-6">{member.name}</h4>
                <p className="uppercase">{member.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
