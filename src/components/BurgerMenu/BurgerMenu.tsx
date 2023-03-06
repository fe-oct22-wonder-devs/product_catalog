import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './BurgerMenu.scss';
import darkLogo from '../../img/Logo/NiceGadgets-dark.svg';
import close from '../../img/icons/close.svg';
import { useAppSelector } from '../../store/hooks';
import { selectCart } from '../../store/cart/cartSlice';

interface Props {
  toggleMenu: () => void,
}

export const BurgerMenu: React.FC<Props> = memo(({ toggleMenu }) => {
  const gadgetsInCart = useAppSelector(selectCart);

  // useEffect(() => {
  //   const { body } = document;
  //
  //   body.classList.add('no-scroll');
  //
  //   return () => {
  //     body.classList.remove('no-scroll');
  //   };
  // }, []);

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

      <section className="burger__icons">
        <Link
          to="/favorite"
          className="burger__icon_link"
          onClick={toggleMenu}
        >
          <div className="header__icon header__icon--favourites">
            <div className="icon-counter">4</div>
          </div>
        </Link>
        <Link
          to="/cart"
          className="burger__icon_link"
          onClick={toggleMenu}
        >
          <div className="header__icon header__icon--cart">
            {gadgetsInCart.length > 0 && (
              <div className="icon-counter">{gadgetsInCart.length}</div>
            )}
          </div>
        </Link>
      </section>
    </header>
  );
});
