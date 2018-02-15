// React Imports
import React, { Component } from 'react';

// Style
import './Input.css';

// Component Imports
import Buttons from './Buttons';

class Input extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.price = props.price;

        this.state = {
            title_input: this.title,
            price_input: this.price,
            canEdit: false,
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        let { title, price } = this.props;
        this.setState({ title_input: title, price_input: price })
    }

    handleTitleInput(val) {
        console.log(val)
        let a = val;
        this.setState({ title_input: a });
    }

    handlePriceInput(val) {
        console.log(val)
        let a = val;
        this.setState({ price_input: a })
    }

    renderInput() {
        let { title, price } = this.props;
        let { canEdit } = this.state;
        if ( this.props.page === 'create' ) {
            return (
                <div>
                    <input type="text" placeholder='Title'/>
                    <input type="number" placeholder='Price'/>
                </div>
            )
        } else if ( this.props.page === 'bin' ) {
            if ( canEdit === false ) {
                return (
                    <div>
                        <input type='text' value={title} />
                        <input type='number' value={price} />
                    </div>
                )
            } else if ( canEdit === true ) {
                return (
                    <div>
                        <input type="text" onChange={e => this.handleTitleInput(e.target.value)} />
                        <input type="number" onChange={e => this.handlePriceInput(e.target.value)} />
                    </div>
                )
            }
        }
    }

    handleEdit() {
        this.setState({ canEdit: !this.state.canEdit });
    }

    render() {
        let 
            { title_input, price_input, canEdit } = this.state,
            { id, title, price, page, handleSave } = this.props,
            new_input = title;

        
        console.log(this.props.title);
        return (
            <div>
                {this.renderInput()}
                <Buttons 
                    className='button-container'
                    id={id} 
                    page={page}
                    canEdit={canEdit}
                    handleEdit={this.handleEdit}
                    title_input={title_input}
                    price_input={price_input}
                    handleSave={handleSave}
                />
            </div>            
        )
            /* <div className='whole-container'>
                <form className='input_container'>
                    <input 
                        className='input-container'
                        /* type="text"  */
                        /* placeholder='title'
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
                    canEdit={canEdit}
                    handleEdit={this.handleEdit}
                    title_input={title_input}
                    price_input={price_input}
                    handleSave={handleSave}
                />
            </div>
        ) */
    } 
}

export default Input;