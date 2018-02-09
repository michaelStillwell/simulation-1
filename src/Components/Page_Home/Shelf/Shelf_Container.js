// React Imports
import React, { Component } from 'react';

// Dependencies
import { Link } from 'react-router-dom';
import axios    from 'axios';

// Style Import
import './Shelf_Container.css';

class Shelf extends Component {
    constructor() {
        super();

        this.state = {
            shelf: ['a', 'b', 'c', 'd'],
        }
    }

    render() {
        let { shelf } = this.state;
        return (
            <div>
                {
                    shelf.map((x, y) => {
                        return (
                            <div>
                                <Link
                                    key={y+10}
                                    to={`/bins/${x.toUpperCase()}`}>
                                    <button
                                        key={y}
                                        >Shelf {x}
                                    </button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Shelf;