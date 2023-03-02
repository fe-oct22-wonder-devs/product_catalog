import React from 'react';
import './Tablets.scss';
import { Catalog } from '../../components/catalog/Catalog';

export const Tablets = () => {
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
    <div className="wrapper">
      <Catalog
        products={productCards}
        title="Tablets"
      >
      </Catalog>
    </div>
  );
};
