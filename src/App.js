import React from 'react';
import './App.css';
import { ErrorBoundary } from './ErrorBoundary';
import { HomePage } from './pages/home-page'
import { IdProvider } from './components/context/id-context';
import { ModalProvider } from './components/context/modal-context';


export function App() {
  return (
    <ErrorBoundary>
      <ModalProvider>
        <IdProvider>
          <HomePage />
        </IdProvider>
      </ModalProvider>
    </ErrorBoundary>
  );
}
