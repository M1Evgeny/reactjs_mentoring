import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import HomePage from './pages/home-page'
import { IdProvider } from './pages/home-page/id-context';

function App() {
  return (
    <ErrorBoundary>
      <IdProvider>
        <HomePage />
      </IdProvider>
    </ErrorBoundary>
  );
}

export default App;