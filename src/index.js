import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "store/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

export const rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  const newState = store.getState();
  rerenderEntireTree(newState);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
