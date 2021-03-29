import React from 'react';

import { ReactComponent as SearchIcon } from '../assets/icons/search.svg';

export default function SearchQuestions() {    
    return (
        <form className="search-container">
            <h3 className="title">Pesquisa</h3>

            <div className="field">
                <input className="input" type="text" placeholder="Busque uma pergunta"/>

                <button type="submit" className="button">
                    <SearchIcon/>
                </button>
            </div>
        </form>
    );
}