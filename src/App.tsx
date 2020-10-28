import React, { ReactElement } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes/routes';
import TopNav from './components/topnav';

function App(): ReactElement {
    return (
        <div className="App">
            <Router>
                <TopNav></TopNav>
                {routes}
            </Router>
        </div>
    );
}

// const App: React.FC = (): JSX.Element => {
//     // return <div className="App">Hi</div>;
//     return (
//         <div className="App">
//             <Router>
//                 <TopNav></TopNav>
//                 {routes}
//             </Router>
//         </div>
//     );
// };

export default App;
