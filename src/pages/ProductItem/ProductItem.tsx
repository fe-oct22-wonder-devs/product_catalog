import React, { useState } from 'react';
import './ProductItem.scss';
import './SliderStyles.scss';
import classNames from 'classnames';

import Slider from 'react-slick';
import testPhone from '../../data/phoneToTest.json';
import mainTest from './mainTest.jpg';
import test1 from './test1.jpg';
import test2 from './test2.jpg';
import test3 from './test3.jpg';
import test4 from './test4.jpg';
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton';
// import { useAppDispatch, useAppSelector } from '../../store/hooks';
// import {
//   addToFavorite,
//   removeFromFavorite,
//   selectFavorite
// } from '../../store/cart/favoriteSlice';
// import { addToCart, removeFromCart, selectCart } from '../../store/cart/cartSlice';

const phoneToRender = testPhone[0];

const testImages = [mainTest, test1, test2, test3, test4];

export const ProductItem: React.FC = () => {
  const [currentPhone, setCurrentPhone] = useState(phoneToRender);

  const {
    name,
    // images,
    description,
    capacityAvailable,
    capacity,
    priceRegular,
    priceDiscount,
    colorsAvailable,
    color,
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = currentPhone;

  const [actualColor, setActualColor] = useState(color);
  const [actualCapacity, setActualCapacity] = useState(capacity);

  // const gadgetsInCart = useAppSelector(selectCart);
  // // const gadgetsInFavorite = useAppSelector(selectFavorite);
  // const isAddedToCart = gadgetsInCart.some(el => el.id === phone.id);
  // // const isAddedToFavorite = gadgetsInFavorite.some(el => el.id === phone.id);

  // const dispatch = useAppDispatch();

  // const handleAddToCartClick = () => {
  //   if (isAddedToCart) {
  //     dispatch(removeFromCart(phone.id));
  //   } else {
  //     dispatch(addToCart(phone));
  //   }
  // };

  // const handleAddToFavoriteClick = () => {
  //   if (isAddedToFavorite) {
  //     dispatch(removeFromFavorite(phone.id));
  //   } else {
  //     dispatch(addToFavorite(phone));
  //   }
  // };

  const handleColorChange = (colorFromButton: string) => {
    const newPhone = testPhone.find(phone => phone.color === colorFromButton
      && phone.capacity === actualCapacity);

    if (newPhone) {
      setCurrentPhone(newPhone);
    }

    setActualColor(color);
  };

  const handleCapacityChange = (capacityFromButton: string) => {
    const newPhone = testPhone.find(phone => phone.capacity === capacityFromButton
      && phone.color === actualColor);

    if (newPhone) {
      setCurrentPhone(newPhone);
    }

    setActualCapacity(capacityFromButton);
  };

  const settings = {
    customPaging(i: number) {
      return (
        <img src={testImages[i]} alt="img" className="slick-image" />
      );
    },
    dots: true,
    dotsClass: 'slick-dots-for-small-img',
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="item">
      <h1 className="item__title">{`${name} (iMT9G2FS/A)`}</h1>

      <div className="grid grid--desktop grid--tablet item__interactive-section">
        <div className="grid__item--desktop-1-13 grid__item--tablet-1-7 slider">
          <Slider {...settings}>
            {testImages.map(image => (
              <img src={image} alt="" className="item__small-img" key={image} />
            ))}
          </Slider>
        </div>

        <div className="grid__item--desktop-15-20 grid__item--tablet-8-12">
          <section className="item_interactive">
            <div className="item__color">
              <p className="item__color-title">Available colors</p>

              {colorsAvailable.map(col => (
                <button
                  type="button"
                  className="item__color-selector"
                  key={col}
                  onClick={() => handleColorChange(col)}
                >
                  <div className="item__color-selector__color" style={{ background: `${col}` }} />
                </button>
              ))}
            </div>

            <div className="separator"></div>

            <div className="item__capacity">
              <p className="item__capacity-title">Select capacity</p>

              {capacityAvailable.map(cap => (
                <button
                  type="button"
                  className={classNames('item__capacity-button', { 'item__capacity-button--is-active': actualCapacity === cap })}
                  key={cap}
                  onClick={() => handleCapacityChange(cap)}
                >
                  {cap}
                </button>
              ))}
            </div>

            <div className="separator"></div>

            <div className="item__price">
              <p className="item__price-actual">{`$${priceDiscount}`}</p>
              <p className="item__price-full">{`$${priceRegular}`}</p>
            </div>

            <div className="item__buy">
              <AddToCartButton isAdded={false} onAdd={() => {}} />

              <button
                type="button"
                className="item__buy-favorite"
              // {classNames(!isAddedToFavorite
              //   ? 'card__buy__favorite'
              //   : 'card__buy__favorite--is-added'
              // )}
              // onClick={handleAddToFavoriteClick}
              >
              </button>
            </div>

            <div className="item__short-specs">
              <div className="card__container">
                <p className="card__specs__text">Screen</p>
                <p className="card__specs__value">{screen}</p>
              </div>

              <div className="card__container">
                <p className="card__specs__text">Resolution</p>
                <p className="card__specs__value">{resolution}</p>
              </div>

              <div className="card__container">
                <p className="card__specs__text">Processor</p>
                <p className="card__specs__value">{processor}</p>
              </div>

              <div className="card__container">
                <p className="card__specs__text">RAM</p>
                <p className="card__specs__value">{ram}</p>
              </div>
            </div>

          </section>
        </div>
      </div>

      <div className="grid grid--desktop grid--tablet">
        <div className="grid__item--desktop-1-13 grid__item--tablet-1-12">
          <section className="item__about">
            <h2 className="item__about--title">About</h2>
            <div className="separator"></div>
            {description.map(descBlock => (
              <>
                <p className="item__about--blockTitle">{descBlock.title}</p>
                <div className="item__about--text">{descBlock.text}</div>
              </>
            ))}
          </section>
        </div>

        <div className="grid__item--desktop-15-24 grid__item--tablet-1-12">
          <section className="item__specs">
            <h2 className="item__specs--title">Tech specs</h2>

            <div className="separator"></div>

            <div className="item__specs--container">
              <p className="item__specs--name">Screen</p>
              <p className="item__specs--value">{screen}</p>
            </div>

            <div className="item__specs--container">
              <p className="item__specs--name">Resolution</p>
              <p className="item__specs--value">{resolution}</p>
            </div>

            <div className="item__specs--container">
              <p className="item__specs--name">Processor</p>
              <p className="item__specs--value">{processor}</p>
            </div>

            <div className="item__specs--container">
              <p className="item__specs--name">RAM</p>
              <p className="item__specs--value">{ram}</p>
            </div>

            <div className="item__specs--container">
              <p className="item__specs--name">Camera</p>
              <p className="item__specs--value">{camera}</p>
            </div>

            <div className="item__specs--container">
              <p className="item__specs--name">Zoom</p>
              <p className="item__specs--value">{zoom}</p>
            </div>

            <div className="item__specs--container">
              <p className="item__specs--name">Cell</p>
              <p className="item__specs--value">{cell.map((el, i) => (i ? `, ${el}` : el))}</p>
            </div>
          </section>
        </div>

        <div className="grid__item--desktop-1-24 grid__item--tablet-1-12">
          <section className="item__recommended">
            <p className="item__recommended--title">You may also like</p>
          </section>
        </div>
      </div>

    </div>
  );
};
