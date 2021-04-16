import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes/index';
import history from './services/history';

import GlobalStyle from './styles/global.js';

function App(): React.ReactElement {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
