import React from 'react';
import BriefMealInfo from "./BriefMealInfo";
import girlAvatar from "../../../../assets/girlAvatar.svg";
import editIcon from "../../../../assets/editIcon.svg";
import styles from './ControlPanel.module.scss';
import {useDispatch, useSelector} from "react-redux";
import leftImage from "../../../../assets/left.svg";
import {logout} from "../../../../reducers/auth-reducer";
import {Navigate, NavLink} from "react-router-dom";
const ControlPanel = ({name, norm}) =>{
    const consumptionInfo = useSelector((state) => state.consumedProducts.consumptionInfo.caloriesByMealType);
    const isAuth = useSelector((state)=>state.auth.isAuth);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(logout());
    }
    if(!isAuth) return <Navigate to={"/"}/>
    return (
        <div>
            <div className={styles.profileInfo}>
                <div>
                    <img src={girlAvatar} alt={"avatar"}/>
                    <p className={styles.welcomeText}>Привет, {name}!</p>
                </div>
                <div>
                    <NavLink to={'editPersonalData'}><img src={editIcon}/></NavLink>
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
            <button className={styles.logoutButton} onClick={onClick}><img src={leftImage} alt={'left'}/>Выйти</button>
        </div>
    )
}

export default ControlPanel;