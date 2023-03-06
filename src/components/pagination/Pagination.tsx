import React from 'react';
import './Pagination.scss';
import Pagination from '@mui/material/Pagination';

type Props = {
  perPage: string,
  currentPage: string,
  onPageChange: (newPage: number) => void;
  itemsCount: number,
};

export const ItemsPagination: React.FC<Props> = ({
  onPageChange,
  perPage,
  currentPage,
  itemsCount,
}) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(itemsCount / +perPage);

  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <Pagination
      className="pagination"
      count={totalPages}
      variant="outlined"
      page={+currentPage}
      onChange={(e, value) => onPageChange(value)}
    />
  );
};
