import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { getPhonesCount, getPhonesPagination } from '../../api/phones';
import { Phone } from '../../types/Phone';
import './Phones.scss';
import {
  Catalog,
  SelectOptionType,
  sortOptions,
  perPageOptions,
} from '../../components/catalog/Catalog';
import { ItemsPagination } from '../../components/pagination/Pagination';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumds';

const defaultQuantity = perPageOptions[1];
const defaultSort = sortOptions[0];

export const Phones = () => {
  const [phonesFromServer, setPhonesFromServer] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState('1');
  const [selectedSort, setSelectedSort] = useState<SelectOptionType | null>(defaultSort);
  const [selectedQuantity, setSelectedQuantity]
    = useState<SelectOptionType | null>(defaultQuantity);
  const [queryParams, setQueryParams] = useSearchParams();
  const [itemsCount, setItemsCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getPhonesFromServer() {
    setIsLoading(true);
    const items = await getPhonesPagination({
      page: currentPage,
      perPage: selectedQuantity?.value ?? undefined,
      sort: selectedSort?.value || undefined,
    });

    setPhonesFromServer(items);
    setIsLoading(false);
  }

  useEffect(() => {
    getPhonesFromServer();
  }, [currentPage, selectedQuantity, selectedSort, itemsCount]);

  async function sortChangeHandler(newSort: { value: string, label: string } | null) {
    if (newSort !== null) {
      setSelectedSort(newSort);
      queryParams.set('sort', newSort.value);
      setQueryParams(queryParams);
    }
  }

  async function perPageChangeHandler(newPerPage: SelectOptionType | null) {
    if (newPerPage !== null) {
      setSelectedQuantity(newPerPage);
      queryParams.set('quantity', newPerPage.value);
      setQueryParams(queryParams);
      setCurrentPage('1');
    }
  }

  async function currentPageChangeHandler(newPage: string) {
    if (newPage !== null) {
      setCurrentPage(newPage);
      queryParams.set('page', newPage);
      setQueryParams(queryParams);
    }
  }

  async function getTotalCount() {
    const totalCount = await getPhonesCount();

    setItemsCount(Number(totalCount));
  }

  useEffect(() => {
    getTotalCount();
  }, [itemsCount]);

  return (
    <div className="wrapper">
      <Breadcrumbs>
        <Typography color="text.primary">Phones</Typography>
      </Breadcrumbs>
      <Catalog
        itemsCount={itemsCount}
        selectedPerPage={selectedQuantity}
        selectedSort={selectedSort}
        products={phonesFromServer}
        title="Mobile phones"
        onSortChange={(value: SelectOptionType | null) => sortChangeHandler(value)}
        onQuantityChange={(value: SelectOptionType | null) => perPageChangeHandler(value)}
        isLoading={isLoading}
      />
      <ItemsPagination
        perPage={selectedQuantity?.value || defaultQuantity.value}
        onPageChange={(value) => currentPageChangeHandler(value.toString())}
        currentPage={currentPage}
        itemsCount={itemsCount}
      />
    </div>
  );
};
