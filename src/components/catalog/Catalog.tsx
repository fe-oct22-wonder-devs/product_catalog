import React from 'react';
import './Catalog.scss';

type Props = {
  products: {
    id: number,
    name: string,
  }[],
  title: string;
};

export const Catalog: React.FC<Props> = ({ products, title }) => {
  return (
    <main className="catalog">
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
          <div className="catalog__card" key={product.id}>
            {product.name}
          </div>
        ))}
      </div>
    </main>
  );
};
