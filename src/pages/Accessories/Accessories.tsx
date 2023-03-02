import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Pagination } from '../../components/pagination/Pagination';
import './Accessories.scss';
import { Catalog } from '../../components/catalog/Catalog';

export const Accessories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoading(true);
      const res = await axios.get('https://productcatalogapi-production-840a.up.railway.app/phones');

      setCards(res.data);
      setIsLoading(false);
    };

    fetchCards();
  }, []);

  return (
    <div className="wrapper">
      <Catalog
        isLoading={isLoading}
        products={cards}
        title="Accessories"
      >
      </Catalog>
      <Pagination
        perPage={17}
        totalCards={33}
        currentPage={2}
        onPageChange={(value) => value}
      />

    </div>
  );
};
