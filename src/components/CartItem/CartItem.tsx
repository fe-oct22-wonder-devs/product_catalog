import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './CartItem.scss';

import { PhoneInCart } from '../../types/Phone';
import { useAppDispatch } from '../../store/hooks';
import { increment, decrement, removeFromCart } from '../../store/cart/cartSlice';

type Props = {
  phone: PhoneInCart
};

export const CartItem: React.FC<Props> = React.memo(({ phone }) => {
  const dispatch = useAppDispatch();

  const {
    name, price, image, count,
  } = phone;

  const actualPrice = price * count;

  const handleDecreaseClick = () => {
    dispatch(decrement(phone.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increment(phone.id));
  };

  const handleRemoveClick = () => {
    dispatch(removeFromCart(phone.id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__info-section">
        <button
          type="button"
          className="cart-item__remove-button"
          onClick={handleRemoveClick}
        >
        </button>

        <div className="cart-item__image-container">
          <Link to={`/phones/${phone.phoneId}`}>
            <img
              src={image}
              alt={name}
              className="cart-item__image"
            />
          </Link>
        </div>

        <p className="cart-item__title">
          <Link to={`/phones/${phone.phoneId}`}>
            {`${name} (iMT9G2FS/A)`}
          </Link>
        </p>

      </div>

      <div className="cart-item__price-section">
        <div className="cart-item__amount-section">
          <button
            type="button"
            className={classNames('cart-item__price-section--decrease', { 'cart-item__price-section--decrease--is-active': count > 1 })}
            onClick={handleDecreaseClick}
            disabled={count === 1}
          >
          </button>

          <p className="cart-item__price-section--amount-counter">
            {count}
          </p>

          <button
            type="button"
            className="cart-item__price-section--increase"
            onClick={handleIncreaseClick}
          >
          </button>
        </div>

        <p className="cart-item__price-section--price">
          {`$${actualPrice}`}
        </p>
      </div>
    </div>
  );
});
