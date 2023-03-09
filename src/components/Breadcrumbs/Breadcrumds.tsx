import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import arrow from '../../img/icons/arrow_right.svg';
import home from '../../img/icons/Home.svg';
import './Breadcrumbs.scss';

export const Breadcrumbs: React.FC = React.memo(({ children }) => {
  return (
    <div className="breadcrumbs">
      <MuiBreadcrumbs
        separator={(
          <img
            src={arrow}
            alt="home"
          />
        )}
        aria-label="breadcrumb"
      >
        <Link to="/">
          <img
            src={home}
            alt="home"
          />
        </Link>
        {children}
      </MuiBreadcrumbs>
    </div>
  );
});
