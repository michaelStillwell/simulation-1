// React Imports
import React from 'react';

// Dependencies
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './Page_Home/Home_Page';
import Shelf from './Page_Shelf/Shelf_Page';
import Bin from './Page_Bin/Bin_Page';
import Save from './Page_Save/Save_Page';

export default (
    <Switch>
        <Route 
            exact
            path='/'
            component={Home}
        />
        <Route
            path='/bins/:id'
            component={Shelf}
        />
        <Route 
            path='/bin/:id'
            component={Bin}
        />
        <Route
            path='/create/:id'
            component={Save}
        />
    </Switch>
)