import React from 'react';
import toTop from '../images/back_to_top.svg';

const handleClickBackToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

export const FooterButton: React.FC = React.memo(() => {
  return (
    <div
      className="footer__back-to-top"
    >
      <button
        type="button"
        className="footer__back-to-top"
        onClick={handleClickBackToTop}
      >
        <p className="footer__link footer__link-back-to-top">
          Back to top
        </p>
      </button>

      <button
        type="button"
        className="footer__back-to-top footer__button-back-to-top"
        onClick={handleClickBackToTop}
      >
        <img
          src={toTop}
          alt="back to top"
        />
      </button>
    </div>
  );
});
