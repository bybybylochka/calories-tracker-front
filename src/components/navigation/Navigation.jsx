import React from 'react';
import NavigationItem from "./NavigationItem";
import {useSelector} from "react-redux";

const Navigation = () => {
    const isAuth = useSelector(state=>state.auth.isAuth)
    return (
        <nav>
            <ul>
                <NavigationItem link={""} text={"О сервисе"}/>
                <NavigationItem link={"recipes"} text={"Рецепты"}/>
                <NavigationItem link={"articles"} text={"Статьи"}/>
                {isAuth
                    ? <NavigationItem link={"profile"} text={"Личный кабинет"}/>
                    : <NavigationItem link={"login"} text={"Войти в аккаунт"}/>
                }
            </ul>
        </nav>
    );
}

export default Navigation;