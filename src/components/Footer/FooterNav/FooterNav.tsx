import React from 'react';
import { FooterNavLink } from '../FooterNavLink/FooterNavLink';

export const FooterNav: React.FC = React.memo(() => {
  return (
    <div className="footer__nav">
      <FooterNavLink to="https://github.com/fe-oct22-wonder-devs/product_catalog" linkTitle="GITHUB" />
      <FooterNavLink to="/contacts" linkTitle="CONTACTS" />
      <FooterNavLink to="/rights" linkTitle="RIGHTS" />
    </div>
  );
});
