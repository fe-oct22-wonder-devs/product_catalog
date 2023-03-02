import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  linkTitle: string;
};

export const FooterNavLink: React.FC<Props> = React.memo(({ to, linkTitle }) => {
  return (
    <NavLink className="footer__link" to={to}>
      {linkTitle}
    </NavLink>
  );
});
