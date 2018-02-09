// Needs Styling
// Find a better solution for Create
// Update, Delete, and Read all work, just make sure they don't break

// React Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Dependencies
import { HashRouter } from 'react-router-dom';

// Component Imports
import App from './Components/App';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
)