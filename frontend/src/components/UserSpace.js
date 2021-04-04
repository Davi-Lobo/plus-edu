import React from 'react';

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
            <a href="/login" className="login">Entrar</a>
            <a href="/registro" className="register">Registrar</a>
        </div>
    );
}