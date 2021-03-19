import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    <h1>React is running</h1>,
    document.getElementById('root')
);