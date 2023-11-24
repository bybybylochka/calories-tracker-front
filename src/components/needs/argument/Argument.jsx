import React from 'react';
import styles from "./Argument.module.scss"

const Argument = ({title, image, text}) =>{
    return (
        <div className={styles.argument}>
            <div className={styles.title}>
                <h4>{title}</h4>
            </div>
            <img src={image} alt={"argument"}/>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Argument;