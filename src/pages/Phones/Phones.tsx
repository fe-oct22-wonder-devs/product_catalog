import React, { useEffect, useState } from 'react';
import { getPhonesPagination } from '../../api/phones';
import { Pagination } from '../../components/pagination/Pagination';
import { Catalog } from '../../components/catalog/Catalog';
import { Phone } from '../../types/Phone';
import './Phones.scss';

const defaultQuantity = '16';

export const Phones = () => {
  const [phonesFromServer, setPhonesFromServer] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState('1');
  const [selectedSort, setSelectedSort] = useState<string | null>('Newest');
  const [selectedQuantity, setSelectedQuantity] = useState<string | null>(defaultQuantity);

  async function getPhonesFromServer() {
    const phones = await getPhonesPagination({
      page: currentPage,
      perPage: selectedQuantity ?? undefined,
      sort: selectedSort || '1',
    });

    setPhonesFromServer(phones);
  }

  useEffect(() => {
    getPhonesFromServer();
  }, []);

  return (
    <div className="wrapper">
      <Catalog
        selectedPerPage={selectedQuantity}
        selectedSort={selectedSort}
        products={phonesFromServer}
        title="Mobile phones"
        onSortChange={(value) => setSelectedSort(value)}
        onQuantityChange={(value) => setSelectedQuantity(value)}
      />
      <Pagination
        totalCards={phonesFromServer.length}
        perPage={selectedQuantity || defaultQuantity}
        onPageChange={(value) => setCurrentPage(value.toString())}
        currentPage={currentPage}
      />

    </div>
  );
};
