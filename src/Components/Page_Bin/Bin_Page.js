// React Imports
import React, { Component } from 'react';

// Style
import './Bin_page.css';

// Dependencies
import axios from 'axios';

// Component Imports
import Input from '../Input/Input';

class Bin extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            price: 0
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        axios
            .get(`/api/bin/${id}`)
            .then(response => {
                let { name, price } = response.data[0];
                console.log(response.data)
                this.setState({ name: name, price: price });
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state)
        let page ='bin';
        return (
            <div>
                <h1 className='ee'>Bin page</h1>
                <Input page={page} />
            </div>
        )
    }
}

export default Bin;