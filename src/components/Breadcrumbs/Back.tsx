import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import arrow from '../../img/icons/arrow_left.svg';

type BackProps = {
  to: string;
};

export const Back: React.FC<BackProps> = React.memo(({ to }) => {
  return (
    <div>
      <MuiBreadcrumbs
        className="backcrumb"
        separator={(
          <img
            src={arrow}
            alt="home"
          />
        )}
        aria-label="breadcrumb"
      >
        <></>
        <Link to={to}>Back</Link>
      </MuiBreadcrumbs>
    </div>
  );
});
