import React, { Component, ReactElement } from 'react';
import logo from '../../../igorstools.svg';
import { Link } from 'react-router-dom';
import query from '../container/wheeloffortune';

class WheelPresentation extends Component {
    render(): ReactElement {
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/tools/">Home </Link>
                {query}
            </div>
        );
    }
}

export default WheelPresentation;
