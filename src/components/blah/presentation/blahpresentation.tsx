import React, { Component, ReactElement } from 'react';
import logo from '../../../igorstools.svg';
import { Link } from 'react-router-dom';

class BlahPresentation extends Component {
    render(): ReactElement {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                Test
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <Link to="/tools/">Home </Link>
            </div>
        );
    }
}

export default BlahPresentation;
