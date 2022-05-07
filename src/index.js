import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import "./globa.css";
import { ResultContextProvider } from './components/contexts/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ResultContextProvider>
    <Router>
      <App />
    </Router>  
  </ResultContextProvider>,   
  // </React.StrictMode>
);


