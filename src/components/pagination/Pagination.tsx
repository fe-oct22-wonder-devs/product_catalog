import React from 'react';
import './Pagination.scss';

type Props = {
  perPage: string,
  currentPage: string,
  onPageChange: (newPage: number) => void;
  itemsCount: number,
};

export const Pagination: React.FC<Props> = ({
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
    <div>
      {totalPages > 1
        && (
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
                  className="pagination-buttons pagination-buttons__numbers"
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
                onPageChange(+currentPage > totalPages ? +currentPage + 1 : +currentPage);
              }}
            >
            </button>
          </div>
        )}
    </div>
  );
};
