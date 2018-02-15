// React Imports
import React, { Component } from 'react';

// Style
import './Shelf_Button.css';

// Dependencies
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components
import Header from '../Header/Header_Container';

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
                    return a.map((y, z) => { 
                        if ( (z+1) === Number(x.id.split('')[1]) ) {
                           return a[z] = x;
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
                    <div className='button-container' key={y}>
                    <Link
                        to={`/bin/${id}${y+1}`}>
                        <button
                            className='bin-button-full'
                            >Bin {x.id.split('')[1]}
                        </button>
                    </Link>
                    </div>
                )
            } else if ( x.title === undefined ) {
                return (
                    <div className='button-container' key={y}>
                    <Link
                        to={`/create/${id}${y+1}`}>
                        <button
                            className='bin-button-empty'
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
                <Header loc={'shelf'} />
                <div>
                    <h1>Shelf {this.props.match.params.id}</h1>
                    {this.displayBins()}
                </div>
            </div>
        )
    }
}

export default Shelf;