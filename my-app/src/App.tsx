import React, { useState, useRef } from "react";

import SkillCard from "./common/components/skill-card/SkillCard";

import styles from "./App.module.scss";

import userLogo from "./assets/user.png";
import spfxLogo from "./assets/spfx-logo.png";
import dotNetLogo from "./assets/dotNet-logo.png";
import reactLogo from "./assets/react-logo.png";
import sharepointLogo from "./assets/sharepoint-logo.png";

const App: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const slide1 = useRef<any>(null);
    const slide2 = useRef<any>(null);

    const userSkills = [
        { skill: 'spfx', img: spfxLogo },
        { skill: 'dotnet', img: dotNetLogo },
        { skill: 'react', img: reactLogo },
        { skill: 'sharepoint', img: sharepointLogo },
    ]

    const onArrowClick = () => {
        setIsOpen(true);

        if (slide1.current) {
            slide1.current.style.transform = "translateX(-100%)";
        }

        if (slide2.current) {
            slide2.current.style.transform = "translateX(0)";
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div ref={slide1} className={`${styles.containerSlide} profileApp`}>
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
                            return <SkillCard key={index} title={skill.skill} imgSrc={skill.img} onArrowClick={onArrowClick} />
                        })
                    }
                </div>
                {isOpen && <div className='skillDetails'>
                    <span>Details</span>
                </div>}
            </div>
            <div ref={slide2} className={`${styles.containerSlide} skillDescriptionContainer`}>
                <span>hello, this is skill container</span>
            </div>
        </div>
    )
}

export default App
