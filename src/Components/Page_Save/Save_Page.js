// React Imports
import React, { Component } from 'react';

// Component Imports 
import Input from '../Input/Input';

// Dependencies
import axios from 'axios';

class Save extends Component {
    handleSave() {
        let { id } = this.props.match.params;
        axios
            .post(`/api/create/${id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    render() {
        let page = 'create';
        let { id } = this.props.match.params;
        return (
            <div>
                <Input id={id} page={page} handleSave={this.handleSave} />
            </div>
        )
    }
}

export default Save;