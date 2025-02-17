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
                <div className='card spfxCard'>
                    <span>spfx card</span>
                </div>
                <div className='card dotnetCard'>
                    <span>dotnet Card</span>
                </div>
                <div className='card reactCard'>
                    <span>react Card</span>
                </div>
                <div className='card sharepointCard'>
                    <span>sharepoint card</span>
                </div>
            </div>
        </div>
    )
}

export default App
