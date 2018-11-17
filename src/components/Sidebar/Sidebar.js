import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {

    state = {
        toggle: ""
    }


    render() {

        return (
            <nav className="this.state.toggle" id="sidebar">
                <div className="sidebar-header">
                    <h3>PisciDex</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>Navigation</p>
                    <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Link 2</a>
                        </li>
                        <li>
                            <a href="#">Link 3</a>
                        </li>
                    </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Sidebar;