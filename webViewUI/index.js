import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import './index.scss';

window.updateData = json => {
  console.log(json)
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')

);

//window.location = "https://www.apple.com"
