import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div>Ahoy!</div>
    <div id='blue'>devMode - {process.env.MODE}</div>
    </>
  );
}

export default App;