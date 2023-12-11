import React from 'react';
import styles from './Recipes.module.scss'
import clockImage from '../../assets/clock.png';
import mealImage from '../../assets/meal.png';
import likeImage from '../../assets/like.png';

const Recipe = ({recipe}) => {
    const Ingredients =  Object.entries(recipe.ingredients).map(([key, value])=>{
        return <div className={styles.ingredient}>
            <p>{key}</p>
            <p>{value} г</p>
        </div>
    })

    return (
        <div className={styles.recipeWrapper}>
            <p className={styles.recipeTitle}>{recipe.title}</p>
            <div className={styles.additionalInfo}>
                <p><img src={clockImage} alt={'clock'}/> {recipe.cookingTime} минут</p>
                <p><img src={mealImage} alt={'meal'}/> {recipe.servingCount} порций</p>
                <p><img src={likeImage} alt={'like'}/> {recipe.likesCount} Нравится</p>
            </div>
            <div className={styles.recipe}>
                <div className={styles.ingredients}>
                    <p className={styles.subtitle}>Ингредиенты</p>
                    {Ingredients}
                </div>
                <div className={styles.instruction}>
                    <p className={styles.subtitle}>Инструкция</p>
                    <p className={styles.description}>{recipe.instruction}</p>
                </div>
            </div>
            <div className={styles.kbju}>
                <p>Калорийность: {recipe.kbju.calories}</p>
                <p>Белки: {recipe.kbju.proteins}</p>
                <p>Жиры: {recipe.kbju.fats}</p>
                <p>Углеводы: {recipe.kbju.carbohydrates}</p>
            </div>
            <div className={styles.creatingInfo}>
                <p>Автор: {recipe.editorName}</p>
                <p>Дата публикации: {recipe.publicationTime.split('T')[0]}</p>
            </div>
        </div>
    )
}

export default Recipe;