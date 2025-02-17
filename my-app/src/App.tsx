import React from 'react';
import './App.css'

import userLogo from "./assets/user.png";
import SkillCard from './common/components/skill-card/SkillCard';

const App: React.FC = () => {

    const userSkills = [
        { skill: 'spfx', img: ',/assets/spfx-logo.png' },
        { skill: 'dotnet', img: './assets/dotNet-logo.png' },
        { skill: 'react', img: './assets/react-logo.png' },
        { skill: 'sharepoint', img: './assets/sharepoint-logo.png' },
    ]

    return (
        <div className='profileApp'>
            <div className='profileCard'>
                <div className='header'>
                    <img className='userImg' src={userLogo} />
                    <p>User Name</p>
                </div>
                <div className='body'></div>
                <div className='footer'></div>
            </div>
            <div className='skillsContainer'>
                {
                    userSkills.map((skill, index) => {
                        return <SkillCard key={index} title={skill.skill} imgSrc={skill.img} />
                    })
                }
            </div>
        </div>
    )
}

export default App
