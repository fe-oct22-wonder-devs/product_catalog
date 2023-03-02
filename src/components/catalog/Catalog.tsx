import React, { useState } from 'react';
import Select from 'react-select';
import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';
import './Catalog.scss';

type Props = {
  products: Phone[],
  title: string;
  isLoading: boolean;
};

export const Catalog: React.FC<Props> = ({ products, title, isLoading }) => {
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(null);

  const options = [
    { value: 'date_asc', label: 'Newest' },
    { value: 'date_desc', label: 'Oldest' },
    { value: 'price_asc', label: 'Cheapest' },
    { value: 'price_desc', label: 'Most expensive' },
  ];

  const quantity = [
    { value: '16', label: '16' },
    { value: '32', label: '32' },
    { value: '48', label: '48' },
  ];

  return (
    <main className="catalog">
      <h1 className="catalog__category">
        {title}
      </h1>
      <p className="catalog__quantity">{`${products.length} models`}</p>

      <Select
        className="catalog__select"
        value={selectedSort}
        onChange={event => setSelectedSort(event.target.value)}
        options={options}
      />
      <Select
        className="catalog__select"
        value={selectedQuantity}
        onChange={event => setSelectedQuantity(event.target.value)}
        options={quantity}
      />

      {!isLoading && (
        <div className="catalog__list">
          {products.map(product => (
            <Card phone={product} key={product.id} />
          ))}
        </div>
      )}
    </main>
  );
};
