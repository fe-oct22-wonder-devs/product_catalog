import React from 'react';
import { Catalog } from '../../components/catalog/Catalog';
import './Phones.scss';

export const Phones = () => {
  const productCards = [
    { name: 'Product card', id: 1 },
    { name: 'Product card', id: 2 },
    { name: 'Product card', id: 3 },
    { name: 'Product card', id: 4 },
    { name: 'Product card', id: 5 },
    { name: 'Product card', id: 6 },
    { name: 'Product card', id: 7 },
    { name: 'Product card', id: 8 },
    { name: 'Product card', id: 9 },
    { name: 'Product card', id: 10 },
  ];

  return (
    <Catalog
      products={productCards}
      title="Mobile phones"
    >
    </Catalog>
  );
};
