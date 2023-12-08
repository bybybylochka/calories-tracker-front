import React from 'react';
import styles from './RecipesTracker.module.scss'
import plus from "../../../../../assets/redPlus.svg";
import food1 from "../../../../../assets/food1.svg";
import food2 from "../../../../../assets/food2.svg";
import food3 from "../../../../../assets/food3.svg";


const RecipesTracker = ( ) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.images}>
                <img src={food1} alt={'food'}/>
                <img src={food2} alt={'food'}/>
                <img src={food3} alt={'food'}/>
            </div>
            <p>
                Ваши рецепты
            </p>
            <button className={styles.addingButton}>
                <img src={plus} alt={'plus'}/>
            </button>
        </div>
    )
}

export default RecipesTracker;