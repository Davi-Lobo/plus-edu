import React from 'react';

export default function UserArea({isLoggedIn}) {
    if(isLoggedIn) {
        return (
            <div className="user-space">
                <span>Bem vindo de volta, NomeDoUsuário</span>
            </div>
        );
    } 
    
    return (
        <div className="user-space">
            <button className="login">Entrar</button>
            <button className="register">Registrar</button>
        </div>
    );
    
}