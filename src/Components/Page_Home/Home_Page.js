// React Imports
import React, { Component } from 'react';

// Components
import Header from '../Header/Header_Container';
import Shelf from './Shelf/Shelf_Container';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Shelf />
            </div>
        )
    }
}

export default Home;