import {useFormik} from "formik";
import styles from "./EditorMain.module.scss";
import React, {useState} from "react";
import AddingIngredientsFormBuilder from "./AddingIngredientsFormBuilder";
import {useDispatch} from "react-redux";
import {addRecipe} from "../../../reducers/recipes-reducer";

const validate = values => {
    const errors = {};

    if (!values.title) {
        errors.title = 'Это поле обязательное';
    }
    return errors;
};

const AddingRecipesForm = ({onSubmit, ingredients, setIngredients}) => {

    const formik = useFormik({
        initialValues: {
            title: '',
            cookingTime: '',
            servingCount: '',
            instruction: '',
            quantity: ''
        },
        validate,
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <input className={ formik.touched.title && formik.errors.title ? styles.errorField: '' }
                   id="title"
                   name="title"
                   placeholder="Название рецепта"
                   type="text"
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
                <div className={styles.errorText}>{formik.errors.title}</div>
            ) : null}

            <input className={ formik.touched.cookingTime && formik.errors.cookingTime ? styles.errorField: '' }
                      id="cookingTime"
                      name="cookingTime"
                   type={"number"}
                   min={1}
                      placeholder="Время приготовления в минутах"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.cookingTime}
            />
            {formik.touched.cookingTime && formik.errors.cookingTime ? (
                <div className={styles.errorText}>{formik.errors.cookingTime}</div>
            ) : null}
            <input className={ formik.touched.servingCount && formik.errors.servingCount ? styles.errorField: '' }
                   id="servingCount"
                   name="servingCount"
                   placeholder="Количество порций"
                   type={"number"}
                   min={1}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.servingCount}
            />
            {formik.touched.servingCount && formik.errors.servingCount ? (
                <div className={styles.errorText}>{formik.errors.servingCount}</div>
            ) : null}

            <AddingIngredientsFormBuilder
                formik={formik}
                ingredients={ingredients}
                setIngredients={setIngredients}
            />

            <textarea className={ formik.touched.instruction && formik.errors.instruction ? styles.errorField: '' }
                               id="instruction"
                               name="instruction"
                               placeholder="Инструкция по приготовлению..."
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               value={formik.values.instruction}
                      rows={10}
            />
            {formik.touched.instruction && formik.errors.instruction ? (
                <div className={styles.errorText}>{formik.errors.instruction}</div>
            ) : null}

            <div className={styles.buttonContainer}>
                <button type="submit" onSubmit={onSubmit}>Опубликовать</button>
            </div>
        </form>
    );
};

export default AddingRecipesForm;