import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getRecipesByEditor} from "../../../reducers/recipes-reducer";
import Recipe from "../../recipes/Recipe";
import styles from "./EditorArticles.module.scss";
import Article from "../../articles/Article";
import {getArticlesByEditor} from "../../../reducers/articles-reducer";

const EditorArticles = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state)=>state.articles.articles)

    useEffect(()=>{
        dispatch(getArticlesByEditor());
    }, [])

    const Articles = articles.map((article)=>{
        return <Article article={article}/>
    })

    return (
        <div>
            <p>Ваши рецепты:</p>
            <div className={styles.articles}>
                {Articles}
            </div>
        </div>
    )
}

export default EditorArticles;