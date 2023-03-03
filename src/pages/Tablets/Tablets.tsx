import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPhonesPagination } from '../../api/phones';
import { Pagination } from '../../components/pagination/Pagination';
import { Phone } from '../../types/Phone';
import './Tablets.scss';
import {
  Catalog,
  perPageOptions,
  SelectOptionType,
  sortOptions,
} from '../../components/catalog/Catalog';

const defaultQuantity = perPageOptions[0];
const defaultSort = sortOptions[0];

export const Tablets = () => {
  const [tabletsFromServer, setTabletsFromServer] = useState<Phone[]>();
  const [currentPage, setCurrentPage] = useState('1');
  const [selectedSort, setSelectedSort] = useState<SelectOptionType | null>(defaultSort);
  const [selectedQuantity, setSelectedQuantity]
    = useState<SelectOptionType | null>(defaultQuantity);
  const [queryParams, setQueryParams] = useSearchParams();

  async function getTabletsFromServer() {
    const phones = await getPhonesPagination({
      page: currentPage,
      perPage: selectedQuantity?.value ?? undefined,
      sort: selectedSort?.value || undefined,
    });

    setTabletsFromServer(phones);

    const params: Record<string, string> = {
      page: currentPage,
    };

    if (selectedQuantity !== null) {
      params.perPage = selectedQuantity.value;
    }

    if (selectedSort !== null) {
      params.sort = selectedSort.value;
    }

    const accessories = await getPhonesPagination(params);

    setTabletsFromServer(accessories);
  }

  useEffect(() => {
    getTabletsFromServer();
  }, []);

  function sortChangeHandler(newSort: { value: string, label: string } | null) {
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
    }
  }

  return (
    <div className="wrapper">
      <Catalog
        selectedPerPage={selectedQuantity}
        selectedSort={selectedSort}
        products={tabletsFromServer}
        title="Tablets"
        onSortChange={(value: SelectOptionType | null) => sortChangeHandler(value)}
        onQuantityChange={(value: SelectOptionType | null) => perPageChangeHandler(value)}
      />
      <Pagination
        totalCards={tabletsFromServer?.length}
        perPage={selectedQuantity?.value || defaultQuantity.value}
        onPageChange={(value) => setCurrentPage(value.toString())}
        currentPage={currentPage}
      />

    </div>
  );
};
