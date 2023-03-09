import React, { useEffect, useState } from 'react';
import { MainSlider } from '../../components/mainSlider/MainSlider';
import './Home.scss';
import { Categories } from '../../components/Categories/Categories';
import { SliderCards } from '../../components/SliderCards/SliderCards';
import { Phone } from '../../types/Phone';
import { getHotPrices, getPhonesPagination } from '../../api/phones';
import { Loader } from '../../components/Loader/Loader';

export const Home: React.FC = () => {
  const [phonesFromServer, setPhonesFromServer] = useState<Phone[]>([]);
  const [bigDiscountGadgets, setBigDiscountGadgets] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getPhonesFromServer() {
    setIsLoading(true);
    const items = await getPhonesPagination({
      page: '1',
      perPage: '20',
      sort: 'newest',
    });

    const discountItem = await getHotPrices();

    setBigDiscountGadgets(discountItem);
    setPhonesFromServer(items);
    setIsLoading(false);
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
        {isLoading ? (
          <Loader />
        ) : (
          <SliderCards title="Brand new models" items={phonesFromServer} />
        )}

        <Categories />

        {isLoading ? (
          <Loader />
        ) : (
          <SliderCards title="Hot prices" items={bigDiscountGadgets} />
        )}
      </div>
    </>
  );
};
