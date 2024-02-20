
import React from "react";
import styles from '../AdminProfile.module.scss';
import AdminNavigationItem from "./AdminNavigationItem";
import homeImage from '../../../assets/home.svg';
import coffeeImage from '../../../assets/coffee.svg';
import textImage from '../../../assets/type.svg';
import leftImage from '../../../assets/left.svg';
import logoImage from "../../../assets/Logo.svg";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../reducers/auth-reducer";
import {Navigate} from "react-router-dom";

const Navigation = ({setAdminMenu}) => {
    const isAuth = useSelector((state)=>state.auth.isAuth);
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(logout());
        setAdminMenu(false);
    }
    if(!isAuth) return <Navigate to={"/"}/>
    return (
        <nav className={styles.editorNavigation}>
            <ul>
                <img className={styles.logo} src={logoImage} alt={'Logo'}/>
                <AdminNavigationItem image={homeImage} link={"adminProfile/users"} text={"Пользователи"}/>
                <AdminNavigationItem image={textImage} link={"adminProfile/editors"} text={"Редакторы"}/>
                <AdminNavigationItem image={coffeeImage} link={"adminProfile/products"} text={"Продукты"}/>
                <button className={styles.logoutButton} onClick={onClick}><img src={leftImage} alt={'left'}/>Выйти</button>
            </ul>
        </nav>
    );
}

export default Navigation;