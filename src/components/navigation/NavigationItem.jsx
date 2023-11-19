import React from 'react';
import styles from './Navigation.module.scss'
import {NavLink} from "react-router-dom";

const NavigationItem = ({link, text}) => {
    return (
        <li className={styles.link}>
            <NavLink to={'/'+link} className={styles.linkButton}>{text}</NavLink>
        </li>
    )
}

export default NavigationItem;