import React from 'react';
import './PageNotFound.scss';
import notFoundImage from '../../img/Page_not_found/not_found.png';

export const PageNotFound = () => (
  <div className="wrapper">
    <div className="not-found">
      <img src={notFoundImage} alt="page not found" className="not-found__image" />

      <button
        type="button"
        className="not-found__button"
        onClick={() => window.history.go(-1)}
      >
        Go Back
      </button>
    </div>
  </div>
);
