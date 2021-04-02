import React from 'react';

import { Helmet } from 'react-helmet';

import Header from '../../components/Header';
import RecentQuestions from '../../components/RecentQuestions';
import SearchQuestions from '../../components/SearchQuestion';
import TopTags from '../../components/TopTags';

const TITLE = "+Edu - Página Inicial"

export default function Home() {
    return (
        <div className="App">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

            <Header isLoggedIn={false}/>

            <div className="page-wrapper">
                <main id="main-content" className="page-main">
                    <RecentQuestions/>
                </main>

                <aside className="sidebar-main">
                    <div className="content">
                        <SearchQuestions/>
                        <TopTags/>
                    </div>
                </aside>
            </div>
        </div>
    );
}
