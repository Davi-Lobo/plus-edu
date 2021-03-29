import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import App from './App';

const TITLE = "+Edu - Página Inicial"

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>{ TITLE }</title>
    </Helmet>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);