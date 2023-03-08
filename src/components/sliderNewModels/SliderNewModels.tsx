import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderNewModels.scss';
import slider_iPhone14Pro from '../../img/Home_page/slider_small_iPhone14Pro.png';

export const SliderNewModels: React.FC = () => {
  const imgIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <Slider {...settings}>
        {imgIds.map((item) => (
          <div key={item}>
            <img src={slider_iPhone14Pro} alt="iPhone14Pro" className="slider__main-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
