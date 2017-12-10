'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import RootContainer from './components/Root';
// import { BrowserRouter as Router } from 'react-router-dom';


render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('main')
)
