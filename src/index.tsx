import React from 'react';
import ReactDOM from 'react-dom/client';
import Diagram from './Diagram';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Diagram />
  </React.StrictMode>
);
