import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { ISkillCardProps } from "./ISkillCardProps";

import './SkillCard.css';

const SkillCard: React.FC<ISkillCardProps> = (props) => {
    return <div className="cardContainer">
        <img className="cardImg" src={props.imgSrc} />
        <span className="cardTitle">{props.title}</span>
        <FontAwesomeIcon icon={faArrowRight} onClick={props.onArrowClick} />
    </div>
}

export default SkillCard;