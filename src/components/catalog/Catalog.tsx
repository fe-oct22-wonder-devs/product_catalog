import React, { useState } from 'react';
import Select from 'react-select';
import './Catalog.scss';

type Props = {
  products: {
    id: number,
    name: string,
  }[],
  title: string;
};

export const Catalog: React.FC<Props> = ({ products, title }) => {
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [selectedQuantity, setSelectedQuantity] = useState('Newest');

  const options = [
    { value: 'Newest', label: 'Newest' },
    { value: 'Oldest', label: 'Oldest' },
    { value: 'Cheapest', label: 'Cheapest' },
    { value: 'Most expensive', label: 'Most expensive' },
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
