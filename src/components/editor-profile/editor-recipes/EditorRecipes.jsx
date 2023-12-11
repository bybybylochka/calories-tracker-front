import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRecipesByEditor} from "../../../reducers/recipes-reducer";
import Recipe from "../../recipes/Recipe";
import styles from './EditorRecipes.module.scss'

const EditorRecipes = () => {
    const dispatch = useDispatch();
    const recipes = useSelector((state)=>state.recipes.recipes)

    useEffect(()=>{
        dispatch(getRecipesByEditor());
    }, [])

    const Recipes = recipes.map((recipe)=>{
        return <Recipe recipe={recipe}/>
    })

    return (
        <div>
            <p>Ваши рецепты:</p>
            <div className={styles.recipes}>
                {Recipes}
            </div>
        </div>
    )
}

export default EditorRecipes;