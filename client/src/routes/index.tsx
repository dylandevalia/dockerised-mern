import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import TechInfo from './TechInfo';
import StoreDemo from './StoreDemo';
import Welcome from './Welcome';
import DatabaseDemo from './DatabaseDemo';
import SocketIODemo from './SocketIODemo';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Welcome />} />
        <Route path="tech" element={<TechInfo />} />
        <Route path="store" element={<StoreDemo />} />
        <Route path="database" element={<DatabaseDemo />} />
        <Route path="sockets" element={<SocketIODemo />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
