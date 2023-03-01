import React from 'react';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Phones } from './pages/Phones/Phones';
import { Tablets } from './pages/Tablets/Tablets';
import { Accessories } from './pages/Accessories/Accessories';
import { Header } from './components/header/Header';

export const App: React.FC = () => {
  return (
    <div className="section">
      <Header />
      <div className="container">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </div>
    </div>
  );
};
