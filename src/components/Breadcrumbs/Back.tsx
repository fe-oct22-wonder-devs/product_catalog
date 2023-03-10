/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import arrow from '../../img/icons/arrow_left.svg';
import './Breadcrumbs.scss';

export const Back: React.FC = React.memo(() => {
  return (

    <span
      className="backcrumb"
      onClick={() => window.history.go(-1)}
    >
      <img
        src={arrow}
        alt="home"
      />
       &nbsp; &nbsp;Back
    </span>

  );
});
