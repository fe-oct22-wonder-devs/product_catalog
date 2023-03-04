import React from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { Phone } from '../../types/Phone';
import './Cart.scss';

// type Props = {
//   phonesInCart: Phone[]
// };

const addedPhones: Phone[] = [
  {
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
  },
  {
    id: '2',
    category: 'phones',
    phoneId: 'apple-iphone-7-plus-32gb-black',
    itemId: 'apple-iphone-7-plus-32gb-black',
    name: 'Apple iPhone 7 Plus 32GB Black',
    fullPrice: 540,
    price: 500,
    screen: "5.5' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '3GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7-plus/black/00.jpg',
  },
  {
    id: '3',
    category: 'phones',
    phoneId: 'apple-iphone-8-64gb-gold',
    itemId: 'apple-iphone-8-64gb-gold',
    name: 'Apple iPhone 8 64GB Gold',
    fullPrice: 600,
    price: 550,
    screen: "4.7' IPS",
    capacity: '64GB',
    color: 'gold',
    ram: '2GB',
    year: 2017,
    image: 'img/phones/apple-iphone-8/gold/00.jpg',
  },
];

export const Cart: React.FC = () => {
  const totalAmount = addedPhones.reduce((acc, phone) => (acc + phone.price), 0);

  return (
    <div className="wrapper">
      <h1 className="title">Cart</h1>
      <div className="cart">
        <div className="cart__container-for-added">
          {addedPhones.map(phone => (
            <CartItem phone={phone} key={phone.id} />
          ))}
        </div>

        <div className="cart__cashout">
          <p className="cart__cashout--total-amount">{`$${totalAmount}`}</p>

          <p className="cart__cashout--total-text">
            {`Total for ${addedPhones.length} items`}
          </p>

          <div className="cart__cashout--separator"></div>

          <button
            type="button"
            className="cart__cashout--button"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
