import React from 'react';
import { Catalog } from '../../components/catalog/Catalog';
import './Phones.scss';
import phonesFromServer from '../../data/phones.json';

export const Phones = () => {
  return (
    <div className="wrapper">
      <Catalog
        products={phonesFromServer}
        title="Mobie phones"
      >
      </Catalog>
    </div>
  );
};
