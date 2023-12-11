
import React from "react";
import styles from '../EditorProfile.module.scss';
import Logo from "../../logo/Logo";
import EditorNavigationItem from "./EditorNavigationItem";
import homeImage from '../../../assets/home.svg';
import coffeeImage from '../../../assets/coffee.svg';
import textImage from '../../../assets/type.svg';
import leftImage from '../../../assets/left.svg';

const Navigation = () => {
    return (
        <nav className={styles.editorNavigation}>
            <ul>
                <Logo/>
                <EditorNavigationItem image={homeImage} link={"editorProfile/editorMain"} text={"Главная"}/>
                <EditorNavigationItem image={coffeeImage} link={"editorProfile/editorRecipes"} text={"Рецепты"}/>
                <EditorNavigationItem image={textImage} link={"editorProfile/editorArticles"} text={"Статьи"}/>
                <EditorNavigationItem image={leftImage} text={"Выйти"}/>
            </ul>
        </nav>
    );
}

export default Navigation;