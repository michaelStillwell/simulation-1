// React Imports
import React, { Component } from 'react';

// Component Imports
import Buttons from './Buttons';

class Input extends Component {
    constructor() {
        super();

        this.state = {
            title_input: '',
            price_input: ''
        }
    }

    handleTitleInput(val) {
        console.log(val)
        this.setState({ title_input: val });
    }

    handlePriceInput(val) {
        console.log(val)
        this.setState({ price_input: val })
    }

    render() {
        let { title_input, price_input } = this.state;
        let { id, page } = this.props;
        return (
            <div>
                <input 
                    type="text" 
                    placeholder='title'
                    onChange={e => this.handleTitleInput(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder='price'
                    onChange={e => this.handlePriceInput(e.target.value)}
                />
                <Buttons 
                    id={id} 
                    page={page} 
                    title_input={title_input}
                    price_input={price_input}
                />
            </div>
        )
    }
}

export default Input;