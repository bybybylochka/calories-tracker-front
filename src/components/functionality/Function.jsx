import React from 'react';
import styles from './Functionality.module.scss';
import pointImage from '../../assets/pointCircle.svg';

const Function = ({text}) => {
    return (
        <div className={styles.function}>
            <img src={pointImage} alt={'point'}/>
            <p>{text}</p>
        </div>
    )
}
export default Function;