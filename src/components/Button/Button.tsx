/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './Button.scss';
import classNames from 'classnames';

export const Button: React.FC = () => {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <button
      className={classNames(!isAdded ? 'button' : 'is-added')}
      onClick={() => setIsAdded(!isAdded)}
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
