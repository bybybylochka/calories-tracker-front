import React from 'react';
import Navigation from "./editor-navigation/EditorNavigation";
import styles from './EditorProfile.module.scss'
import {Route, Routes} from "react-router-dom";
import MainPage from "../main-page/MainPage";
import EditorMain from "./editor-main/EditorMain";
import EditorRecipes from "./editor-recipes/EditorRecipes";
import EditorArticles from "./editor-articles/EditorArticles";



const EditorProfile = ({setEditorMenu}) => {
    return (
        <div className={styles.wrapper}>
            <Navigation setEditorMenu={setEditorMenu}/>
            <div className={styles.main}>
                <h3 className={styles.title}>Доступ редактора</h3>
                    <Routes>
                        <Route path='/editorMain' element={<EditorMain setEditorMenu={setEditorMenu}/>}/>
                        <Route path='/editorRecipes' element={<EditorRecipes/>}/>
                        <Route path='/editorArticles' element={<EditorArticles/>}/>
                    </Routes>

            </div>
        </div>
    )
}

export default EditorProfile;