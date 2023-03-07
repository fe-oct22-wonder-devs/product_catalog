import React from 'react';
import './Home.scss';
import { Categories } from '../../components/Categories/Categories';

export const Home = () => {
  return (
    <div className="wrapper">
      <h1>Home</h1>
      <Categories />
    </div>
  );
};
