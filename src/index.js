import React from "react";
import { render } from "react-dom";

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import { createLogger } from 'redux-logger';

import thunkMiddleware from 'redux-thunk';
const loggerMiddleware = createLogger();

import App from "./App.js";

import style from "./sass/main.scss";

import rootReducer from './reducers';

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // Enables dispatch() functions
    loggerMiddleware // logs actions
  )
);


render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
