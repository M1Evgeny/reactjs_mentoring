import React from 'react';
import './App.css';
import { ErrorBoundary } from './ErrorBoundary';
import { HomePage } from './pages/home-page'
import { ModalProvider } from './components/context/modal-context';

export function App() {
  return (
    <ErrorBoundary>
      <ModalProvider>
        <HomePage />
      </ModalProvider>
    </ErrorBoundary>
  );
}
