import React, { useEffect } from 'react';
import Select, { SingleValue } from 'react-select';
import { colourStyles } from '../../styles/utils/helpers';
import { Phone } from '../../types/Phone';
import './Catalog.scss';
import { MainGRID } from '../MainGRID/MainGRID';
import { Loader } from '../Loader/Loader';

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
  isLoading: boolean;
};

export const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'alphabetically', label: 'Alphabetically' },
  { value: 'cheapest', label: 'Cheapest' },
];

export const perPageOptions = [
  { value: '4', label: '4' },
  { value: '8', label: '8' },
  { value: '16', label: '16' },
];

export const Catalog: React.FC<Props> = ({
  products,
  title,
  itemsCount,
  selectedPerPage,
  selectedSort,
  onSortChange,
  onQuantityChange,
  isLoading,
}) => {
  useEffect(() => {
    perPageOptions[3] = { value: `${itemsCount}`, label: 'all' };
  }, [itemsCount]);

  return (
    <main className="catalog">
      <h1 className="catalog__category">
        {title}
      </h1>
      <p className="catalog__quantity">{`${itemsCount} models`}</p>
      <div className="catalog__filters">
        <div className="catalog__sort">
          <p className="catalog__sort--name">Sort by</p>
          <Select
            placeholder={selectedSort}
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
            value={selectedPerPage}
            onChange={(newValue: SingleValue<SelectOptionType>) => onQuantityChange(newValue)}
            isMulti={false}
            options={perPageOptions}
            styles={colourStyles}
          />
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <MainGRID products={products} />
      )}
    </main>
  );
};
