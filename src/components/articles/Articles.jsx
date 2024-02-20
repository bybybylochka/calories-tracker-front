import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getAllRecipes, getAllRecipesByParams} from "../../reducers/recipes-reducer";
import Recipe from "../recipes/Recipe";
import styles from "../recipes/Recipes.module.scss";
import RecipesSearchingForm from "../recipes/RecipesSearchingForm";
import {getAllArticles} from "../../reducers/articles-reducer";
import Article from "./Article";

const Articles = () => {
    const articles = useSelector((state)=>state.articles.articles);
    // const [allArticles, setAllRecipes]=useState(false);
    const dispatch = useDispatch();
    //
    // const onSubmit = (formData) => {
    //     setAllRecipes(false);
    //     dispatch(getAllRecipesByParams(formData.title, formData.maxCalories, formData.shouldSort));
    // }

    useEffect(()=>{
        dispatch(getAllArticles());
    }, [])
    // useEffect(()=>{
    //     if(allRecipes===true)
    //         dispatch(getAllRecipes());
    // }, [allRecipes])


    const Articles = articles.map((article)=>{
        return <Article article={article}/>
    })
    return (
        <div className={styles.coloring}>
            <div className={styles.wrapper}>
                <div className={styles.articles}>
                    <h3 className={styles.title}>Полезные и вкусные рецепты</h3>
                    {Articles}
                </div>
                {/*<div className={styles.searchBar}>\*/}
                {/*    <RecipesSearchingForm onSubmit={onSubmit} setAllRecipes={setAllRecipes}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Articles;