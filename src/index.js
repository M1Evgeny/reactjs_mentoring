import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { configureStore } from "./store/store";

const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
  <App Router={BrowserRouter} store={store} />,
  document.getElementById("root")
);
