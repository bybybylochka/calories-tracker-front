import {useFormik} from "formik";
import styles from "../../modal/addingFood/AddingFood.module.scss";
import React from "react";

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Введите название продукта';
    }
    return errors;
};

const SearchingProductForm = ({onSubmit}) => {

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

export default SearchingProductForm;