import React from 'react';
import NavigationItem from "./NavigationItem";
import {useSelector} from "react-redux";

const Navigation = () => {
    const isAuth = useSelector(state=>state.auth.isAuth)
    return (
        <nav>
            <ul>
                <NavigationItem link={"about-service"} text={"О сервисе"}/>
                <NavigationItem link={"materials"} text={"Материалы"}/>
                <NavigationItem link={"subscribe"} text={"Подписка"}/>
                {isAuth
                    ? <NavigationItem link={"profile"} text={"Личный кабинет"}/>
                    : <NavigationItem link={"login"} text={"Войти в аккаунт"}/>
                }
            </ul>
        </nav>
    );
}

export default Navigation;