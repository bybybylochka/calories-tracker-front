import React from 'react';
import NavigationItem from "./NavigationItem";

const Navigation = ({isAuth, userName}) => {
    return (
        <nav>
            <ul>
                <NavigationItem link={"about-service"} text={"О сервисе"}/>
                <NavigationItem link={"materials"} text={"Материалы"}/>
                <NavigationItem link={"subscribe"} text={"Подписка"}/>
                {isAuth
                    ? <NavigationItem link={"personal-account"} text={userName}/>
                    : <NavigationItem link={"login"} text={"Войти в аккаунт"}/>
                }
            </ul>
        </nav>
    );
}

export default Navigation;