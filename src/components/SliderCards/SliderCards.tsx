import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderCards.scss';
import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';

type Props = {
  title: string,
  items: Phone[],
};

export const SliderCards: React.FC<Props> = ({ title, items }) => {
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerPadding: '50px',
        },
      },
    ],
  };

  return (
    <div className="phonesSlider">
      <div className="phonesSlider__butttons">
        <h2 className="phonesSlider__title">{title}</h2>
        <div className="phonesSlider__controls">
          <button
            type="button"
            className="phonesSlider__button phonesSlider__button-prev"
            onClick={sliderRef?.current?.slickPrev}
          >
          </button>
          <button
            type="button"
            className="phonesSlider__button phonesSlider__button-next"
            onClick={sliderRef?.current?.slickNext}
          >
          </button>
        </div>
      </div>
      <Slider
        {...sliderSettings}
        ref={sliderRef}
        className="phonesSlider__cards"
      >
        {items.map((phone) => (
          <div key={phone.id} className="phonesSlider__card">
            <Card phone={phone} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
