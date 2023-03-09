import React from 'react';
import './Accessories.scss';
import Typography from '@mui/material/Typography';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumds';

export const Accessories = () => {
  return (
    <div className="wrapper">
      <Breadcrumbs>
        <Typography color="text.primary">Accessories</Typography>
      </Breadcrumbs>
    </div>
  );
};
