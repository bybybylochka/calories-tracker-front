import React from 'react';
import BriefMealInfo from "./BriefMealInfo";
import girlAvatar from "../../../../assets/girlAvatar.svg";
import editIcon from "../../../../assets/editIcon.svg";
import styles from './ControlPanel.module.scss';
import {useSelector} from "react-redux";
const ControlPanel = ({name, norm}) =>{
    const consumptionInfo = useSelector((state) => state.consumedProducts.consumptionInfo.caloriesByMealType);
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
                <BriefMealInfo mealName={"Завтрак"}
                               consumed={consumptionInfo.breakfast
                                   ?consumptionInfo.breakfast
                                :0}
                               norm={norm.breakfastNorm}/>
                <BriefMealInfo mealName={"Обед"}
                               consumed={consumptionInfo.lunch
                                ?consumptionInfo.lunch
                                :0}
                               norm={norm.lunchNorm}/>
                <BriefMealInfo mealName={"Ужин"}
                               consumed={consumptionInfo.dinner
                                   ?consumptionInfo.dinner
                                   :0}
                               norm={norm.dinnerNorm}/>
                <BriefMealInfo mealName={"Перекус"}
                               consumed={consumptionInfo.snack
                                   ?consumptionInfo.snack
                                   :0}
                               norm={norm.snackNorm}/>
            </div>
        </div>
    )
}

export default ControlPanel;