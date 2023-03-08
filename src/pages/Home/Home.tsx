import React from 'react';
import { MainSlider } from '../../components/mainSlider/MainSlider';
import './Home.scss';
import { Categories } from '../../components/Categories/Categories';
// import { SliderNewModels } from '../../components/sliderNewModels/SliderNewModels';

export const Home: React.FC = () => {
  return (
    <>
      <div className="home-wrapper">
        <MainSlider />
      </div>
      <div className="wrapper">
        {/* <SliderNewModels /> */}
        <Categories />
      </div>
    </>
  );
};
