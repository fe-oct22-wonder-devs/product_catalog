import React from 'react';
import './Card.scss';
import { Phone } from '../../types/Phone';
import { Button } from '../Button/Button';
import testImage from './test_image.jpg';
import favorite from './favorite.svg';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = React.memo(({ phone }) => {
  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    // image,
  } = phone;

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
        <Button />

        <div className="card__buy__favorite">
          <a href="/" className="card__buy__favorite--link">
            <img src={favorite} alt="favorite icon" className="card__buy__favorite--icon" />
          </a>
        </div>
      </div>
    </div>
  );
});
