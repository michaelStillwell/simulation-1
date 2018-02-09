// React Imports
import React, { Component } from 'react';

// Dependencies
import axios from 'axios';
import { Link } from 'react-router-dom';

class Shelf extends Component {
    constructor() {
        super();

        this.state = {
            bins: [],
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        axios 
            .get(`/api/shelf/${id}`)
            .then(response => {
                let { name, price } = response.data;
                let n = [];
                console.log(response.data)
                response.data.forEach((x, y) => n.push(y+1))
                this.setState({ bins: response.data })
            })
            .catch(err => console.log(err));
    }

    displayBins() {
        let { bins } = this.state;
        let { id } = this.props.match.params;

        return bins.map((x, y) => {
            if ( x.name !== '' && x.price !== 0 ) {
                return (
                    <Link
                        to={`/bin/${id}${y+1}`}>
                        <button
                            key={y}
                            >Bin {x.id}
                        </button>
                    </Link>
                )
            } else if ( x.name === '' && x.price === 0 ) {
                return (
                    <Link
                        to={`/create/${id}${y+1}`}>
                        <button
                            key={y}
                            >Create a Bin {y}
                        </button>
                    </Link>
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