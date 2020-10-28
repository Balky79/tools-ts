import React, { Component, ReactElement } from 'react';
import { Link } from 'react-router-dom';
// import igor from '../../../igor_alt_cv.jpg';
import './topnavpresentation.css';

class TopNavPresentation extends Component {
    render(): ReactElement {
        return (
            <div className="ist-topnav">
                {/*<img src={igor} className="App-logo" alt="logo" />*/}
                <Link to="/tools/">Home </Link>
                <Link to="/tools/wheel">Wheel </Link>
                <Link to="/tools/blah">blah </Link>
                <Link to="/tools/blah">blah </Link>
                <Link to="/tools/blah">blah </Link>
                blah
            </div>
        );
    }
}

export default TopNavPresentation;
