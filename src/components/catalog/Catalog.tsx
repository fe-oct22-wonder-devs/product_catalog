import React from 'react';
import Select, { SingleValue } from 'react-select';
import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';
import './Catalog.scss';

type Props = {
  products: Phone[],
  title: string;
  selectedSort: string | null;
  selectedPerPage: string | null;
  onSortChange: (selectedSort: string | null) => void;
  onQuantityChange: (setSelectedQuantity: string | null) => void;
};

export const Catalog: React.FC<Props> = ({
  products,
  title,
  selectedPerPage,
  selectedSort,
  onSortChange,
  onQuantityChange,
}) => {
  const sort = [
    { value: 'date_asc', label: 'Newest' },
    { value: 'alphabet_desc', label: 'Alphabetically' },
    { value: 'price_asc', label: 'Cheapest' },
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
        onChange={(newValue: SingleValue<string>) => onSortChange(newValue)}
        isMulti={false}
        options={sort}
      />
      <Select
        className="catalog__select"
        value={selectedPerPage}
        onChange={(newValue: SingleValue<string>) => onQuantityChange(newValue)}
        isMulti={false}
        options={quantity}
      />

      <div className="catalog__list">
        {products.map(product => (
          <Card phone={product} key={product.id} />
        ))}
      </div>

    </main>
  );
};
