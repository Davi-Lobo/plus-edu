import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../services/api';

export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [occupation, setOcuppation] = useState('');
    const [teacher, setTeacher] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password,
            occupation,
            teacher
        }

        try {
            const response = await api.post('users', data);

            alert(response.data);

            history.push('/login');
        } catch {
            alert('Erro no cadastro, tente novamente')
        }
    }
    
    return (
        <form onSubmit={handleRegister} className="form-container -register">
            {/* <div className="field">
                <label htmlFor="profilepic" className="label -required">Foto de perfil</label>
                <input id="profilepic" type="file" accept="image/*"/>
            </div> */}

            <div className="field">
                <label htmlFor="name" className="label -required">Nome</label>
                <input 
                    id="name" 
                    className="input" 
                    type="text" 
                    placeholder="Insira seu nome e sobrenome"
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="field">
                <label htmlFor="email" className="label -required">E-mail</label>
                <input 
                    id="email" 
                    className="input" 
                    type="email" 
                    placeholder="Insira seu e-mail"
                    onChange={e => setEmail(e.target.value)}
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

            <div className="field">
                <label htmlFor="occupation" className="label -required">Cargo/Curso</label>
                <input 
                    id="occupation" 
                    className="input" 
                    type="text" 
                    placeholder="Insira seu cargo ou nível de educação..."
                    onChange={e => setOcuppation(e.target.value)} 
                />
            </div>

            <div className="field">
                <label htmlFor="teacher" className="label -required">Você é professor?</label>

                <select 
                    name="teacher" 
                    id="teacher"
                    onChange={e => setTeacher(e.target.value)} 
                >
                    <option value="false" selected>Não</option>
                    <option value="true">Sim</option>
                </select>
            </div>

            <div className="actions">
                <button type="submit" className="button">Cadastrar</button>
            </div>
        </form>
    );
}