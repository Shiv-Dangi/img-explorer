import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { store, history } from './store/configureStore';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// const store = configureStore();
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
