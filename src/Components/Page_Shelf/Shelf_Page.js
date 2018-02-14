// React Imports
import React, { Component } from 'react';

// Style
import './Shelf_Button.css';

// Dependencies
import axios from 'axios';
import { Link } from 'react-router-dom';

class Shelf extends Component {
    constructor() {
        super();

        this.state = {
            bins: [1, 2, 3, 4, 5],
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;

        axios 
            .get(`/api/shelf/${id}`)
            .then(response => {
                let 
                    a = this.state.bins.slice();

                response.data.map(x => {
                    a.map((y, z) => { 
                        if ( (z+1) === Number(x.id.split('')[1]) ) {
                            a[z] = x;
                        }
                    })
                });
                return this.setState({ bins: a });
            })
            .catch(err => console.log(err));
    }

    displayBins() {
        let { bins } = this.state;
        let { id } = this.props.match.params;

        return bins.map((x, y) => {
            if ( x.title !== undefined ) {
                return (
                    <div className='button-container'>
                    <Link
                        to={`/bin/${id}${y+1}`}>
                        <button
                            className='bin-button-full'
                            key={y}
                            >Bin {x.id.split('')[1]}
                        </button>
                    </Link>
                    </div>
                )
            } else if ( x.title === undefined ) {
                return (
                    <div className='button-container'>
                    <Link
                        to={`/create/${id}${y+1}`}>
                        <button
                            className='bin-button-empty'
                            key={y}
                            >+ Add Inventory
                        </button>
                    </Link>
                    </div>
                )
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Shelf {this.props.match.params.id}</h1>
                {this.displayBins()}
            </div>
        )
    }
}

export default Shelf;