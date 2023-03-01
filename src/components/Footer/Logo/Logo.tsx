import React from 'react';
import logo from '../images/footer__logo.svg';

export const Logo: React.FC = React.memo(() => {
  return (
    <a href="/" className="footer__logo-link">
      <img
        src={logo}
        alt="Nice gadgets logo"
        className="footer__logo"
      />
    </a>
  );
});
