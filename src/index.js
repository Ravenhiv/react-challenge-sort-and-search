import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import data from './data/data'

ReactDOM.render(
  <App users={data} />,
  document.getElementById('root')
);
