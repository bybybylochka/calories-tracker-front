import React, {useState} from 'react';
import AddingRecipesForm from "./AddingRecipesForm";
import {addRecipe} from "../../../reducers/recipes-reducer";
import {useDispatch} from "react-redux";

const AddingRecipes = ({setModalActive, setRecipesAdding}) => {
    const [ingredients, setIngredients] = useState([]);
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        const recipeComposition = {}
        for(const ingredient of ingredients) {
            recipeComposition[ingredient.id] = ingredient.quantity
        }
        const request = {
            title: formData.title,
            cookingTime: formData.cookingTime,
            servingCount: formData.servingCount,
            instruction: formData.instruction,
            ingredients: recipeComposition
        }
        console.log(request)
        dispatch(addRecipe(request));
        setRecipesAdding(false);
        setModalActive(true);
    }
    return (
        <div>
            <p>Публикация нового рецепта</p>
            <AddingRecipesForm onSubmit={onSubmit} igredients={ingredients} setIngredients={setIngredients}/>
        </div>
    )
}
export default AddingRecipes;