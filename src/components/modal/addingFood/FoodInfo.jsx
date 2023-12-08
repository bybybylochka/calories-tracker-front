import React, {useEffect, useState} from 'react';
import AddingFoodForm from "./AddingFoodForm";
import {useDispatch} from "react-redux";
import {addConsumedProduct} from "../../../reducers/consumed-product-reducer";

const FoodInfo = ({product, setAddingProduct, setLoaded}) => {
    let [newProduct, setNewProduct]= useState(product);
    let [weight, setWeight]= useState(100);
    const dispatch=useDispatch();
    const onWeightChange = (e) => {
        setWeight(e.target.value);
    }
    const onSubmit = (formData) => {
        dispatch(addConsumedProduct(newProduct.id, formData.weight));
        setTimeout(()=>{
            setAddingProduct(false);
            setLoaded(false);
        }, 1000)
    }
    useEffect(()=>{
        setNewProduct({
            ...newProduct,
            calories:product.calories*weight/100,
            proteins:product.proteins*weight/100,
            fats:product.fats*weight/100,
            carbs:product.carbs*weight/100
        })
    }, [weight]);
    return (
        <div>
            <p>{product.name}</p>
            <div>
                <p>Калорийность: {newProduct.calories}</p>
                <p>Белки: {newProduct.proteins}</p>
                <p>Углеводы: {newProduct.carbs}</p>
                <p>Жиры: {newProduct.fats}</p>
            </div>
            <AddingFoodForm onChange={onWeightChange} onSubmit={onSubmit}/>
        </div>
    )
}

export default FoodInfo;