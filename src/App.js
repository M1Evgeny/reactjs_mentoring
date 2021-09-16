import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import HomePage from './pages/home-page'

function App() {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
}

export default App;