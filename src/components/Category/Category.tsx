import React, { memo } from 'react';
import './Category.scss';
import { Link } from 'react-router-dom';

interface Props {
  image: string,
  link: string,
  title: string,
  amount: string,
}

export const Category: React.FC<Props> = memo(({
  image,
  link,
  title,
  amount,
}) => {
  return (
    <article className="category">
      <Link to={link} className="category__link">
        <div className="category__img-container">
          <img className="category__img" src={image} alt={title} />
        </div>
        <h3 className="category__title">{title}</h3>
        <p className="category__counter">{amount}</p>
      </Link>
    </article>
  );
});
