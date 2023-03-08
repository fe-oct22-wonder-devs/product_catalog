import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import '../../pages/ProductItem/ProductItem.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  images: string[]
};

export const ImagesSlider: React.FC<Props> = ({ images }) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  const slider1Ref = useRef<Slider>(new Slider({}));
  const slider2Ref = useRef<Slider>(new Slider({}));

  useEffect(() => {
    if (slider1Ref.current && slider2Ref.current) {
      setNav1(slider1Ref.current);
      setNav2(slider2Ref.current);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // beforeChange: function(currentSlide, nextSlide) {console.log();
    // },
    // afterChange: function(currentSlide) {console.log();
    // },
  };

  return (
    <>
      <div className="item__slider-img">
        <Slider arrows={false} asNavFor={nav2 ?? undefined} ref={slider1Ref} {...settings}>
          {/* {images.map(image => (
            <div className="item__image" key={`${image}`}>
              <img className="item__image-item" src={image} alt="iphone" />
            </div>
          ))} */}
          <div className="item__image">
            <img className="item__image-item" src={images[0]} alt="iphone" />
          </div>
          <div className="item__image">
            <img className="item__image-item" src={images[1]} alt="iphone" />
          </div>
          <div className="item__image">
            <img className="item__image-item" src={images[2]} alt="iphone" />
          </div>
          <div className="item__image">
            <img className="item__image-item" src={images[3]} alt="iphone" />
          </div>
          <div className="item__image">
            <img className="item__image-item" src={images[4]} alt="iphone" />
          </div>
        </Slider>
      </div>

      <div className="item__slider-nav">
        <Slider
          arrows={false}
          asNavFor={nav1 ?? undefined}
          ref={slider2Ref}
          swipeToSlide
          focusOnSelect
          {...settings}
        >
          {/* {images.map(image => (
            <div className="item__image-small" key={`${image}`}>
              <img className="item__image-item" src={image} alt="iphone" />
            </div>
          ))} */}
          <div className="item__image-small">
            <img className="item__image-item" src={images[0]} alt="iphone" />
          </div>
          <div className="item__image-small">
            <img className="item__image-item" src={images[1]} alt="iphone" />
          </div>
          <div className="item__image-small">
            <img className="item__image-item" src={images[2]} alt="iphone" />
          </div>
          <div className="item__image-small">
            <img className="item__image-item" src={images[3]} alt="iphone" />
          </div>
          <div className="item__image-small">
            <img className="item__image-item" src={images[4]} alt="iphone" />
          </div>
        </Slider>
      </div>
    </>
  );
};
