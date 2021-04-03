import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import RegisterForm from '../../components/RegisterForm';

import './style.css';

const TITLE = "+Edu - Página de cadastro";

export default function RegisterPage() {
    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

            <Header/>

            <div className="page-title">
                <h1 className="title">Crie sua conta!</h1>
            </div>

            <div className="page-wrapper -column">
                <RegisterForm/>
            </div>
        </div>
    );
}
