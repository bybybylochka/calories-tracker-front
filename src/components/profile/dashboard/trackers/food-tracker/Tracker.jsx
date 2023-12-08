import React from 'react';
import CircleTracker from "./CircleTracker";
import LinearTracker from "./LinearTracker";
import styles from './Trackers.module.scss'
import {useSelector} from "react-redux";

const Tracker = ({norm}) => {
    const consumptionInfo = useSelector((state) => state.consumedProducts.consumptionInfo.totalKbju);
    if(norm)
    return (
        <div className={styles.wrapper}>
            <CircleTracker norm={norm.calories} consumed={consumptionInfo.calories}/>
            <div className={styles.linearTrackers}>
                <LinearTracker text={"Белки"} norm={norm.proteins} consumed={consumptionInfo.proteins}/>
                <LinearTracker text={"Жиры"} norm={norm.fats} consumed={consumptionInfo.fats}/>
                <LinearTracker text={"Углеводы"} norm={norm.carbohydrates} consumed={consumptionInfo.carbohydrates}/>
            </div>
        </div>
    )
}

export default Tracker;