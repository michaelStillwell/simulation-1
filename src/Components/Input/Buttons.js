// React Imports
import React, { Component } from 'react';

import axios from 'axios';

class Buttons extends Component {
    handleSave() {
        let { id, title_input, price_input } = this.props;
        let send = { name: title_input, price: price_input}
        axios
            .post(`/api/create/${id}`, send)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    // handleUpdate() {
    //     let { id } = this.props;
    //     axios
    //         .put(`/api/bin/${id}`)
    //         .then(response => console.log(response))
    //         .catch(err => console.log(err));
    // }

    handleDelete() {
        let { id } = this.props;
        axios
            .delete(`/api/bin/${id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    handleButton() {
        if ( this.props.page === 'create' ) {
            return (
                <button
                    onClick={() => this.handleSave()}
                    >+ Add to your Inventory
                </button>
            )
        } else if ( this.props.page === 'bin' ) {
            return (
                <div>
                    <button
                        >Update
                    </button>
                    <button
                        >Delete
                    </button>
                </div>
            )
        }
    }

    render() {
        console.log(this.props.page);
        return (
            <div>
                {this.handleButton()}
            </div>
        )
    }
}

export default Buttons;