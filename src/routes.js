import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import NotFound from './pages/404';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/registro" component={RegisterPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}