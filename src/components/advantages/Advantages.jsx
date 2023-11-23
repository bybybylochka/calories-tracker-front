import React from 'react';
import Advantage from './Advantage';
import styles from './Advantages.module.scss';

const Advantages = () => {
    return (
        <div className={styles.coloring}>
            <div className={styles.wrapper}>
                <Advantage title={'Подсчет КБЖУ'} text={'на основе вашего питания'}/>
                <Advantage title={'Рецепты'} text={'на основе ваших вкусов'}/>
                <Advantage title={'Список покупок'} text={'для любимых рецептов'}/>
                <Advantage title={'Статьи'} text={'от профессионалов'}/>
            </div>
        </div>
    )
}

export default Advantages;