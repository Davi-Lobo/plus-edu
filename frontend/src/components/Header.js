import React from 'react';

import logo from '../assets/img/logo.svg';

import UserSpace from './UserSpace';

export default function Header({isHome}) {    
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