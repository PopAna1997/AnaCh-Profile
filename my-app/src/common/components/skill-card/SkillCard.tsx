import React from "react";
import { ISkillCardProps } from "./ISkillCardProps";

const SkillCard: React.FC<ISkillCardProps> = (props) => {
    return <div className="cardContainer">
    <img src={props.imgSrc} />
    <span>{props.title}</span>
    </div>
}

export default SkillCard;