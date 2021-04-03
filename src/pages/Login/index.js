import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

import './style.css';

const TITLE = "+Edu - Página de login";

export default function LoginPage() {
    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

            <Header/>

            <div className="page-title">
                    <h1 className="title">Página de Login</h1>
                </div>

            <div className="page-wrapper">
                <main id="main-content" className="page-main">
                    <LoginForm/>
                </main>
            </div>
        </div>
    );
}
