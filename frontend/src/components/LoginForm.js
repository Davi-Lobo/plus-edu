import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import api from '../services/api';

export default function LoginForm() {    
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            identifier,
            password
        }

        try {
            const response = await api.post('auth/local', data);

            localStorage.setItem('token', data.jwt);
            history.push('/dashboard');
        } catch {
            alert('Falha no login, tente novamente');
        }
    }

    return (
        <form onSubmit={handleLogin} className="login-form">
            <div className="field">
                <label htmlFor="email" className="label -required">Email</label>
                <input 
                    id="username" 
                    type="email" 
                    placeholder="Insira seu e-mail"
                    onChange={e => setIdentifier(e.target.value)}
                />
            </div>

            <div className="field">
                <label htmlFor="password" className="label -required">Senha</label>
                <input 
                    id="password" 
                    className="input" 
                    type="password" 
                    placeholder="Insira sua senha"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div className="actions">
                <button type="submit" className="button">Entrar</button>
            </div>
        </form>
    );
}