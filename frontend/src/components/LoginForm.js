import React from 'react';

export default function LoginForm() {    
    return (
        <form className="login-form">
            <div className="field">
                <label htmlFor="email" className="label -required">Email</label>
                <input id="email" type="email" placeholder="Insira seu e-mail"/>
            </div>

            <div className="field">
                <label htmlFor="password" className="label -required">Senha</label>
                <input id="password" className="input" type="password" placeholder="Insira sua senha"/>
            </div>

            <div className="actions">
                <button type="submit" className="button">Entrar</button>
            </div>
        </form>
    );
}