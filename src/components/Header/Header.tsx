import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../img/Logo/NiceGadgets.svg';
import menu from '../../img/icons/menu.svg';
import { useAppSelector } from '../../store/hooks';
import { selectCart } from '../../store/cart/cartSlice';
import { selectFavorite } from '../../store/cart/favoriteSlice';

interface Props {
  toggleMenu: () => void
}

export const Header: React.FC<Props> = memo(({ toggleMenu }) => {
  const gadgetsInCart = useAppSelector(selectCart);
  const gadgetsInFavorite = useAppSelector(selectFavorite);

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img
          className="header__logo"
          src={logo}
          alt="NiceGadgets logo"
        />
      </Link>

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
          <div className="header__icon header__icon--favourites">
            {gadgetsInFavorite.length > 0 && (
              <div className="icon-counter">{gadgetsInFavorite.length}</div>
            )}
          </div>
        </Link>
        <Link
          to="/cart"
          className="header__icon_link"
        >
          <div className="header__icon header__icon--cart">
            {gadgetsInCart.length > 0 && (
              <div className="icon-counter">{gadgetsInCart.length}</div>
            )}
          </div>
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
