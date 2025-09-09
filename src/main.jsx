import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Get the root element from the HTML where the app will be mounted.
const rootElement = document.getElementById('root');

// 2. Create a React root on that element.
const root = ReactDOM.createRoot(rootElement);

// 3. Render the main App component into the root.
// React.StrictMode is a wrapper that helps identify potential problems in an app.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
