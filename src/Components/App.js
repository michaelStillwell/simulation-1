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
            // shelf: ['a', 'b', 'c', 'd'],
            // bin:   [],
            name:  '',
            price: '',
        }
    }

    render() {
        // let { shelf } = this.state;
        return (
                <div>
                    <Header />
                    {routes}
                </div>
        )
    }
}

export default App; 