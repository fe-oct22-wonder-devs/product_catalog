import React, { memo } from 'react';
import './Favorite.scss';
import { MainGRID } from '../../components/MainGRID/MainGRID';
import { useAppSelector } from '../../store/hooks';
import { selectFavorite } from '../../store/cart/favoriteSlice';

export const Favorite: React.FC = memo(() => {
  const gadgetsInFavorite = useAppSelector(selectFavorite);

  return (
    <div className="wrapper">
      <h1 className="title">Favorite</h1>
      <p className="catalog__quantity">{`${gadgetsInFavorite.length} models`}</p>
      <MainGRID products={gadgetsInFavorite} />
    </div>
  );
});
