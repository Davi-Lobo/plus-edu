import React from 'react';

export default function RegisterForm() {    
    return (
        <form className="register-form">
            <div className="field">
                <label htmlFor="profilepic" className="label -required">Foto de perfil</label>
                <input id="profilepic" type="file" accept="image/*"/>
            </div>

            <div className="field">
                <label htmlFor="firstname" className="label -required">Nome</label>
                <input id="firstname" className="input" type="text" placeholder="Insira seu nome e sobrenome"/>
            </div>

            <div className="field">
                <label htmlFor="occupation" className="label -required">Cargo/Curso</label>
                <input id="occupation" className="input" type="text" placeholder="Insira seu cargo ou nível de educação..."/>
            </div>

            <div className="actions">
                <button type="submit" className="button">Cadastrar</button>
            </div>
        </form>
    );
}