import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {

        return (
            <nav className="navbar navbar-default" id="header">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" class="btn btn-default navbar-btn">Sign in</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;