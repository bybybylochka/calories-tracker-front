import React from 'react';
import styles from './RecipesTracker.module.scss'

const FullRecipe = ({recipe, setRecipeView, setInChoose}) => {
    const Ingredients =  Object.entries(recipe.ingredients).map(([key, value])=>{
        return <div className={styles.ingredient}>
            <p>{key}</p>
            <p>{value} г</p>
        </div>
    })

    return (
        <div className={styles.fullRecipe}>
            <div className={styles.ingredients}>
                <p className={styles.title}>{recipe.title}</p>
                <p className={styles.subtitle}>Ингредиенты:</p>
                <p>{Ingredients}</p>
            </div>
            <div className={styles.instruction}>
                <p className={styles.subtitle}>Инструкция:</p>
                <p>{recipe.instruction}</p>
                <button onClick={()=> {
                    setRecipeView(false);
                    setInChoose(true);
                }}>Вернуться</button>
            </div>
        </div>
    )
}

export default FullRecipe;