import React from 'react';
import './Pagination.scss';

type Props = {
  perPage: string,
  totalCards: number | undefined,
  currentPage: string,
  onPageChange: (newPage: number) => void;
};

export const Pagination: React.FC<Props> = ({
  totalCards,
  onPageChange,
  perPage,
  currentPage,
}) => {
  const pageNumbers = [];

  if (totalCards) {
    const totalPages = Math.ceil(totalCards / +perPage);

    for (let i = 1; i <= totalPages; i += 1) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="pagination">
      <button
        type="button"
        className="pagination-buttons pagination-buttons__arrow pagination-buttons__arrow--left"
        onClick={() => {
          onPageChange(+currentPage > 1 ? +currentPage - 1 : +currentPage);
        }}
      >
      </button>

      <div className="pagination-list">
        {pageNumbers.map(pageNumber => (
          <button
            type="button"
            key={pageNumber}
            className="pagination-buttons  "
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="pagination-buttons pagination-buttons__arrow pagination-buttons__arrow--right"
        onClick={() => {
          onPageChange(+currentPage ? +currentPage + 1 : +currentPage);
        }}
      >
      </button>
    </div>
  );
};
