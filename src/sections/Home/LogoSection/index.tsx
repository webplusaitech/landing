import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
  '/assets/images/vendor-1.jpg',
  '/assets/images/vendor-2.png',
  '/assets/images/vendor-3.png',
  '/assets/images/vendor-4.jpg',
  '/assets/images/vendor-5.png',
  '/assets/images/vendor-6.png',
  '/assets/images/vendor-7.png',
  '/assets/images/vendor-8.jpg',
  '/assets/images/vendor-9.jpg',
];

const LogoSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="logo-section py-20">
      <div className="container mx-auto">
        <Slider {...settings}>
          {logos.map((slide, index) => (
            <div key={index} className="px-4">
              <img src={slide} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoSection;
