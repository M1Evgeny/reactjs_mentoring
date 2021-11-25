import React from "react";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { HomePage } from "./pages/home-page";
import { PageNotFound } from "./pages/404";
import { IdProvider } from "./components/context/id-context";
import { ModalProvider } from "./components/context/modal-context";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Switch, Route, Redirect } from "react-router-dom";

export function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ModalProvider>
          <IdProvider>
            <Switch>
              <Redirect exact from="/" to="/search" />
              <Route exact path="/search" component={HomePage} />
              <Route path="/search/:searchQuery" component={HomePage} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </IdProvider>
        </ModalProvider>
      </Provider>
    </ErrorBoundary>
  );
}
