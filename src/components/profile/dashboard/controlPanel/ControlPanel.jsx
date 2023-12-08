import React from 'react';
import BriefMealInfo from "./BriefMealInfo";
import girlAvatar from "../../../../assets/girlAvatar.svg";
import editIcon from "../../../../assets/editIcon.svg";
import styles from './ControlPanel.module.scss';
const ControlPanel = ({name, norm}) =>{
    return (
        <div>
            <div className={styles.profileInfo}>
                <div>
                    <img src={girlAvatar} alt={"avatar"}/>
                    <p className={styles.welcomeText}>Привет, {name}!</p>
                </div>
                <div>
                    <img src={editIcon}/>
                </div>
            </div>
            <div>
                <BriefMealInfo mealName={"Завтрак"} consumed={10} norm={norm.breakfastNorm}/>
                <BriefMealInfo mealName={"Обед"} consumed={120} norm={norm.lunchNorm}/>
                <BriefMealInfo mealName={"Ужин"} consumed={0} norm={norm.dinnerNorm}/>
                <BriefMealInfo mealName={"Перекус"} consumed={46} norm={norm.snackNorm}/>
            </div>
        </div>
    )
}

export default ControlPanel;