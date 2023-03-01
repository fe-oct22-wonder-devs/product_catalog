import React from 'react';
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
import { Card } from './components/Card/Card';

const phoneFromServer = {
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
};

export const App: React.FC = () => {
  return (
    <div className="section">
      <Header />

      <Card phone={phoneFromServer} />

      <div className="container">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/rights" element={<Rights />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};
