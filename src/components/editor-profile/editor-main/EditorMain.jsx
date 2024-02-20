import React, {useEffect, useState} from 'react';
import plusImage from '../../../assets/addIcon.svg';
import successImage from '../../../assets/tick.png';
import styles from './EditorMain.module.scss';
import {Navigate} from "react-router-dom";
import AddingArticlesForm from "./AddingArticlesForm";
import AddingArticles from "./AddingArticles";
import Modal from "../../modal/Modal";
import AddingRecipes from "./AddingRecipes";

const EditorMain = ({setEditorMenu}) => {
    const [modalActive, setModalActive] = useState(false);
    let [recipesAdding, setRecipesAdding] = useState(false);
    let [articlesAdding, setArticlesAdding] = useState(false);
     const onRecipesClick = () =>{
        setRecipesAdding(true);
    }
    const onArticlesClick = () =>{
        setArticlesAdding(true);
    }
    useEffect(()=>{
        setEditorMenu(true);
    })
    if(articlesAdding){
        return <AddingArticles setArticlesAdding={setArticlesAdding} setModalActive={setModalActive}/>
    }
    if(recipesAdding){
        return <AddingRecipes setRecipesAdding={setRecipesAdding} setModalActive={setModalActive}/>
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.addingBlock} onClick={()=> onArticlesClick()}>
                <p>Добавить статью</p>
                <img src={plusImage} alt={'plus'}/>
            </div>
            <div className={styles.addingBlock} onClick={()=> onRecipesClick()}>
                <p>Добавить рецепт</p>
                <img src={plusImage} alt={'plus'}/>
            </div>
            <Modal active={modalActive} setActive={setModalActive} backgroundColor={'food'}>
                <p className={styles.successMessage}>Статья успешно опубликована!</p>
                <img className={styles.successImage} src={successImage} alt={'success'}/>
            </Modal>
            <Modal active={modalActive} setActive={setModalActive} backgroundColor={'food'}>
                <p className={styles.successMessage}>Рецепт успешно опубликована!</p>
                <img className={styles.successImage} src={successImage} alt={'success'}/>
            </Modal>
        </div>
    )
}

export default EditorMain;