import React from 'react';
import { useFormik } from 'formik';
import {NavLink} from "react-router-dom";
import styles from '../login/Login.module.scss';

const validate = values => {
    const errors = {};

    if (!values.login) {
        errors.login = 'Это поле обязательное';
    }
    if (!values.password) {
        errors.password = 'Это поле обязательное';
    }
    if (!values.repeatedPassword) {
        errors.repeatedPassword = 'Это поле обязательное';
    }else if(values.repeatedPassword!==values.password){
        errors.repeatedPassword = 'Пароли не совпадают';
    }
    return errors;
};

const RegistrationForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            repeatedPassword: ''
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <input className={ formik.touched.login && formik.errors.login ? styles.errorField: '' }
                id="login"
                name="login"
                placeholder="Логин"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.login}
            />
            {formik.touched.login && formik.errors.login ? (
                <div className={styles.errorText}>{formik.errors.login}</div>
            ) : null}

            <input className={ formik.touched.password && formik.errors.password ? styles.errorField: '' }
                id="password"
                name="password"
                placeholder="Пароль"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className={styles.errorText}>{formik.errors.password}</div>
            ) : null}
            <input className={ formik.touched.repeatedPassword && formik.errors.repeatedPassword ? styles.errorField: '' }
                   id="repeatedPassword"
                   name="repeatedPassword"
                   placeholder="Повторите пароль"
                   type="password"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.repeatedPassword}
            />
            {formik.touched.repeatedPassword && formik.errors.repeatedPassword ? (
                <div className={styles.errorText}>{formik.errors.repeatedPassword}</div>
            ) : null}

            <div className={styles.buttonContainer}>
                <button type="submit">Создать</button>
                <NavLink className={styles.link} to={"/login"}>Уже есть аккаунт? Войдите</NavLink>
            </div>
        </form>
    );
};

export default RegistrationForm;