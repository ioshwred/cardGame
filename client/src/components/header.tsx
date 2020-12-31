/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export const Header = () => {
 return (
  <header>
    <nav className="navbar navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="/"><Icon.Controller />&nbsp;Card Game</a>
    </nav>
  </header>
 );
};