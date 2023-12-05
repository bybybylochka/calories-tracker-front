import React from 'react';
import addIcon from '../../../../assets/addIcon.svg';
import styles from './ControlPanel.module.scss';

const BriefMealInfo = ({mealName, consumed, norm}) => {
    return (
        <div className={styles.briefMealInfo}>
            <p>{mealName}</p>
            <p className={styles.tracker}>{consumed}/{norm}</p>
            <img src={addIcon} alt="add icon"/>
        </div>
    )
}

export default BriefMealInfo;