import React, {useEffect, useState} from 'react';
import RecipesSearchingForm from "./RecipesSearchingForm";
import styles from "./Recipes.module.scss";
import searchIcon from "../../assets/search.svg";
import Recipe from "./Recipe";
import {useDispatch, useSelector} from "react-redux";
import {getAllRecipes, getAllRecipesByParams} from "../../reducers/recipes-reducer";

const Recipes = () => {
    const recipes = useSelector((state)=>state.recipes.recipes);
    const [allRecipes, setAllRecipes]=useState(false);
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        setAllRecipes(false);
        dispatch(getAllRecipesByParams(formData.title, formData.maxCalories, formData.shouldSort));
    }

    useEffect(()=>{
        dispatch(getAllRecipes());
    }, [])
    useEffect(()=>{
        if(allRecipes===true)
            dispatch(getAllRecipes());
    }, [allRecipes])


    const Recipes = recipes.map((recipe)=>{
        return <Recipe recipe={recipe}/>
    })
    return (
        <div className={styles.coloring}>
            <div className={styles.wrapper}>
                <div className={styles.recipes}>
                    <h3 className={styles.title}>Полезные и вкусные рецепты</h3>
                    {Recipes}
                </div>
                <div className={styles.searchBar}>\
                    <RecipesSearchingForm onSubmit={onSubmit} setAllRecipes={setAllRecipes}/>
                </div>
            </div>
        </div>
    )
}

export default Recipes;