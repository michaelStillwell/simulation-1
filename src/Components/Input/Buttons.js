// React Imports
import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import './Buttons.css';

class Buttons extends Component {
    constructor() {
        super();

        this.state = {
            canEdit: true,
        }
    }

    handleSave() {
        let { id, title_input, price_input } = this.props;
        let send = { title: title_input, price: price_input}
        axios
            .post(`/api/create/${id}`, send)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    handleUpdate() {
        let 
            { id, title_input, price_input } = this.props,
            // { id } = this.props.match.params,
            send   = { id: id, title: title_input, price: price_input };

        console.log(id);
        axios
            .put(`/api/bin/${id}`, send)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    handleDelete() {
        let { id } = this.props;
        axios
            .delete(`/api/delete/${id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    handleButton() {
        let { id } = this.props;

        if ( this.props.page === 'create' ) {
            return (
                <Link
                    to={`/bins/${id.split('')[0]}`}
                >
                    <button
                        className='add-inventory'
                        onClick={() => this.handleSave()}
                        >+ Add to your Inventory
                    </button>
                </Link>
            )
        } else if ( this.props.page === 'bin' ) {
            if ( this.state.canEdit === true) {
                return (
                    <button
                        className='update-inventory'
                        onClick={() => this.handleUpdate()}
                        >Update
                    </button>
                    )
                } else if ( this.state.canEdit === false ) {
                    return (
                        <button
                            className='update-inventory'
                            >Edit
                        </button>
                    )
                }
                return (
                    <button
                        className='delete-inventory'
                        onClick={() => this.handleDelete()}
                        >Delete
                    </button>
                )
        }
    }

    render() {
        // console.log('MATCH: ', this.props)
        return (
            <div>
                {this.handleButton()}
            </div>
        )
    }
}

export default Buttons;