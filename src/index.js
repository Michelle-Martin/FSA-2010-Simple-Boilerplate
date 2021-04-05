import React from "react";
import { render } from "react-dom";
import App from "./App";
import store from "../store";
import { Provider } from "react-redux";

const app = document.querySelector("#app");

render(
  <Provider store={store}>
    {" "}
    <App />,{" "}
  </Provider>,
  app
);
