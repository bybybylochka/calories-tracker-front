import {useFormik} from "formik";
import styles from "./Recipes.module.scss";
import React, {useState} from "react";
import searchIcon from "../../assets/search.svg";
import {useDispatch} from "react-redux";
import {getAllRecipesByParams} from "../../reducers/recipes-reducer";

const RecipesSearchingForm = ({onSubmit, setAllRecipes}) => {
    const [maxCalories, setMaxCalories] = useState(1000);

    const onMaxCaloriesChange = (value) =>{
        setMaxCalories(value)
    }

    const onClearForm = () => {
        setAllRecipes(true);
        formik.values.title='';
        formik.values.maxCalories=1000;
        setMaxCalories(10000);
        formik.values.shouldSort=false;
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            maxCalories: 10000,
            shouldSort: false
        },
        onSubmit: values => {
            onSubmit(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={styles.searchingForm}>
                <img src={searchIcon} alt={'search'}/>
                <input id="title"
                       name="title"
                       placeholder="Название рецепта"
                       type="text"
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.title}
                />
                <button className={styles.searchButton} type="submit">Найти</button>
            </div>
            <div className={styles.paramsForm}>
                <label>
                    Максимальное количество калорий:
                    <input className={styles.filterForm} id="maxCalories"
                           name="maxCalories"
                           placeholder="Максимальное кол-во калорий"
                           type="range"
                           min={0}
                           max={1000}
                           step={10}
                           onChange={(e)=>{
                               formik.handleChange(e);
                               onMaxCaloriesChange(e.target.value);
                           }}
                           onBlur={formik.handleBlur}
                           value={formik.values.maxCalories}
                    />
                </label>
                <p>{maxCalories} ккал</p>
                <label>
                    Сначала самые популярные:
                    <input className={styles.sortForm} id="shouldSort"
                           name="shouldSort"
                           placeholder=""
                           type="checkbox"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.shouldSort}
                    />
                </label>
            </div>
            <button className={styles.clearButton} onClick={onClearForm}>Очистить</button>
        </form>
    );
};

export default RecipesSearchingForm;