import React from "react";
import "./App.css";
import { ErrorBoundary } from "./ErrorBoundary";
import { HomePage } from "./pages/home-page";
import { IdProvider } from "./components/context/id-context";
import { ModalProvider } from "./components/context/modal-context";
import { Provider } from "react-redux";
import { store } from "./store/store";

export function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ModalProvider>
          <IdProvider>
            <HomePage />
          </IdProvider>
        </ModalProvider>
      </Provider>
    </ErrorBoundary>
  );
}
