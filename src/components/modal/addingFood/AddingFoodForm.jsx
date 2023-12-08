import {useFormik} from "formik";
import styles from "./AddingFood.module.scss";
import React from "react";

const AddingFoodForm = ({onSubmit, onChange}) => {
    const formik = useFormik({
        initialValues: {
            weight: 100
        },
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form className={styles.searchingForm} onSubmit={formik.handleSubmit}>
            <div>
                <input id="weight"
                       name="weight"
                       placeholder="Вес"
                       type="text"
                       onChange={(event) => {
                           formik.handleChange(event);
                           onChange(event);
                       }}
                       onBlur={formik.handleBlur}
                       value={formik.values.weight}
                />
                <p> грамм</p>
            </div>
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddingFoodForm;