import React, { FC, memo } from 'react';
import { Puff } from 'react-loader-spinner';

export const Loader: FC = memo(() => {
  return (
    <Puff
      height="150"
      width="150"
      radius={1}
      color="pink"
      ariaLabel="puff-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        padding: '179px',
      }}
      wrapperClass=""
      // visible={true}
    />
  );
});
