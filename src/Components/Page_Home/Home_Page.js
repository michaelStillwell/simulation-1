// React Imports
import React, { Component } from 'react';

// Components
import Shelf from './Shelf/Shelf_Container';


class Home extends Component {
    render() {
        return (
            <div>
                <Shelf />
            </div>
        )
    }
}

export default Home;