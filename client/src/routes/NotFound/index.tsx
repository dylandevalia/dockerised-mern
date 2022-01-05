import React from 'react';
import { Link } from 'react-router-dom';

export default function Empty() {
  return (
    <div>
      This page is empty...
      <Link to="/">Click here</Link> to return home
    </div>
  );
}
