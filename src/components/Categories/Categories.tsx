import React, { memo, useEffect, useState } from 'react';
import './Categories.scss';
import phoneImg from '../../img/categotyImg/category-phones.png';
import tabletImg from '../../img/categotyImg/category-tablets.png';
import accessoriesImg from '../../img/categotyImg/category-accessories.png';
import { Category } from '../Category/Category';
import { getPhonesCount, getTabletsCount } from '../../api/phones';

export const Categories: React.FC = memo(() => {
  const [phoneCounter, setPhoneCounter] = useState(0);
  const [tabletCounter, setTabletCounter] = useState(0);
  const setCount = async () => {
    const phoneCount = await getPhonesCount();
    const tabletCount = await getTabletsCount();

    setPhoneCounter(phoneCount);
    setTabletCounter(tabletCount);
  };

  useEffect(() => {
    setCount();
  }, []);

  return (
    <section className="categories">
      <h2 className="categories__title">Shop by category</h2>
      <div className="categories__wraper">
        <Category
          title="Mobile Phones"
          image={phoneImg}
          link="/phones"
          amount={`${phoneCounter} models`}
        />
        <Category
          title="Tablets"
          image={tabletImg}
          link="/tablets"
          amount={`${tabletCounter} models`}
        />
        <Category
          title="Accessories"
          image={accessoriesImg}
          link="/accessories"
          amount={`${0} models`}
        />
      </div>
    </section>
  );
});
