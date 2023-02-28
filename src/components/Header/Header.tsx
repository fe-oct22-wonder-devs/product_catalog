import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from './Logo/NiceGadgets.svg';
import favourites from './Icons/favourites.svg';
import cart from './Icons/cart.svg';
import menu from './Icons/menu.svg';

export const Header: React.FC = memo(() => {
  return (
    <header className="header">
      <a href="/" className="header__logo-link">
        <img
          className="header__logo"
          src={logo}
          alt="NiceGadgets logo"
        />
      </a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/phones" className="nav__link">
              Phones
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/tablets" className="nav__link">
              Tablets
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/accessories" className="nav__link">
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <section className="header__icons">
        <img
          className="header__icon"
          src={favourites}
          alt="favourites"
        />
        <img
          className="header__icon"
          src={cart}
          alt="cart"
        />
      </section>

      <img
        className="header__menu"
        src={menu}
        alt="menu"
      />
    </header>
  );
});
