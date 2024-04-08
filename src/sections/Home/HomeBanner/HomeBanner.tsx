import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@components/Common';
import { faUsers, faCheck, faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const data = [
  {
    id: 1,
    image: '/assets/images/carousel-1.jpg',
    heading: 'Elevate Your Business with Custom Software Solutions',
    caption: 'CREATIVE & INNOVATIVE',
  },
  {
    id: 2,
    image: '/assets/images/carousel-2.jpg',
    heading: 'Elevate Your Business with Custom Software Solutions',
    caption: 'CREATIVE & INNOVATIVE',
  },
];

const PreviousArrow = ({ style, onClick }: CustomArrowProps) => {
  return (
    <div
      className="slick-arrow slick-prev !-left-2 md:!left-10 z-10"
      style={style}
      onClick={onClick}
    >
      <div className="w-17 h-17 rounded-full flex-center opacity-50 hover:opacity-100 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6l-.708.708Z"
          />
        </svg>
      </div>
    </div>
  );
};

const NextArrow = ({ style, onClick }: CustomArrowProps) => {
  return (
    <div
      className="slick-arrow slick-next !-right-2 md:!right-10 z-10"
      style={style}
      onClick={onClick}
    >
      <div className="w-17 h-17 rounded-full flex-center opacity-50 hover:opacity-100 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
          <path
            fill="white"
            d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708l4.6-4.6Z"
          />
        </svg>
      </div>
    </div>
  );
};

const HomeBanner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    swipeToSlide: false,
    autoplay: false,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
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
    <div className="home-banner w-screen min-h-screen pb-20">
      <Slider {...settings}>
        {data.map((slide) => (
          <div
            key={slide.id}
            className="relative w-screen h-[400px] md:h-[600px] lg:h-[calc(100vh+200px)]"
          >
            <div
              className="w-full h-full bg-no-repeat bg-cover bg-center -z-1"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="w-full h-full bg-blue-dark opacity-70" />
            </div>
            <div className="absolute left-0 top-0 right-0 bottom-0 flex-center">
              <div className="flex-center flex-col text-white max-w-[900px] text-center px-10">
                {/* <p className="mb-5 uppercase text-4 md:text-5 font-bold">{slide.caption}</p> */}
                <h3 className="text-8 md:text-16 lg:text-15 mb-6 font-extrabold leading-[1.2]">
                  {slide.heading}
                </h3>
                <div className="flex gap-6">
                  {/* <Button className="py-2 md:py-4 px-6 md:px-12">Free Quote</Button> */}
                  <Link href="/contact">
                    <Button variant="outline" color="white" className="py-2 md:py-4 px-6 md:px-12">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-20 lg:-mt-19 relative z-10">
        <div className="p-4 bg-primary flex items-center justify-center gap-6 min-h-37.5 shadow-xl">
          <div className="w-[60px] h-[60px] flex-center bg-white">
            <FontAwesomeIcon icon={faUsers} className="text-primary w-6" />
          </div>
          <div className="text-white">
            <h5 className="text-5 font-bold">Happy Clients</h5>
            <h1 className="text-10 font-extrabold leading-[1]">52</h1>
          </div>
        </div>
        <div className="p-4 bg-primary-light flex items-center justify-center gap-6 min-h-37.5 shadow-xl">
          <div className="w-[60px] h-[60px] flex-center bg-primary">
            <FontAwesomeIcon icon={faCheck} className="text-white w-4" />
          </div>
          <div className="">
            <h5 className="text-5 font-bold text-primary">Successful Projects</h5>
            <h1 className="text-10 font-extrabold leading-[1] text-primary-dark">124</h1>
          </div>
        </div>
        {/* <div className="p-4 bg-primary flex items-center justify-center gap-6 min-h-37.5 shadow-xl">
          <div className="w-[60px] h-[60px] flex-center bg-white">
            <FontAwesomeIcon icon={faAward} className="text-primary w-4" />
          </div>
          <div className="text-white">
            <h5 className="text-5 font-bold">Happy Clients</h5>
            <h1 className="text-10 font-extrabold leading-[1]">12345</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomeBanner;
