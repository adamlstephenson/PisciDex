import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import './Main.css';

class Main extends Component {

    render() {

        return (
            <div className="wrapper">
                <Sidebar />
                <Content />
            </div>
        )
    }
}

export default Main;