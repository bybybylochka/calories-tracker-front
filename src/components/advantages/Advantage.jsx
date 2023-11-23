import React from 'react';
import pointImage from '../../assets/point.svg';
import styles from './Advantages.module.scss';

const Advantage = ({title, text}) => {
    return (
        <div className={styles.advantage}>
            <img src={pointImage} alt={'point'}/>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Advantage;