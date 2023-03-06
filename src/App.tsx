import React, { useState, useCallback, useEffect } from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Home } from './pages/Home/Home';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Phones } from './pages/Phones/Phones';
import { Tablets } from './pages/Tablets/Tablets';
import { Accessories } from './pages/Accessories/Accessories';
import { Header } from './components/Header/Header';
import { Contacts } from './pages/Contacts/Contacts';
import { Rights } from './pages/Rights/Rights';
import { Cart } from './pages/Cart/Cart';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';
import { Favorite } from './pages/Favorite/Favorite';
import { useAppDispatch, useAppSelector, useLocalStorage } from './store/hooks';
import { addToCart, selectCart } from './store/cart/cartSlice';
import { Phone, PhoneInCart } from './types/Phone';
import { addToFavorite, selectFavorite } from './store/cart/favoriteSlice';
import { ProductItem } from './pages/ProductItem/ProductItem';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setGadgetsInStorage] = useLocalStorage<PhoneInCart[]>('GADGETS_IN_CART', []);
  const [, setFavoriteInStorage] = useLocalStorage<Phone[]>('GADGETS_IN_FAVORITE', []);
  const gadgetsInCart = useAppSelector(selectCart);
  const gadgetsInFavorite = useAppSelector(selectFavorite);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const localStorageCart = window.localStorage.getItem('GADGETS_IN_CART');
    const localStorageFavorite = window.localStorage.getItem('GADGETS_IN_FAVORITE');

    if (localStorageCart) {
      const cart = JSON.parse(localStorageCart);

      cart.forEach((el: PhoneInCart) => dispatch(addToCart(el)));
    }

    if (localStorageFavorite) {
      const favorite = JSON.parse(localStorageFavorite);

      favorite.forEach((el: PhoneInCart) => dispatch(addToFavorite(el)));
    }
  }, []);

  useEffect(() => {
    setGadgetsInStorage(gadgetsInCart);
    setFavoriteInStorage(gadgetsInFavorite);
  }, [gadgetsInCart, gadgetsInFavorite]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className="section">
      {isMenuOpen
        ? <BurgerMenu toggleMenu={toggleMenu} />
        : (
          <>
            <Header toggleMenu={toggleMenu} />
            <ProductItem />
            <div className="container">
              <Routes>
                <Route path="*" element={<PageNotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/phones" element={<Phones />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/rights" element={<Rights />} />
                <Route path="/tablets" element={<Tablets />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorite" element={<Favorite />} />
              </Routes>
            </div>

            <Footer />
          </>
        )}
    </div>
  );
};
