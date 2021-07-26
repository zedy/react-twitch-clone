// libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';

// components 
import App from './App';

// redux
import { store } from './redux/store';

// utils
import history from "./utils/history";

ReactDOM.render(
  <Provider store={ store }>
    <React.StrictMode>
      <Router history={history}>
          <App />
        </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
