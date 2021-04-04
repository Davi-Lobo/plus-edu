import React from 'react';
import { Link } from 'react-router-dom';

export default function UserSpace({isLoggedIn}) {
    if(isLoggedIn) {
        return (
            <div className="user-space">
                <span>Bem vindo de volta, NomeDoUsuário</span>
            </div>
        );
    } 
    
    return (
        <div className="user-space">
            <Link to="/login" className="login">Entrar</Link>
            <Link to="/registro" className="register">Registrar</Link>
        </div>
    );
}