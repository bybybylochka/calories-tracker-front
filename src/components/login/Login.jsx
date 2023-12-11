import React from 'react';
import authImage from '../../assets/authImage.svg';
import LoginForm from "./LoginForm";
import styles from "./Login.module.scss";
import {Navigate, NavLink} from "react-router-dom";
import {login} from "../../reducers/auth-reducer";
import {useDispatch, useSelector} from "react-redux";


const Login = () => {
    let isAuth = useSelector((state)=>state.auth.isAuth);
    let role = useSelector((state)=>state.auth.role);

    let dispatch = useDispatch();
    const onSubmit = (formData) =>{
        dispatch(login(formData.login, formData.password));
    }

    if(isAuth){
        if(role==='ROLE_USER') return  <Navigate replace to={"/profile"} />
        else if(role==='ROLE_EDITOR') return  <Navigate replace to={"/editorProfile"}/>
    }

    return (
        <div className={styles.coloring}>
            <div className={styles.wrapper}>
                <div className={styles.formContainer}>
                    <p className={styles.title}>Войдите в личный аккаунт, чтобы продолжить: </p>
                    <LoginForm onSubmit={onSubmit}/>
                    <p className={styles.conditions}>Нажимая на кнопку, вы соглашаетесь с
                        <NavLink to={"/conditions"}> условиями обработки персональных данных </NavLink>
                        и с правилами пользования Сайтом
                    </p>
                </div>
                <img src={authImage} alt='auth'/>
            </div>
        </div>
    )
}

export default Login;

