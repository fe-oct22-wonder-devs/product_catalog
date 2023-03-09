import React, { useEffect, useState } from 'react';
import { MainSlider } from '../../components/mainSlider/MainSlider';
import './Home.scss';
import { Categories } from '../../components/Categories/Categories';
import { SliderCards } from '../../components/SliderCards/SliderCards';
import { Phone } from '../../types/Phone';
import { getPhonesPagination } from '../../api/phones';

export const Home: React.FC = () => {
  const [phonesFromServer, setPhonesFromServer] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getPhonesFromServer() {
    setIsLoading(true);
    const items = await getPhonesPagination({
      page: '1',
      perPage: '20',
      sort: 'newest',
    });

    setIsLoading(false);
    setPhonesFromServer(items);
  }

  useEffect(() => {
    getPhonesFromServer();
  }, []);

  return (
    <>
      <div className="home-wrapper">
        <MainSlider />
      </div>
      <div className="wrapper">
        {!isLoading && (
          <SliderCards title="Brand new models" items={phonesFromServer} />
        )}
        <Categories />
      </div>
    </>
  );
};
