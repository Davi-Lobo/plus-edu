import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import UserData from '../../components/UserData';

import './style.css';

const TITLE = "+Edu - Seu Perfil";

export default function ProfilePage() {
    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

            <Header isLogged={true}/>

            <div className="page-title">
                <h1 className="title">Seu Perfil</h1>
            </div>

            <div className="page-wrapper">
                <main id="main-content" className="page-main">
                    <UserData/>
                </main>
            </div>
        </div>
    );
}
