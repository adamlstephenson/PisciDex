import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {

        return (
            <nav className="navbar navbar-default" id="header">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" id="header-corner">
                            <p>PisciDex</p>
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;