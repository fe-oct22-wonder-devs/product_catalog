import React, { useEffect, useState } from 'react';
import { Catalog } from '../../components/catalog/Catalog';
import './Phones.scss';
import { getPhonesPagination } from '../../api/phones';
import { Phone } from '../../types/Phone';
// import phonesFromServer from '../../data/phones.json';

export const Phones = () => {
  const [phonesFromServer, setPhonesFromServer] = useState<Phone[]>([]);

  async function getPhonesFromServer() {
    const phones = await getPhonesPagination({
      page: '1',
      perPage: '4',
    });

    setPhonesFromServer(phones);
    // eslint-disable-next-line no-console
    console.log(phonesFromServer);
  }

  useEffect(() => {
    getPhonesFromServer();
  });

  return (
    <div className="wrapper">
      <Catalog
        products={phonesFromServer}
        title="Mobile phones"
      >
      </Catalog>
    </div>
  );
};
