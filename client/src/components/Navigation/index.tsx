import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">HOME</Link>
      <Link to="/tech">TECH</Link>
      <Link to="/store">STORE</Link>
      <Link to="/database">DATABASE</Link>
    </div>
  );
}
