import React from 'react';
import './Rights.scss';
import Typography from '@mui/material/Typography';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumds';

export const Rights = () => {
  return (
    <div className="wrapper">
      <Breadcrumbs>
        <Typography color="text.primary">Rights</Typography>
      </Breadcrumbs>
    </div>

  );
};
