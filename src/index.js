import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'Views/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/eduproj">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
