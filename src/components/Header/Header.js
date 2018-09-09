import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {

        return (
            <nav className="navbar navbar-default" id="header">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <p class="navbar-text navbar-right">Signed in as <a href="#" class="navbar-link">Mark Otto</a></p>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;