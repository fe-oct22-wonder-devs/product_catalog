import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MainSlider.scss';
import slider_iPhone14Pro from '../../img/Home_page/slider_iPhone14Pro.png';

export const MainSlider: React.FC = () => {
  const imgIds = [1, 2, 3];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    customPaging: () => (
      <div
        className="slick-dot"
        style={{
          width: '14px',
          height: '4px',
          marginTop: 18,
          marginRight: 14,
        }}
      />
    ),
  };

  return (
    <div className="slider-wrapper">
      <h1 className="slider__title">Welcome to Nice Gadgets store!</h1>
      <Slider {...settings} className="slider">
        {imgIds.map((item) => (
          <div key={item} className="slider__banner">
            <img src={slider_iPhone14Pro} alt="iPhone14Pro" className="slider__main-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
