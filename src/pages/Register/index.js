import React from 'react';

import Header from '../../components/Header';
import RegisterForm from '../../components/RegisterForm';

import './style.css';

const TITLE = "+Edu - Página de cadastro";

export default function RegisterPage() {
    return (
        <div className="App">
            <Header/>

            <div className="page-wrapper -column">
                <div className="page-title">
                    <h1 className="title">Crie sua conta!</h1>
                </div>

                <RegisterForm/>
            </div>
        </div>
    );
}
