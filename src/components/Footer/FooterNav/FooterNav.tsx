import React from 'react';
import { FooterNavLink } from '../FooterNavLink/FooterNavLink';

export const FooterNav: React.FC = React.memo(() => {
  return (
    <div className="footer__nav">
      <FooterNavLink to="https://github.com/orgs/fe-oct22-wonder-devs/repositories?type=source" linkTitle="GITHUB" />
      <a href="https://github.com/orgs/fe-oct22-wonder-devs/people" className="footer__link">CONTACTS</a>
      <FooterNavLink to="/rights" linkTitle="RIGHTS" />
    </div>
  );
});
