import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {createAPI} from "./api";
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
// import films from "./mocks/films";
// import reviews from "./mocks/reviews";
// import {ActionCreator} from './store/action';
// import {checkAuth} from "./store/api-actions";

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

// store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
