import React, { memo } from 'react';
import './MainGRID.scss';
import { Card } from '../Card/Card';
import { Phone } from '../../types/Phone';

type Props = {
  products: Phone[] | undefined
};

export const MainGRID: React.FC<Props> = memo(({ products }) => {
  return (
    <>
      {(products && products.length > 0) && (
        <div className="main-grid">
          {products?.map(product => (
            <Card phone={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
});
