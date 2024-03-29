import {useFormik} from "formik";
import React from "react";
import styles from './AddingFood.module.scss'

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Введите название продукта';
    }
    return errors;
};

const SearchingFoodForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues: {
            name: ''
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form className={styles.searchingForm} onSubmit={formik.handleSubmit}>
            <input id="name"
                   name="name"
                   placeholder="Название продукта"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.name}
            />
            <button type="submit">Найти</button>
        </form>
    );
};

export default SearchingFoodForm;