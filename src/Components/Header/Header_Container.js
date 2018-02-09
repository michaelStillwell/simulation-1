// React Imports
import React, { Component } from 'react';

// Dependencies
import { Link } from 'react-router-dom';

// Style Import
import './Header_Container.css';
import logo from '../assets-1/logo.png';

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='header-logo'>
                    <Link 
                        to='/'>
                        <img 
                            src={logo} 
                            alt="logo"
                            className='header-logo'
                        />
                    </Link>
                </div>
                <div className='header-title'>
                    <h1>Shelfie</h1>
                </div>
            </div>
        )
    }
}

export default Header;