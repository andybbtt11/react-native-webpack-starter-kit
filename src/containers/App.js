import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import * as reducers from '../reducers';
import BannerApp from './BannerApp';

const reducer = combineReducers(reducers);
const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger)
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BannerApp/>
      </Provider>
    );
  }
}
