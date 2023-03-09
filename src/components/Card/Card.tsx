import React from 'react';
import './Card.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToCart, removeFromCart, selectCart } from '../../store/cart/cartSlice';
import { selectFavorite, addToFavorite, removeFromFavorite } from '../../store/cart/favoriteSlice';

type Props = {
  phone: Phone;
};

export const Card: React.FC<Props> = React.memo(({ phone }) => {
  const gadgetsInCart = useAppSelector(selectCart);
  const gadgetsInFavorite = useAppSelector(selectFavorite);
  const isAddedToCart = gadgetsInCart.some(el => el.phoneId === phone.phoneId);
  const isAddedToFavorite = gadgetsInFavorite.some(el => el.phoneId === phone.phoneId);

  const dispatch = useAppDispatch();

  const {
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
    image,
  } = phone;

  const handleAddToCartClick = () => {
    if (isAddedToCart) {
      dispatch(removeFromCart(phone.id));
    } else {
      dispatch(addToCart(phone));
    }
  };

  const handleAddToFavoriteClick = () => {
    if (isAddedToFavorite) {
      dispatch(removeFromFavorite(phone.id));
    } else {
      dispatch(addToFavorite(phone));
    }
  };

  return (
    <Link to={`/phones/${phone.phoneId}`}>
      <div className="card">
        <div className="card__header">
          <img
            className="card__image"
            src={image}
            alt={name}
          />

          <h2 className="card__title">{`${name} (iMT9G2FS/A)`}</h2>

          <div className="card__price">
            <p className="card__price__actual">{`$${price}`}</p>
            <p className="card__price__full">{`$${fullPrice}`}</p>
          </div>
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
            onClick={handleAddToFavoriteClick}
          >
          </button>
        </div>
      </div>
    </Link>
  );
});
