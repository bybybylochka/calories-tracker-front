import styles from "./Articles.module.scss";
import React from "react";

const Article = ({article}) => {
    return (
        <div className={styles.articleWrapper}>
            <p className={styles.articleTitle}>{article.title}</p>
            <p className={styles.content}>{article.content}</p>
            <div className={styles.creatingInfo}>
                <p>Автор: {article.editorName}</p>
                <p>Дата публикации: {article.publicationTime.split('T')[0]}</p>
            </div>
        </div>
    )
}

export default Article;