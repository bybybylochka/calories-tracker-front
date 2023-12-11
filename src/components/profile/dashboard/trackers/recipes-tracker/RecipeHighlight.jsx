import React from 'react';
import recipeImage from "../../../../../assets/recipe.svg";
import styles from "./RecipesTracker.module.scss"

const RecipeHighlight = ({recipe, setRecipeView, setActiveRecipe, setChosenRecipes, setIsChoose}) => {
    const onClick = (e) => {
        e.stopPropagation()
        setIsChoose(true);
        if(e.target.checked){
            setChosenRecipes((state)=>[...state, recipe.id])
        }
        else{
            setChosenRecipes((state)=>state.filter((id)=>id!==recipe.id));
        }
    }
    return (
        <div className={styles.recipeHighlight} onClick={()=> {
            setRecipeView(true);
            setActiveRecipe(recipe)
        }}>
            <img src={recipeImage} alt={'recipe'}/>
            <p>{recipe.title}</p>
            <input type={"checkbox"} id={recipe.id} onClick={onClick}/>
        </div>
    )
}

export default  RecipeHighlight;