import React from 'react';
import './Contacts.scss';
import Typography from '@mui/material/Typography';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumds';

export const Contacts: React.FC = () => {
  return (
    <div className="wrapper">
      <Breadcrumbs>
        <Typography color="text.primary">Contacts</Typography>
      </Breadcrumbs>
    </div>
  );
};
