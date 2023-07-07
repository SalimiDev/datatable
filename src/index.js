import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import DarkModeContext from './context/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <DarkModeContext>
            <App />
        </DarkModeContext>
    </HashRouter>,
);
