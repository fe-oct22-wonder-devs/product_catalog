import React, { useState } from 'react';
import './CartItem.scss';
import { Phone } from '../../types/Phone';
import testImage from '../Card/test_image.jpg';

type Props = {
  phone: Phone
};

export const CartItem: React.FC<Props> = React.memo(({ phone }) => {
  const [amountCounter, setAmountCounter] = useState(1);

  const { name, price } = phone;

  const actuallPrice = price * amountCounter;

  const handleDecreaseClick = () => {
    setAmountCounter(prev => prev - 1);
  };

  const handleIncreaseClick = () => {
    setAmountCounter(prev => prev + 1);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__info-section">
        <button
          type="button"
          className="cart-item__remove-button"
        >
        </button>

        <div className="cart-item__image-container">
          <img
            src={testImage}
            alt={name}
            className="cart-item__image"
          />
        </div>

        <p className="cart-item__title">
          {`${name} (iMT9G2FS/A)`}
        </p>
      </div>

      <div className="cart-item__price-section">
        <div className="cart-item__amount-section">
          <button
            type="button"
            className="cart-item__price-section--decrease"
            onClick={handleDecreaseClick}
            disabled={amountCounter === 1}
          >
          </button>

          <p className="cart-item__price-section--amount-counter">
            {amountCounter}
          </p>

          <button
            type="button"
            className="cart-item__price-section--increase"
            onClick={handleIncreaseClick}
          >
          </button>
        </div>

        <p className="cart-item__price-section--price">
          {`$${actuallPrice}`}
        </p>
      </div>
    </div>
  );
});
