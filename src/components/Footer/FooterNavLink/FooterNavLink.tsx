import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  to: string;
  linkTitle: string;
};

export const FooterNavLink: React.FC<Props> = React.memo(({ to, linkTitle }) => {
  return (
    <Link className="footer__link" to={to}>
      {linkTitle}
    </Link>
  );
});
