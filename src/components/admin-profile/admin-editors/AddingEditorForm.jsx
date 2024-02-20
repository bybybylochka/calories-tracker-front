import {useFormik} from "formik";
import styles from "../../editor-profile/editor-main/EditorMain.module.scss";
import React from "react";

const validate = values => {
    const errors = {};

    if (!values.fullname) {
        errors.fullname = 'Это поле обязательное';
    }
    if (!values.username) {
        errors.username = 'Это поле обязательное';
    }
    if (!values.password) {
        errors.password = 'Это поле обязательное';
    }
    return errors;
};

const AddingEditorForm = ({onSubmit}) => {
    const initialValues = {
        fullname: '',
            username: '',
            password: ''
    }
    const formik = useFormik({
        initialValues: initialValues,
        validate,
        onSubmit: values => {
            onSubmit(values, formik.resetForm);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <input className={ formik.touched.fullname && formik.errors.fullname ? styles.errorField: '' }
                   id="fullname"
                   name="fullname"
                   placeholder="Полное имя редактора"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.fullname}
            />
            {formik.touched.fullname && formik.errors.fullname ? (
                <div className={styles.errorText}>{formik.errors.fullname}</div>
            ) : null}

            <input className={ formik.touched.username && formik.errors.username ? styles.errorField: '' }
                      id="username"
                      name="username"
                      placeholder="Логин"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
                <div className={styles.errorText}>{formik.errors.username}</div>
            ) : null}
            <input className={ formik.touched.password && formik.errors.password ? styles.errorField: '' }
                   id="password"
                   name="password"
                   placeholder="Пароль"
                   type='password'
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className={styles.errorText}>{formik.errors.password}</div>
            ) : null}

            <div className={styles.buttonContainer}>
                <button type="submit">Добавить</button>
            </div>
        </form>
    );
};

export default AddingEditorForm;