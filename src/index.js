// Needs Styling
// Fix the input page for conditional rendering of buttons

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