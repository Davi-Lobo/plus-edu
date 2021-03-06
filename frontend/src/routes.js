import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import NotFound from './pages/404';
import UserDashboard from './pages/UserDashboard';
import ProfilePage from './pages/Profile';
import AskPage from './pages/AskPage';
import QuestionPage from './pages/Question';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/dashboard" component={UserDashboard}/>
                <Route path="/profile/:id" component={ProfilePage}/>
                <Route path="/ask" component={AskPage}/>
                <Route path="/question/:id" component={QuestionPage}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}