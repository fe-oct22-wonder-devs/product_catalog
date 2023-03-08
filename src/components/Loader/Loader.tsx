import React, { FC, memo } from 'react';
import { Puff } from 'react-loader-spinner';

export const Loader: FC = memo(() => {
  return (
    <Puff
      height="180"
      width="180"
      radius={1}
      color="pink"
      ariaLabel="puff-loading"
      wrapperStyle={{
        display: 'flex',
        'justify-content': 'center',
        height: '100%',
        padding: '30px',
      }}
      wrapperClass=""
      // visible={true}
    />
  );
});
