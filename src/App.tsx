import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes/routes';
import TopNav from './components/topnav';

function App() {
    return (
        <div className="App">
            <Router>
                <TopNav></TopNav>
                {routes}
            </Router>
        </div>
    );
}

export default App;
