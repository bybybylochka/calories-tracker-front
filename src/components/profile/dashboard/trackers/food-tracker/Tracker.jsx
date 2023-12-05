import React from 'react';
import CircleTracker from "./CircleTracker";
import LinearTracker from "./LinearTracker";
import styles from './Trackers.module.scss'
import {useSelector} from "react-redux";

const Tracker = ({norm}) => {
    return (
        <div className={styles.wrapper}>
            <CircleTracker norm={norm.calories}/>
            <div className={styles.linearTrackers}>
                <LinearTracker text={"Белки"} percentage={`0/${norm.proteins}`}/>
                <LinearTracker text={"Жиры"} percentage={`0/${norm.fats}`}/>
                <LinearTracker text={"Углеводы"} percentage={`0/${norm.carbohydrates}`}/>
            </div>
        </div>
    )
}

export default Tracker;