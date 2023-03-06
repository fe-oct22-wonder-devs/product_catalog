import React from 'react';
import './ProductItem.scss';
import testPhone from '../../data/phoneToTest.json';
import mainTest from './mainTest.jpg';
import test1 from './test1.jpg';
import test2 from './test2.jpg';
import test3 from './test3.jpg';
import test4 from './test4.jpg';

const phoneToRender = testPhone;

const testImages = [mainTest, test1, test2, test3, test4];

export const ProductItem: React.FC = () => {
  const {
    name,
    // images,
    description,
    // capacityAvailable,
    // capacity,
    // priceRegular,
    // priceDiscount,
    // colorsAvailable,
    // color,
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = phoneToRender;

  return (
    <div className="item">
      <h1 className="item__title">{`${name} (iMT9G2FS/A)`}</h1>

      <section className="item__images-section">
        <img src={testImages[0]} alt="mainImage" className="item__image--main" />
        {testImages.slice(1).map(image => (
          <img
            src={image}
            alt={name}
            className="item__image--side"
            key={image}
          />
        ))}
      </section>

      <section className="item__about">
        <h2 className="item__about--title">About</h2>
        <div className="item__about--separator"></div>
        {description.map(descBlock => (
          <>
            <p className="item__about--blockTitle">{descBlock.title}</p>
            <div className="item__about--text">{descBlock.text}</div>
          </>
        ))}
      </section>

      <section className="item__specs">
        <h2 className="item__specs--title">Tech specs</h2>

        <div className="item__specs--separator"></div>

        <div className="item__specs--container">
          <p className="item__specs--name">Screen</p>
          <p className="item__specs--value">{screen}</p>
        </div>

        <div className="item__specs--container">
          <p className="item__specs--name">Resolution</p>
          <p className="item__specs--value">{resolution}</p>
        </div>

        <div className="item__specs--container">
          <p className="item__specs--name">Processor</p>
          <p className="item__specs--value">{processor}</p>
        </div>

        <div className="item__specs--container">
          <p className="item__specs--name">RAM</p>
          <p className="item__specs--value">{ram}</p>
        </div>

        <div className="item__specs--container">
          <p className="item__specs--name">Camera</p>
          <p className="item__specs--value">{camera}</p>
        </div>

        <div className="item__specs--container">
          <p className="item__specs--name">Zoom</p>
          <p className="item__specs--value">{zoom}</p>
        </div>

        <div className="item__specs--container">
          <p className="item__specs--name">Cell</p>
          <p className="item__specs--value">{cell}</p>
        </div>
      </section>
    </div>
  );
};
