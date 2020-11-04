import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data/data.json';
import './App.css';
import './index.css';

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);