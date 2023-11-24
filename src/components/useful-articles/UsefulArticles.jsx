import React from 'react';
import styles from './UsefulArticles.module.scss';
import ArticleHighlights from "./arcticle-highlights/ArticleHighlights";
import {useSelector} from "react-redux";
import {getArticlesForHighlights} from "../../reducers/articles-selectors";

const UsefulArticles = (props) =>{
    const articlesForHighlights = useSelector((state)=>getArticlesForHighlights(state));

    const ArticlesItems = articlesForHighlights.map(article =>
        <ArticleHighlights title={article.title} startText={article.text}/>)
    return (
        <div className={styles.coloring}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Полезные материалы</h2>
                <div className={styles.articles}>
                    {ArticlesItems}
                </div>
            </div>

        </div>
    )
}

export default UsefulArticles;