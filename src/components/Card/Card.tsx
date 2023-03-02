import React, { useState } from 'react';
import './Card.scss';
import classNames from 'classnames';
import { Phone } from '../../types/Phone';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import testImage from './test_image.jpg';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = React.memo(({ phone }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorite, setIsAddedToFavorite] = useState(false);

  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    // image,
  } = phone;

  const handleAddToCartClick = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  return (
    <div className="card">
      <img
        className="card__image"
        src={testImage}
        alt={name}
      />

      <h2 className="card__title">{`${name} (iMT9G2FS/A)`}</h2>

      <div className="card__price">
        <p className="card__price__actual">{`$${price}`}</p>
        <p className="card__price__full">{`$${fullPrice}`}</p>
      </div>

      <div className="card__line"></div>

      <div className="card__specs">
        <div className="card__container">
          <p className="card__specs__text">Screen</p>
          <p className="card__specs__value">{screen}</p>
        </div>

        <div className="card__container">
          <p className="card__specs__text">Capacity</p>
          <p className="card__specs__value">{capacity}</p>
        </div>

        <div className="card__container">
          <p className="card__specs__text">RAM</p>
          <p className="card__specs__value">{ram}</p>
        </div>
      </div>

      <div className="card__buy">
        <AddToCartButton isAdded={isAddedToCart} onAdd={handleAddToCartClick} />

        <button
          type="button"
          className={classNames(!isAddedToFavorite ? 'card__buy__favorite' : 'card__buy__favorite--is-added')}
          onClick={() => setIsAddedToFavorite(!isAddedToFavorite)}
        >
        </button>
      </div>
    </div>
  );
});
