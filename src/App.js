import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div>Ahoy!</div>
    <div id='blue'>devMode - {process.env.NODE_ENV}</div>
    </>
  );
}

export default App;