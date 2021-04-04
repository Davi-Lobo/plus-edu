import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

import UserSpace from './UserSpace';

export default function Header({isHome, isLogged}) {    
    const userName = localStorage.getItem('username');

    const history = useHistory();

    function handleLogout() {
        localStorage.clear();
        
        history.push('/');
    }

    if(isHome) {
        return (
            <header className="page-header">
                <div className="content">
                    <div className="logo">
                        <img src={logo} alt="+EDU Logo"/>
                    </div>
    
                    <UserSpace/>
                </div>
            </header>
        );
    }

    if(isLogged) {
        return (
            <header className="page-header">
                <div className="content">
                    <div className="logo">
                        <a href="/"><img src={logo} alt="+EDU Logo"/></a>
                    </div>

                    <div className="user-space">
                        <span>Bem vindo de volta, {userName},

                        <Link to="/profile" className="link"> Meu Perfil ,</Link> 
                        
                        <button className="logout" onClick={handleLogout}> Logout</button></span>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <header className="page-header">
            <div className="content">
                <div className="logo">
                    <a href="/"><img src={logo} alt="+EDU Logo"/></a>
                </div>

                <UserSpace/>
            </div>
        </header>
    );
}