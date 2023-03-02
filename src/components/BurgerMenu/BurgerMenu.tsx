import React, { memo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import darkLogo from './Logo/NiceGadgets-dark.svg';
import favourites from './Icons/favourites.svg';
import cart from './Icons/cart.svg';
import close from './Icons/close.svg';

interface Props {
  toggleMenu: () => void,
}

export const BurgerMenu: React.FC<Props> = memo(({ toggleMenu }) => {
  useEffect(() => {
    const { body } = document;

    body.classList.add('no-scroll');

    return () => {
      body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <header className="burger">
      <section className="burger-header">
        <a href="/" className="burger-header__logo-link">
          <img
            className="burger-header__logo"
            src={darkLogo}
            alt="NiceGadgets dark logo"
          />
        </a>

        <button type="button" onClick={toggleMenu}>
          <img
            className="burger-header__close"
            src={close}
            alt="close"
          />
        </button>
      </section>

      <nav className="burger-nav">
        <ul className="burger-nav__list">
          <li className="burger-nav__item">
            <NavLink
              to="/"
              className="burger-nav__link"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>

          <li className="burger-nav__item">
            <NavLink
              to="/phones"
              className="burger-nav__link"
              onClick={toggleMenu}
            >
              Phones
            </NavLink>
          </li>

          <li className="burger-nav__item">
            <NavLink
              to="/tablets"
              className="burger-nav__link"
              onClick={toggleMenu}
            >
              Tablets
            </NavLink>
          </li>

          <li className="burger-nav__item">
            <NavLink
              to="/accessories"
              className="burger-nav__link"
              onClick={toggleMenu}
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>

      <section className="burger-icons">
        <img
          className="burger-icons__icon"
          src={favourites}
          alt="favourites"
        />
        <img
          className="burger-icons__icon"
          src={cart}
          alt="cart"
        />
      </section>
    </header>
  );
});
