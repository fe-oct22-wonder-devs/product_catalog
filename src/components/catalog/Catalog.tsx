import React from 'react';
import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';
import './Catalog.scss';

type Props = {
  products: Phone[],
  title: string;
};

export const Catalog: React.FC<Props> = ({ products, title }) => {
  return (
    <main className="catalog">
      <div className="wrapper">
        <h1 className="catalog__category">
          {title}
        </h1>
        <p className="catalog__quantity">{`${products.length} models`}</p>

        <select name="sort" className="catalog__sort">
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Cheapest">Cheapest</option>
          <option value="Cheapest">Most expensive</option>
        </select>

        <div className="catalog__list">
          {products.map(product => (
            <Card phone={product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  );
};
