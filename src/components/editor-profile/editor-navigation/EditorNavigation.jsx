
import React from "react";
import styles from '../EditorProfile.module.scss';
import EditorNavigationItem from "./EditorNavigationItem";
import homeImage from '../../../assets/home.svg';
import coffeeImage from '../../../assets/coffee.svg';
import textImage from '../../../assets/type.svg';
import leftImage from '../../../assets/left.svg';
import logoImage from "../../../assets/Logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../reducers/auth-reducer";
import {Navigate} from "react-router-dom";

const Navigation = ({setEditorMenu}) => {
    const isAuth = useSelector((state)=>state.auth.isAuth);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(logout());
        setEditorMenu(false);
    }
    if(!isAuth) return <Navigate to={"/"}/>
    return (
        <nav className={styles.editorNavigation}>
            <ul>
                <img className={styles.logo} src={logoImage} alt={'Logo'}/>
                <EditorNavigationItem image={homeImage} link={"editorProfile/editorMain"} text={"Главная"}/>
                <EditorNavigationItem image={coffeeImage} link={"editorProfile/editorRecipes"} text={"Рецепты"}/>
                <EditorNavigationItem image={textImage} link={"editorProfile/editorArticles"} text={"Статьи"}/>
                <button className={styles.logoutButton} onClick={onClick}><img src={leftImage} alt={'left'}/>Выйти</button>
            </ul>
        </nav>
    );
}

export default Navigation;