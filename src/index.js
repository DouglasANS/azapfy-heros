import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import DataProvider from "./context/DataContext";

ReactDOM.render(
  <DataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataProvider>,
  document.getElementById('root')
);
