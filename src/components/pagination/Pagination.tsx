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
        className="pag-buttons pag-buttons__arrow pag-buttons__arrow--left"
        onClick={() => {
          onPageChange(+currentPage > 1 ? +currentPage - 1 : +currentPage);
        }}
      >
      </button>

      <div className="pag-list">
        {pageNumbers.map(pageNumber => (
          <button
            type="button"
            key={pageNumber}
            className="pag-buttons pag-list__item pag-list__item--link "
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="pag-buttons pag-buttons__arrow pag-buttons__arrow--right"
        onClick={() => {
          onPageChange(+currentPage ? +currentPage + 1 : +currentPage);
        }}
      >
      </button>
    </div>
  );
};
