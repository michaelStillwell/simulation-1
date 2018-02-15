// React Imports
import React, { Component } from 'react';

// Component Imports
import Header from './Header/Header_Container';

// Routes
import routes from './routes';

// Style Import
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            name:  '',
            price: '',
        }
    }

    render() {
        return (
                <div>
                    {routes}
                </div>
        )
    }
}

export default App; 