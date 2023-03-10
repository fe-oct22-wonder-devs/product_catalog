import React, { useState } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { ModalWindow } from '../../components/ModalWindow/ModalWIndow';
import './Cart.scss';
import { useAppSelector } from '../../store/hooks';
import { selectCart } from '../../store/cart/cartSlice';
import emptyCart from '../../img/empty_cart.png';
import { Back } from '../../components/Breadcrumbs/Back';

export const Cart: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const gadgetsInCart = useAppSelector(selectCart);

  const totalAmount = gadgetsInCart.reduce((acc, phone) => (acc + (phone.price * phone.count)), 0);

  const handleCheckoutClick = () => {
    window.localStorage.clear();

    setIsModalOpened(true);

    setTimeout(() => {
      setIsModalOpened(false);
      window.location.replace('https://fe-oct22-wonder-devs.github.io/product_catalog/');
    }, 1500);
  };

  return (
    <div className="wrapper">
      <Back />
      <h1 className="title">Cart</h1>
      <div className="cart">
        <div className="cart__container-for-added">
          {gadgetsInCart.length === 0 && (<img src={emptyCart} alt="empty cart" />)}
        </div>

        {gadgetsInCart.map(phone => (
          <CartItem phone={phone} key={phone.id} />
        ))}

        <div className="cart__cashout">
          <p className="cart__cashout--total-amount">{`$${totalAmount}`}</p>

          <p className="cart__cashout--total-text">
            {`Total for ${gadgetsInCart.length} items`}
          </p>

          <div className="cart__cashout--separator"></div>

          <button
            type="button"
            className="cart__cashout--button"
            onClick={handleCheckoutClick}
          >
            Checkout
          </button>
        </div>
      </div>

      {isModalOpened && (
        <ModalWindow />
      )}
    </div>
  );
};
