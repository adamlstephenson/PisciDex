import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="wrapper">
                {/* Sidebar */}
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>PisciDex</h3>
                        <strong>PD</strong>
                    </div>

                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fas fa-home">Home</i>
                            </a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fas fa-briefcase"></i>
                            </a>
                        </li>
                    </ul>

                </nav>
            </div>
        )
    }
}

export default Navbar;