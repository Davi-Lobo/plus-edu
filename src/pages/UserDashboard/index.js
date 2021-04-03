import React from 'react';

import Header from '../../components/Header';
import YourQuestions from '../../components/YourQuestions';
import RecentQuestions from '../../components/RecentQuestions';
import SearchQuestion from '../../components/SearchQuestion';
import TopTags from '../../components/TopTags';

import './style.css';

const TITLE = "+Edu - Dashboard";

export default function UserDashboard() {
    return (
        <div className="App">
            <Header isLoggedIn={true}/>

            <div className="page-title">
                    <h1 className="title">Dashboard</h1>
                </div>

            <div className="page-wrapper">

                <main id="main-content" className="page-main">
                    <YourQuestions/>
                    <RecentQuestions/>
                </main>

                <aside className="sidebar-main">
                    <div className="content">
                        <SearchQuestion/>
                        <TopTags/>
                    </div>
                </aside>
            </div>
        </div>
    );
}
