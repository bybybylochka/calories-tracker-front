import React from "react";
import AddingIngredientsFormItem from "./AddingIngredientsFormItem";
import styles from './EditorMain.module.scss';

const AddingIngredientsForm = ({quantity, ingredients, setIngredients}) => {
    const components = []
    for(let i = 0; i<quantity; i++) {
        components.push(<AddingIngredientsFormItem ingredients={ingredients} setIngredients={setIngredients}/>)
    }
    return (
        <div className={styles.ingredients}>
            {components}
        </div>
    )
}

export default AddingIngredientsForm