import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@components/Common';

const plans = [
  {
    mode: 'Basic Plan',
    description: 'For Small Size Business',
    price: 49.0,
    availableFeatures: ['HTML5 & CSS3', 'Bootstrap v5'],
    unavailableFeatures: ['Responsive Layout', 'Cross-browser Support'],
  },
  {
    mode: 'Standard Plan',
    description: 'For Medium Size Business',
    price: 99.0,
    availableFeatures: ['HTML5 & CSS3', 'Bootstrap v5', 'Responsive Layout'],
    unavailableFeatures: ['Cross-browser Support'],
  },
  {
    mode: 'Advanced Plan',
    description: 'For Large Size Business',
    price: 149.0,
    availableFeatures: [
      'HTML5 & CSS3',
      'Bootstrap v5',
      'Responsive Layout',
      'Cross-browser Support',
    ],
    unavailableFeatures: [],
  },
];

const PricingPlansSection = () => {
  return (
    <section className="pricing-plans-section py-20">
      <div className="container mx-auto">
        <div className="section-title center max-w-[600px] mx-auto">
          <h5>Pricing Plans</h5>
          <h1>We are Offering Competitive Prices for Our Clients</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {plans.map((item, index) => (
            <div
              key={item.mode}
              className={classnames('bg-primary-light', { '!bg-white shadow-normal': index === 1 })}
            >
              <div className="py-6 px-12 border-b border-gray-light mb-12">
                <h4 className="font-bold text-6 text-primary">{item.mode}</h4>
                <p className="text-3.5 uppercase">{item.description}</p>
              </div>
              <div className="p-12 pt-0">
                <h1 className="font-extrabold text-primary-dark text-9 sm:text-12 leading-[0.7]">
                  <small className="align-top text-[22px]">$</small>
                  {item.price.toFixed(2)}
                  <small className="align-bottom text-4">/ Month</small>
                </h1>
                <div className="flex flex-col gap-4 mt-6">
                  {item.availableFeatures.map((af) => (
                    <div key={af} className="w-full flex justify-between">
                      <p>{af}</p>
                      <FontAwesomeIcon icon={faCheck} className="text-primary w-5" />
                    </div>
                  ))}
                  {item.unavailableFeatures.map((af) => (
                    <div key={af} className="w-full flex justify-between">
                      <p>{af}</p>
                      <FontAwesomeIcon icon={faClose} className="text-red w-4" />
                    </div>
                  ))}
                </div>
                <Button size="sm" className="mt-8">
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlansSection;
