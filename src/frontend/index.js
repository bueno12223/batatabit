import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import reducer from './reducers';
import App from './routers/App';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));
delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App isLogged={(preloadedState.userAcconut.email)} />
    </Router>
  </Provider>
  , document.getElementById('app'),
);
