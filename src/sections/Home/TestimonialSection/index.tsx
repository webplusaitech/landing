import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    job: 'CEO',
    image: '/assets/images/testimonial-1.jpg',
    content:
      'I am extremely impressed with the level of expertise and dedication, who delivered an exceptional software solution that perfectly addressed our needs and exceeded our expectations.',
  },
  {
    id: 2,
    name: 'David Smith',
    job: 'Director of Operations',
    image: '/assets/images/testimonial-2.jpg',
    content:
      'Our experience with WebPlusAI Tech has been exceptional; their expertise, professionalism, and commitment to delivering top-notch solutions have truly exceeded our expectations.',
  },
  {
    id: 3,
    name: 'Michael Thompson',
    job: 'Founder',
    image: '/assets/images/testimonial-3.jpg',
    content:
      "I couldn't be happier with the exceptional service and expertise. Their innovative solutions have truly transformed our business, and consistently goes above and beyond to ensure our success.",
  },
  {
    id: 4,
    name: 'Sarah Rodriguez',
    job: 'CTO',
    image: '/assets/images/testimonial-4.jpg',
    content:
      'Working with WebPlusAI Tech was a game-changer for our business; their expertise and dedication helped us achieve our software goals efficiently and effectively.',
  },
];

const TestimonialSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    dots: false,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section py-20">
      <div className="container mx-auto">
        <div className="section-title center mx-auto max-w-[600px]">
          <h5>Testimonial</h5>
          <h1>What Our Clients Say About Our Digital Services</h1>
        </div>
        <div>
          <Slider {...settings}>
            {testimonials.map((slide, index) => (
              <div key={index} className="testimonial-slide-item !flex flex-col bg-primary-light">
                <div className="px-12 pt-12 pb-6 flex gap-5 border-b border-gray-light">
                  <img className="w-15 h-15" src={slide.image} alt={slide.name} />
                  <div>
                    <h4 className="font-bold text-6 text-primary">{slide.name}</h4>
                    <p className="uppercase text-[14px]">{slide.job}</p>
                  </div>
                </div>
                <div className="px-12 pb-12 pt-6">
                  <p>{slide.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
