import React from 'react';
import { useFormik } from 'formik';
import {NavLink} from "react-router-dom";
import styles from './Login.module.scss';

const validate = values => {
    const errors = {};

    if (!values.login) {
        errors.login = 'Это поле обязательное';
    }
    if (!values.password) {
        errors.password = 'Это поле обязательное';
    }
    return errors;
};

const LoginForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
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

            <div className={styles.buttonContainer}>
                <button type="submit">Войти</button>

                <NavLink className={styles.link} to={"/registration"}>Еще нет аккаунта? Создайте</NavLink>
            </div>
        </form>
    );
};

export default LoginForm;