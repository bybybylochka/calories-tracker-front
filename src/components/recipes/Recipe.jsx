import React, {useEffect} from 'react';
import styles from './Recipes.module.scss'
import clockImage from '../../assets/clock.png';
import mealImage from '../../assets/meal.png';
import likeImage from '../../assets/like.png';
import {useDispatch, useSelector} from "react-redux";
import {addFavouriteRecipe, getFavouriteRecipes} from "../../reducers/recipes-reducer";

const Recipe = ({recipe}) => {
    const favotireRecipes = useSelector((state)=>state.recipes.favouriteRecipes);
    const role = useSelector((state)=>state.auth.role);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(role==='ROLE_USER') {
            dispatch(getFavouriteRecipes())
        }
    }, [recipe])
    const addToFavouriteRecipes = () => {
        console.log(recipe.id)
        let flag=false;
        if(role==='ROLE_USER'){
            favotireRecipes.forEach((rec)=>{
                if(rec.id===recipe.id) {
                    flag = true;
                    return;
                }
            })
            if(!flag)
                dispatch(addFavouriteRecipe(recipe.id));
            else alert('Этот рецепт уже добавлен в раздел "Любимые"');
        }
    }
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
                <p onClick={addToFavouriteRecipes}><img src={likeImage} alt={'like'}/> {recipe.likesCount} Нравится</p>
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