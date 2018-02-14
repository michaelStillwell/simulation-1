// React Imports
import React, { Component } from 'react';

// Style
import './Input.css';

// Component Imports
import Buttons from './Buttons';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title_input: '',
            price_input: ''
        }
    }

    componentDidMount() {
        let { title, price } = this.props;
        this.setState({ title_input: title, price_input: price })
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
        let 
            { title_input, price_input } = this.state,
            { id, title, price, page, handleSave } = this.props,
            new_input = title;

        
        console.log(this.props.title);
        return (
            <div className='whole-container'>
                <form className='input_container'>
                    <input 
                        className='input-container'
                        /* type="text"  */
                        placeholder='title'
                        value={title_input}
                        onChange={e => this.handleTitleInput(e.target.value)}
                    />
                    <div className='price-container'>
                    $<input 
                        
                        type="number" 
                        placeholder='price'
                        value={price_input}
                        onChange={e => this.handlePriceInput(e.target.value)}
                    />
                    </div>
                </form>
                <Buttons 
                    className='button-container'
                    id={id} 
                    page={page} 
                    title_input={title_input}
                    price_input={price_input}
                    handleSave={handleSave}
                />
            </div>
        )
    }
}

export default Input;