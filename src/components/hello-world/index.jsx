import React from 'react';

const HelloWorld = () => {
    return React.createElement('h1',  {className: 'App-text'}, 'Hello from functional component with React.createElement');
}

export default HelloWorld;