import React, { memo } from 'react';
import './Favorite.scss';
import { MainGRID } from '../../components/MainGRID/MainGRID';
import { useAppSelector } from '../../store/hooks';
import { selectFavorite } from '../../store/cart/favoriteSlice';
import emptyHart from '../../img/empty-heart1.webp';

export const Favorite: React.FC = memo(() => {
  const gadgetsInFavorite = useAppSelector(selectFavorite);

  return (
    <div className="wrapper">
      <h1 className="title">Favorite</h1>
      <p className="catalog__quantity">{`${gadgetsInFavorite.length} models`}</p>
      {gadgetsInFavorite.length === 0 && (
        <img
          src={emptyHart}
          alt="empty hart"
          style={{
            display: 'block',
            height: '50vh',
            margin: '0 auto',
            borderRadius: '20px',
          }}
        />
      )}
      <MainGRID products={gadgetsInFavorite} />
    </div>
  );
});
