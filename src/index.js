import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./api";
import {ActionCreator} from "./store/action";
import {checkAuth} from "./store/api-action";
import {reducer} from "./store/reducer";
import App from "./components/app/app";
import {AuthorizationStatus} from "./const";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

store.dispatch(checkAuth())
.finally(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
