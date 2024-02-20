import {useFormik} from "formik";
import styles from "../../editor-profile/editor-main/EditorMain.module.scss";
import React from "react";

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Это поле обязательное';
    }
    if (!values.calories) {
        errors.calories = 'Это поле обязательное';
    }
    if (!values.proteins) {
        errors.proteins = 'Это поле обязательное';
    }
    if (!values.fats) {
        errors.fats = 'Это поле обязательное';
    }
    if (!values.carbs) {
        errors.carbs = 'Это поле обязательное';
    }
    return errors;
};

const AddingProductForm = ({onSubmit}) => {
    const initialValues = {
        name: '',
        calories: 100,
        proteins: 0,
        fats: 0,
        carbs: 0
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
            <div className={styles.addingProduct}>
                <p>Наименование продукта:</p>
                <input className={formik.touched.name && formik.errors.name ? styles.errorField : ''}
                       id="name"
                       name="name"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className={styles.errorText}>{formik.errors.name}</div>
                ) : null}
            </div>

            <div className={styles.addingProduct}>
                <p>Калорийность на 100 грамм продукта:</p>
                <input className={formik.touched.calories && formik.errors.calories ? styles.errorField : ''}
                       id="calories"
                       name="calories"
                       type='number'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.calories}
                />
                <p>ккал</p>
                {formik.touched.calories && formik.errors.calories ? (
                    <div className={styles.errorText}>{formik.errors.calories}</div>
                ) : null}
            </div>
            <div className={styles.addingProduct}>
                <p>Количество белков:</p>
                <input className={formik.touched.proteins && formik.errors.proteins ? styles.errorField : ''}
                       id="proteins"
                       name="proteins"

                       type='number'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.proteins}
                />
                <p>грамм</p>
                {formik.touched.proteins && formik.errors.proteins ? (
                    <div className={styles.errorText}>{formik.errors.proteins}</div>
                ) : null}
            </div>
            <div className={styles.addingProduct}>
                <p>Количество жиров:</p>
                <input className={formik.touched.fats && formik.errors.fats ? styles.errorField : ''}
                       id="fats"
                       name="fats"

                       type='number'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.fats}
                />
                <p>грамм</p>
                {formik.touched.fats && formik.errors.fats ? (
                    <div className={styles.errorText}>{formik.errors.fats}</div>
                ) : null}
            </div>
            <div className={styles.addingProduct}>
                <p>Количество углеводов:</p>
                <input className={formik.touched.carbs && formik.errors.carbs ? styles.errorField : ''}
                       id="carbs"
                       name="carbs"
                       type='number'
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.carbs}
                />
                <p>грамм</p>
                {formik.touched.carbs && formik.errors.carbs ? (
                    <div className={styles.errorText}>{formik.errors.carbs}</div>
                ) : null}
            </div>

            <div className={styles.buttonContainer}>
                <button type="submit">Добавить</button>
            </div>
        </form>
    );
};

export default AddingProductForm;