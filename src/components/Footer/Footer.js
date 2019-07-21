import React from 'react';

import './Footer.css';

import githubLogo from './github.svg'

const Footer = () => {
    return (
      <footer className="Footer">
        <a href="https://github.com/Korka13/qoqtails"><img src={githubLogo} alt="Chech it on GitHub" /></a>
      </footer>
    )
  }

export default Footer;