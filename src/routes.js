import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Pages */
import HomePage from './pages/homepage/HomePage';


/* Application Routing */
const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
    </Switch>
);

export default Routes;