import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../img/Logo/NiceGadgets.svg';
// import favourites from '../../img/Icons/favourites.svg';
// import cart from '../../img/Icons/cart.svg';
import menu from '../../img/icons/menu.svg';

interface Props {
  toggleMenu: () => void
}

export const Header: React.FC<Props> = memo(({ toggleMenu }) => {
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
        <Link
          to="/favorite"
          className="header__icon_link"
        >
          <div className="header__icon header__icon--favourites"></div>
        </Link>
        <Link
          to="/cart"
          className="header__icon_link"
        >
          <div className="header__icon header__icon--cart"></div>
        </Link>
      </section>

      <button
        type="button"
        onClick={toggleMenu}
      >
        <img
          className="header__menu"
          src={menu}
          alt="menu"
        />
      </button>
    </header>
  );
});
