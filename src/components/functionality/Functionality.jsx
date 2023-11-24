import React from 'react';
import styles from './Functionality.module.scss';
import pointImage from '../../assets/pointCircle.svg';
import Function from "./Function";

const Functionality = () =>{
    return (
        <div className={styles.coloring}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Как On Balance улучшит ваше питание</h2>
                <div className={styles.functions}>
                    <Function text={'Точный подсчет КБЖУ и выпитой воды поможет держать вес под контролем и быстрее достигать пищевых целей'}/>
                    <Function text={'Учет образа жизни и физической активности помогут определить норму калорий и питательных веществ'}/>
                    <Function text={'Полезные рецепты внесут разнообразие в рацион'}/>
                    <Function text={'Статьи нутрициологов и диетологов развеют мифы о питании'}/>
                </div>
            </div>
        </div>
    )
}

export default Functionality;