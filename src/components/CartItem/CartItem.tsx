import React from 'react';
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
          <img
            src={image}
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
