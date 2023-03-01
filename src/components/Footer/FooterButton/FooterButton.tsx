import React from 'react';
// import toTop from '../images/back_to_top.svg';

export const FooterButton: React.FC = React.memo(() => {
  return (
    <a href="/" className="footer__link footer__link-back-to-top">
      Back to top
    </a>
  );
});
