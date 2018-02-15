// React Imports
import React, { Component } from 'react';

// Dependencies
import { Link } from 'react-router-dom';

// Style Import
import './Header_Container.css';
import logo from '../assets-1/logo.png';

class Header extends Component {
    renderHeader() {
        switch(this.props.loc) {
            case 'shelf':
                return (
                    <div className='header-container'>
                        <div className='header-position'>
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
                            <h1>SHELF</h1>
                        </div>
                        </div>
                    </div>
                )
                break;
            case 'bin':
                console.log(this.props.id.id.split('')[0])
                return (
                    <div className='header-container'>
                        <div className='header-position'>
                        <div className='header-logo'>
                            <Link 
                                to={`/bins/${this.props.id.id.split('')[0]}`}
                            >
                                <img 
                                    src={logo} 
                                    alt="logo"
                                    className='header-logo'
                                />
                            </Link>
                        </div>
                        <div className='header-title'>
                            <h1>BIN</h1>
                        </div>
                        </div>
                    </div>
                )
                break;
            case 'save':
                return (
                    <div className='header-container'>
                        <div className='header-position'>
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
                            <h1>SAVE</h1>
                        </div>
                        </div>
                    </div>
                )
                break;
            default:
                return (
                <div className='header-container'>
                    <div className='header-position'>
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
                        <h1>SHELFIE</h1>
                    </div>
                    </div>
                </div>
                )
                break;
        }
    }

    render() {
        console.log(this.props)
        return this.renderHeader();
    }
}

export default Header;