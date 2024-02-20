import React, {useState} from "react";
import styles from "./EditorMain.module.scss";
import AddingIngredientsForm from "./AddingIngredientsForm";

const AddingIngredientsFormBuilder = ({formik, ingredients, setIngredients}) => {
    const [isActive, setIsActive] = useState(false);
    const onClick = (e) => {
        e.preventDefault();
        setIsActive(true)
    }
    return (
        <div>
            <div className={styles.quantity}>
                <input className={ formik.touched.quantity && formik.errors.quantity ? styles.errorField: '' }
                       id="quantity"
                       name="quantity"
                       placeholder="Количество ингредиентов"
                       type={"number"}
                       min={1}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.quantity}
                />
                {formik.touched.quantity && formik.errors.quantity ? (
                    <div className={styles.errorText}>{formik.errors.title}</div>
                ) : null}

                <button onClick={onClick}>Добавить ингредиенты</button>
            </div>

            <div>
                {isActive && <AddingIngredientsForm
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                    quantity={formik.values.quantity}
                />}
            </div>

        </div>
    )
}

export default AddingIngredientsFormBuilder