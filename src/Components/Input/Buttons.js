// React Imports
import React, { Component } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import './Buttons.css';

class Buttons extends Component {
    handleSave() {
        let { id, title_input, price_input } = this.props;
        let send = { title: title_input, price: Number(price_input)}
        axios
            .post(`/api/create/${id}`, send)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    handleUpdate() {
        let 
            { id, title_input, price_input } = this.props,
            send   = { id: id, title: title_input, price: price_input };

        axios
            .put(`/api/bin/${id}`, send)
            .then(response => {
                console.log(response);
                this.props.handleEdit();
            })
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
        console.log( this.props.canEdit );
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
            if ( this.props.canEdit === true) {
                return (
                    <div>
                        <Link
                            to={`/bins/${id.split('')[0]}`}
                        >        
                            <button
                                className='update-inventory'
                                onClick={() => this.handleUpdate()}
                                >Update
                            </button>
                            <button
                                className='delete-inventory'
                                onClick={() => this.handleDelete()}
                                >Delete
                            </button>
                        </Link>
                    </div>
                    )
            } else if ( this.props.canEdit === false ) {
                return (
                    <div>
                        <button
                            className='update-inventory'
                            onClick={() => this.props.handleEdit()}
                            >Edit
                        </button>
                        
                        <Link
                            to={`/bins/${id.split('')[0]}`}
                        >
                            <button
                                className='delete-inventory'
                                onClick={() => this.handleDelete()}
                                >Delete
                            </button>
                        </Link>
                </div>
                )
            }
        }
    }

    render() {
        return (
            <div>
                {this.handleButton()}
            </div>
        )
    }
}

export default Buttons;