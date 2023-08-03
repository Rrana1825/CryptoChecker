import React from 'react';
import createRoot from 'react-dom/client';
import App from './App';

const root = createRoot.createRoot(document.getElementById('root'));
root.render(
    <App />
);
