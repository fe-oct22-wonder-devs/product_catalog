import React, { useState, useEffect } from 'react';
import './ProductItem.scss';
import './SliderStyles.scss';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import Slider from 'react-slick';
import { AddToCartButton } from '../../components/AddToCartButton/AddToCartButton';
import { PhoneItem } from '../../types/PhoneItem';
import { getPhoneById, getPhonesPagination } from '../../api/phones';
import { SliderCards } from '../../components/SliderCards/SliderCards';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addToFavorite,
  removeFromFavorite,
  selectFavorite,
} from '../../store/cart/favoriteSlice';
import { addToCart, removeFromCart, selectCart } from '../../store/cart/cartSlice';
import { Phone } from '../../types/Phone';

const phoneForTest = {
  id: '1',
  category: 'phones',
  phoneId: 'apple-iphone-7-32gb-black',
  itemId: 'apple-iphone-7-32gb-black',
  name: 'Apple iPhone 7 32GB Black',
  fullPrice: 400,
  price: 375,
  screen: "4.7' IPS",
  capacity: '32GB',
  color: 'black',
  ram: '2GB',
  year: 2016,
  image: 'img/phones/apple-iphone-7/black/00.jpg',
};

export const ProductItem: React.FC = () => {
  const { phoneSlug } = useParams();

  const [currentPhone, setCurrentPhone] = useState<PhoneItem | null>(null);
  const [itemForCart, setItemForCart] = useState<Phone>(phoneForTest);
  const [images, setImages] = useState<string[]>([]);
  const [actualColor, setActualColor] = useState('');
  const [actualCapacity, setActualCapacity] = useState('');
  const [phonesForSlider, setPhonesForSlider] = useState<Phone[]>([]);

  const loadItem = async (phoneId: string | undefined) => {
    if (phoneId) {
      const loadedItem = await getPhoneById(phoneId);
      const newItemsForSlider = await getPhonesPagination({ perPage: '20', page: '1', sort: 'newest' });

      setCurrentPhone(loadedItem[0]);
      setItemForCart(loadedItem[1]);
      setPhonesForSlider(newItemsForSlider);
      setImages(loadedItem[0].images);
      setActualCapacity(loadedItem[0].capacity);
      setActualColor(loadedItem[0].color);
    }
  };

  useEffect(() => {
    loadItem(phoneSlug);
  }, [phoneSlug]);

  const gadgetsInCart = useAppSelector(selectCart);
  const gadgetsInFavorite = useAppSelector(selectFavorite);

  const dispatch = useAppDispatch();

  const isAddedToCart = gadgetsInCart.some(el => el.id === itemForCart.id);
  const isAddedToFavorite = gadgetsInFavorite.some(el => el.id === itemForCart.id);

  const handleAddToCartClick = () => {
    if (isAddedToCart) {
      dispatch(removeFromCart(itemForCart.id));
    } else {
      dispatch(addToCart(itemForCart));
    }
  };

  const handleAddToFavoriteClick = () => {
    if (isAddedToFavorite) {
      dispatch(removeFromFavorite(itemForCart.id));
    } else {
      dispatch(addToFavorite(itemForCart));
    }
  };

  const handleColorChange = (colorFromButton: string) => {
    const newPhoneSlug = [currentPhone?.namespaceId, actualCapacity, colorFromButton].join('-').toLowerCase();

    loadItem(newPhoneSlug);
  };

  const handleCapacityChange = (capacityFromButton: string) => {
    const newPhoneSlug = [currentPhone?.namespaceId, capacityFromButton, actualColor].join('-').toLowerCase();

    loadItem(newPhoneSlug);
  };

  const settings = {
    customPaging(i: number) {
      return (
        <img src={images[i]} alt="img" className="slick-image" />
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
    <div className="wrapper">
      {currentPhone && (
        <div className="item">
          <h1 className="item__title">{`${currentPhone.name} (iMT9G2FS/A)`}</h1>

          <div className="grid grid--desktop grid--tablet item__interactive-section">
            <div className="grid__item--desktop-1-13 grid__item--tablet-1-7 slider">
              <Slider {...settings}>
                {images.map(image => (
                  <img src={image} alt="" className="item__small-img" key={image} />
                ))}
              </Slider>
            </div>

            <div className="grid__item--desktop-15-20 grid__item--tablet-8-12">
              <section className="item_interactive">
                <div className="item__color">
                  <p className="item__color-title">Available colors</p>

                  {currentPhone.colorsAvailable.map(col => (
                    <button
                      type="button"
                      className={classNames('item__color-selector', { 'item__color-selector--is-active': col === actualColor })}
                      key={col}
                      onClick={() => handleColorChange(col)}
                    >
                      <div
                        className="item__color-selector__color"
                        style={{ background: `${col}` }}
                      />
                    </button>
                  ))}
                </div>

                <div className="separator"></div>

                <div className="item__capacity">
                  <p className="item__capacity-title">Select capacity</p>

                  {currentPhone.capacityAvailable.map(cap => (
                    <button
                      type="button"
                      className={classNames('item__capacity-button',
                        { 'item__capacity-button--is-active': actualCapacity === cap })}
                      key={cap}
                      onClick={() => handleCapacityChange(cap)}
                    >
                      {cap}
                    </button>
                  ))}
                </div>

                <div className="separator"></div>

                <div className="item__price">
                  <p className="item__price-actual">{`$${currentPhone.priceDiscount}`}</p>
                  <p className="item__price-full">{`$${currentPhone.priceRegular}`}</p>
                </div>

                <div className="item__buy">
                  <AddToCartButton isAdded={isAddedToCart} onAdd={handleAddToCartClick} />

                  <button
                    type="button"
                    className={classNames(!isAddedToFavorite
                      ? 'card__buy__favorite'
                      : 'card__buy__favorite--is-added')}
                    onClick={handleAddToFavoriteClick}
                  >
                  </button>
                </div>

                <div className="item__short-specs">
                  <div className="card__container">
                    <p className="card__specs__text">Screen</p>
                    <p className="card__specs__value">{currentPhone.screen}</p>
                  </div>

                  <div className="card__container">
                    <p className="card__specs__text">Resolution</p>
                    <p className="card__specs__value">{currentPhone.resolution}</p>
                  </div>

                  <div className="card__container">
                    <p className="card__specs__text">Processor</p>
                    <p className="card__specs__value">{currentPhone.processor}</p>
                  </div>

                  <div className="card__container">
                    <p className="card__specs__text">RAM</p>
                    <p className="card__specs__value">{currentPhone.ram}</p>
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
                {currentPhone.description.map(descBlock => (
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
                  <p className="item__specs--value">{currentPhone.screen}</p>
                </div>

                <div className="item__specs--container">
                  <p className="item__specs--name">Resolution</p>
                  <p className="item__specs--value">{currentPhone.resolution}</p>
                </div>

                <div className="item__specs--container">
                  <p className="item__specs--name">Processor</p>
                  <p className="item__specs--value">{currentPhone.processor}</p>
                </div>

                <div className="item__specs--container">
                  <p className="item__specs--name">RAM</p>
                  <p className="item__specs--value">{currentPhone.ram}</p>
                </div>

                <div className="item__specs--container">
                  <p className="item__specs--name">Camera</p>
                  <p className="item__specs--value">{currentPhone.camera}</p>
                </div>

                <div className="item__specs--container">
                  <p className="item__specs--name">Zoom</p>
                  <p className="item__specs--value">{currentPhone.zoom}</p>
                </div>

                <div className="item__specs--container">
                  <p className="item__specs--name">Cell</p>
                  <p className="item__specs--value">{currentPhone.cell.map((el, i) => (i ? `, ${el}` : el))}</p>
                </div>
              </section>
            </div>

            <div className="grid__item--desktop-1-24 grid__item--tablet-1-12">
              <section className="item__recommended">
                <SliderCards title="You may also like" items={phonesForSlider} />
              </section>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
