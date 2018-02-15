// React Imports
import React, { Component } from 'react';

// Style
import './Bin_page.css';

// Dependencies
import axios from 'axios';

// Component Imports
import Header from '../Header/Header_Container';
import Input from '../Input/Input';

class Bin extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            price: 0
        }
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        axios
            .get(`/api/bin/${id}`)
            .then(response => {
                let { title, price } = response.data[0];
                this.setState({ title: title, price: price });
            })
            .catch(err => console.log(err));
    }

    render() {
        let 
            page ='bin',
            { title, price } = this.state;

        console.log(title+ price);
        return (
            <div>
                <Header loc={'bin'} id={this.props.match.params} />
                <div className='bin-container'>
                    <h1 className='ee'>Bin page</h1>
                    {/* <h2>{this.state.title}</h2> */}
                    <Input
                        title={title}
                        price={price}
                        page={page} 
                        id={this.props.match.params.id} 
                    />
                </div>
            </div>
        )
    }
}

export default Bin;