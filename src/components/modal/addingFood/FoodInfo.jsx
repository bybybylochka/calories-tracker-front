import React, {useEffect, useState} from 'react';
import AddingFoodForm from "./AddingFoodForm";
import {useDispatch} from "react-redux";
import {addConsumedProduct} from "../../../reducers/consumed-product-reducer";
import styles from './AddingFood.module.scss';

const FoodInfo = ({product, setAddingProduct, setLoaded, mealType}) => {
    let [newProduct, setNewProduct]= useState(product);
    let [weight, setWeight]= useState(100);
    const dispatch=useDispatch();
    const onWeightChange = (e) => {
        setWeight(e.target.value);
    }
    const onSubmit = (formData) => {
        dispatch(addConsumedProduct(newProduct.id, formData.weight, mealType));
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
        <div className={styles.foodInfo}>
            <p className={styles.productName}>{product.name}</p>
            <div>
                <p>Калорийность: {newProduct.calories} ккал</p>
                <p>Белки: {newProduct.proteins} г</p>
                <p>Углеводы: {newProduct.carbs} г</p>
                <p>Жиры: {newProduct.fats} г</p>
            </div>
            <AddingFoodForm onChange={onWeightChange} onSubmit={onSubmit}/>
        </div>
    )
}

export default FoodInfo;