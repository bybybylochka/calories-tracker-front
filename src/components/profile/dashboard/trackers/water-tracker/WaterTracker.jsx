import React from 'react';
import styles from './WaterTracker.module.scss'
import waterTrackerImage from '../../../../../assets/water-tracker.svg';
import plus from '../../../../../assets/bluePlus.svg';

const WaterTracker = ( ) => {
    return (
        <div className={styles.wrapper}>
            <div>
                <img src={waterTrackerImage} alt={"water tracker"}/>
            </div>
            <p>
                Выпито 500 мл воды
            </p>
            <button className={styles.addingButton}>
                <img src={plus} alt={'plus'}/>
            </button>
        </div>
    )
}

export default WaterTracker;