import React from 'react';
import './Footer.scss';
import { FooterButton } from './FooterButton/FooterButton';
import { FooterNav } from './FooterNav/FooterNav';
import { Logo } from './Logo/Logo';

export const Footer: React.FC = React.memo(() => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo />

        <FooterNav />
        <FooterButton />
      </div>
    </footer>
  );
});
