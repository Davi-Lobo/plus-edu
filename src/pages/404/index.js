import React from 'react';

import Header from '../../components/Header';

import './style.css';

const TITLE = "+Edu - Página não encontrada";

export default function NotFound() {
    return (
        <div className="App">
            <Header/>

            <div className="page-wrapper">
                <div className="page-title">
                    <h1 className="title">
                        Página não encontrada
                    </h1>
                </div>
            </div>
        </div>
    );
}
