import React, { useEffect, useState } from 'react';
import { getPhonesPagination } from '../../api/phones';
import { Pagination } from '../../components/pagination/Pagination';
import { Catalog } from '../../components/catalog/Catalog';
import { Phone } from '../../types/Phone';
import './Tablets.scss';

const defaultQuantity = '16';

export const Tablets = () => {
  const [tabletsFromServer, setTabletsFromServer] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState('1');
  const [selectedSort, setSelectedSort] = useState<string | null>('Newest');
  const [selectedQuantity, setSelectedQuantity] = useState<string | null>(defaultQuantity);

  async function getTabletsFromServer() {
    const tablets = await getPhonesPagination({
      page: currentPage,
      perPage: selectedQuantity ?? undefined,
      sort: selectedSort || '1',
    });

    setTabletsFromServer(tablets);
  }

  useEffect(() => {
    getTabletsFromServer();
  }, []);

  return (
    <div className="wrapper">
      <Catalog
        selectedPerPage={selectedQuantity}
        selectedSort={selectedSort}
        products={tabletsFromServer}
        title="Mobile phones"
        onSortChange={(value) => setSelectedSort(value)}
        onQuantityChange={(value) => setSelectedQuantity(value)}
      />
      <Pagination
        totalCards={tabletsFromServer.length}
        perPage={selectedQuantity || defaultQuantity}
        onPageChange={(value) => setCurrentPage(value.toString())}
        currentPage={currentPage}
      />

    </div>
  );
};
