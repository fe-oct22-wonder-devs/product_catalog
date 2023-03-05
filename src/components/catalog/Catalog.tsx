import React from 'react';
import Select, { SingleValue } from 'react-select';
import { colourStyles } from '../../styles/utils/helpers';
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
  itemsCount: number;
  selectedSort: SelectOptionType | null;
  selectedPerPage: SelectOptionType | null;
  onSortChange: (selectedSort: SelectOptionType | null) => void;
  onQuantityChange: (selectedQuantity: SelectOptionType | null) => void;
};

export const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'alphabetically', label: 'Alphabetically' },
  { value: 'cheapest', label: 'Cheapest' },
];

export const perPageOptions = [
  { value: '16', label: '16' },
  { value: '32', label: '32' },
  { value: '48', label: '48' },
];

export const Catalog: React.FC<Props> = ({
  products,
  title,
  itemsCount,
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
      <p className="catalog__quantity">{`${itemsCount} models`}</p>
      <div className="catalog__sort">
        <p className="catalog__sort--name">Sort by</p>
        <Select
          placeholder={selectedSort}
          className="catalog__select"
          value={selectedSort}
          onChange={(newValue: SingleValue<SelectOptionType>) => onSortChange(newValue)}
          isMulti={false}
          options={sortOptions}
          styles={colourStyles}
        />
      </div>
      <div className="catalog__sort">
        <p className="catalog__sort--name">Items on page</p>
        <Select
          placeholder={selectedPerPage}
          className="catalog__select"
          value={selectedPerPage}
          onChange={(newValue: SingleValue<SelectOptionType>) => onQuantityChange(newValue)}
          isMulti={false}
          options={perPageOptions}
          styles={colourStyles}
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
