import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import SkillCard from "./common/components/skill-card/SkillCard";

import styles from "./App.module.scss";

import userLogo from "./assets/user.png";
import spfxLogo from "./assets/spfx-logo.png";
import dotNetLogo from "./assets/dotNet-logo.png";
import reactLogo from "./assets/react-logo.png";
import sharepointLogo from "./assets/sharepoint-logo.png";

const App: React.FC = () => {

    const slide1 = useRef<any>(null);
    const slide2 = useRef<any>(null);

    const userSkills = [
        { skill: 'spfx', img: spfxLogo },
        { skill: 'dotnet', img: dotNetLogo },
        { skill: 'react', img: reactLogo },
        { skill: 'sharepoint', img: sharepointLogo },
    ]

    const onArrowRightClick = () => {

        if (slide1.current) {
            slide1.current.style.transform = "translateX(-70%)";
        }

        if (slide2.current) {
            slide2.current.style.transform = "translateX(0)";
        }
    }

    const onArrowLeftClick = () => {
        
        if (slide1.current) {
            slide1.current.style.transform = "translateX(0)";
        }

        if (slide2.current) {
            slide2.current.style.transform = "translateX(70%)";
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.userProfileDetails}>
                <div className={styles.header}>
                    <img className={styles.userImg} src={userLogo} />
                    <p>Ana Cherecheș</p>
                    <p>Full Stack Developer</p>
                </div>
                <div className={styles.body}></div>
                <div className={styles.footer}></div>
            </div>
            <div className={styles.slidesContainer}>
                <div ref={slide1} className={`${styles.slide} ${styles.skillsSlide}`}>
                    {
                        userSkills.map((skill, index) => {
                            return <SkillCard key={index} title={skill.skill} imgSrc={skill.img} onArrowClick={onArrowRightClick} />
                        })
                    }
                </div>
                <div ref={slide2} className={`${styles.slide} ${styles.descriptionSlide}`}>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={onArrowLeftClick} />
                    <span>hello, this is skill container</span>
                </div>
            </div>
        </div>
    )
}

export default App
