import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import HomePage from './HomePage.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <div className="noise"></div>
    <HomePage />
  </React.StrictMode>
);
