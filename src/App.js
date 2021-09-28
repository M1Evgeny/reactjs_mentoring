import React from 'react';
import './App.css';
import { ErrorBoundary } from './ErrorBoundary';
import { HomePage } from './pages/home-page'

export function App() {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}
