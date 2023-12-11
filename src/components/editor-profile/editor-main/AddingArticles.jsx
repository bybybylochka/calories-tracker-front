import React, {useState} from 'react';
import AddingArticlesForm from "./AddingArticlesForm";
import styles from './EditorMain.module.scss'
import {useDispatch} from "react-redux";
import {addArticle} from "../../../reducers/articles-reducer";
import FullRecipe from "../../profile/dashboard/trackers/recipes-tracker/FullRecipe";
import ShopList from "../../profile/dashboard/trackers/recipes-tracker/ShopList";
import Modal from "../../modal/Modal";

const AddingArticles = ({setArticlesAdding, setModalActive}) => {
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        dispatch(addArticle(formData.title, formData.content));
        setArticlesAdding(false);
        setModalActive(true);
    }
    return (
        <div className={styles.addingArticle}>
            <p>Публикация новой статьи</p>
            <AddingArticlesForm onSubmit={onSubmit}/>
        </div>
    )
}

export default AddingArticles;