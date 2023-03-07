import React from 'react';
import { MainSlider } from '../../components/mainSlider/MainSlider';
import './Home.scss';
import { Categories } from '../../components/Categories/Categories';

export const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <MainSlider />
      </div>
      <div className="wrapper">
        <Categories />
      </div>
    </>
  );
};
