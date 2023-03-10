import React from 'react';
import './Accessories.scss';
import Typography from '@mui/material/Typography';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumds';
import noResult from '../../img/no_result.png';

export const Accessories = () => {
  return (
    <div className="wrapper">
      <Breadcrumbs>
        <Typography color="text.primary">Accessories</Typography>
      </Breadcrumbs>
      <h1 className="title">Accessories</h1>
      <img src={noResult} alt="No result" style={{ display: 'block', height: '50vh', margin: '0 auto' }} />
    </div>
  );
};
