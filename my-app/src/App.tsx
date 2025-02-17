import React from 'react';
import './App.css'

import userLogo from "./assets/user.png";

const App: React.FC = () => {

    return (
        <div className='App'>
            <div className='profileCard'>
                <div className='header'>
                    <img className='userImg' src={userLogo}/>
                    <p>User Name</p>
                </div>
                <div className='body'></div>
                <div className='footer'></div>
            </div>
            <div className='skillsContainer'>
                <div className='spfxCard'>
                    <span>spfx card</span>
                </div>
                <div className='dotnetCard'>
                    <span>dotnet Card</span>
                </div>
                <div className='reactCard'>
                    <span>react Card</span>
                </div>
                <div className='sharepointCard'>
                    <span>sharepoint card</span>
                </div>
            </div>
        </div>
    )
}

export default App
