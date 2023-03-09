import React from 'react';
import './Accessories.scss';
import noResult from '../../img/no_result.png';

export const Accessories = () => {
  return (
    <div className="wrapper">
      <h1 className="title">Accessories</h1>
      <img src={noResult} alt="No result" style={{ display: 'block', height: '50vh', margin: '0 auto' }} />
    </div>
  );
};
