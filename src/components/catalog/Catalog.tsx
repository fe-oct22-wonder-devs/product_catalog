import React from 'react';
import Select, { SingleValue } from 'react-select';
import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';
import './Catalog.scss';

export type SelectOptionType = {
  value: string;
  label: string;
};

type Props = {
  products: Phone[] | undefined,
  title: string;
  selectedSort: SelectOptionType | null;
  selectedPerPage: SelectOptionType | null;
  onSortChange: (selectedSort: SelectOptionType | null) => void;
  onQuantityChange: (setSelectedQuantity: SelectOptionType | null) => void;
};

export const sortOptions = [
  { value: 'Newest', label: 'Newest' },
  { value: 'Alphabetically', label: 'Alphabetically' },
  { value: 'Cheapest', label: 'Cheapest' },
];

export const perPageOptions = [
  { value: '16', label: '16' },
  { value: '32', label: '32' },
  { value: '48', label: '48' },
];

export const Catalog: React.FC<Props> = ({
  products,
  title,
  selectedPerPage,
  selectedSort,
  onSortChange,
  onQuantityChange,
}) => {
  return (
    <main className="catalog">
      <h1 className="catalog__category">
        {title}
      </h1>
      <p className="catalog__quantity">{`${products?.length} models`}</p>
      <div className="catalog__sort">
        <p className="catalog__sort--name">models</p>
        <Select
          placeholder={selectedSort}
          className="catalog__select"
          value={selectedSort}
          onChange={(newValue: SingleValue<SelectOptionType>) => onSortChange(newValue)}
          isMulti={false}
          options={sortOptions}
        />
      </div>
      <div className="catalog__sort">
        <p className="catalog__sort--name">models</p>
        <Select
          placeholder={selectedPerPage}
          className="catalog__select"
          value={selectedPerPage}
          onChange={(newValue: SingleValue<SelectOptionType>) => onQuantityChange(newValue)}
          isMulti={false}
          options={perPageOptions}
        />
      </div>

      <div className="catalog__list">
        {products?.map(product => (
          <Card phone={product} key={product.id} />
        ))}
      </div>

    </main>
  );
};
