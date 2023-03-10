import React, { useEffect, useState } from 'react';
import { MainSlider } from '../../components/mainSlider/MainSlider';
import './Home.scss';
import { Categories } from '../../components/Categories/Categories';
import { SliderCards } from '../../components/SliderCards/SliderCards';
import { Phone } from '../../types/Phone';
import { getHotPrices, getPhonesPagination } from '../../api/phones';
// import { Loader } from '../../components/Loader/Loader';
import loaderPhoto from '../../img/loader.jpeg';

const emptyProduct = {
  id: '1',
  category: 'phones',
  phoneId: 'Loading...',
  itemId: 'Loading...',
  name: 'Loading...',
  fullPrice: 0,
  price: 0,
  screen: 'Loading...',
  capacity: 'Loading...',
  color: 'Loading...',
  ram: 'Loading...',
  year: 2016,
  image: loaderPhoto,
};

const emptyProducts = new Array(5).fill(emptyProduct);

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
        <SliderCards title="Brand new models" items={isLoading ? emptyProducts : phonesFromServer} />

        <Categories />

        <SliderCards title="Hot prices" items={isLoading ? emptyProducts : bigDiscountGadgets} />
      </div>
    </>
  );
};
