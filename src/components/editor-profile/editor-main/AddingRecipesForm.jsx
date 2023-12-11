import {useFormik} from "formik";
import styles from "./EditorMain.module.scss";
import React from "react";

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Это поле обязательное';
    }
    if (!values.content) {
        errors.content = 'Это поле обязательное';
    }
    return errors;
};

const AddingRecipesForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            cookingTime: '',
            servingCount: '',
            instruction: ''
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <input className={ formik.touched.title && formik.errors.logititlen ? styles.errorField: '' }
                   id="title"
                   name="title"
                   placeholder="Заголовок"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
                <div className={styles.errorText}>{formik.errors.title}</div>
            ) : null}

            <textarea className={ formik.touched.content && formik.errors.content ? styles.errorField: '' }
                      id="content"
                      name="content"
                      placeholder="Содержание статьи..."
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.content}
                      rows={15}
            />
            {formik.touched.content && formik.errors.content ? (
                <div className={styles.errorText}>{formik.errors.content}</div>
            ) : null}

            <div className={styles.buttonContainer}>
                <button type="submit">Опубликовать</button>
            </div>
        </form>
    );
};

export default AddingRecipesForm;