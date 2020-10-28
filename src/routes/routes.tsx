import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Wheel from '../components/wheel/index';
// import TopNavContainer from '../components/topnav';
import Blah from '../components/blah';

export default (
    <Switch>
        <Route exact path="/">
            <Redirect to="/tools" />{' '}
        </Route>
        <Route exact path="/tools/wheel:names" component={Wheel} />
        <Route exact path="/tools/blah/" component={Blah} />
        {/*<Route path="/alternativecv" component={AlternativeCVContainer} />*/}
    </Switch>
);
