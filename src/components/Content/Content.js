import React, { Component } from 'react';
import './Content.css';

class Content extends Component {

    toggleSidebar = () => {
           
    }

    render() {

        return (
            <div id="content">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={this.toggleSidebar}>
                            <i className="fas fa-align-left"></i>
                            <span>Toggle Navigation</span>
                        </button>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Content;