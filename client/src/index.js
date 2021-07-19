import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Router } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './redux/store';

import history from "./utils/history";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={history}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
