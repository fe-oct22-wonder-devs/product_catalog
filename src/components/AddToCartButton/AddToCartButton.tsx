/* eslint-disable react/button-has-type */
import React from 'react';
import './AddToCartButton.scss';
import classNames from 'classnames';

type Props = {
  isAdded: boolean,
  onAdd: () => void,
};

export const AddToCartButton: React.FC<Props> = ({ isAdded, onAdd }) => {
  return (
    <button
      className={classNames(!isAdded ? 'button' : 'is-added')}
      onClick={onAdd}
    >
      {!isAdded
        ? (
          'Add to cart'
        ) : (
          'Added'
        )}
    </button>

  );
};
