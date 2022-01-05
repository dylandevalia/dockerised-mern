import React from 'react';
// import ReactDOM from 'react-dom';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation';

export default function App() {
  return (
    <div>
      <h1>Dockerised MERN</h1>
      <Navigation />
      <Outlet />
    </div>
  );
}
