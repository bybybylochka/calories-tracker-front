import React, {useEffect, useState} from 'react';
import styles from './AddingFood.module.scss';
import searchIcon from "../../../assets/search.svg";
import SearchingFoodForm from "./SearchingFoodForm";
import {useDispatch, useSelector} from "react-redux";
import {findProductByName} from "../../../reducers/product-reducer";
import {deleteConsumedProduct, getTodayConsumedProducts} from "../../../reducers/consumed-product-reducer";
import crossIcon from '../../../assets/cross.svg';
import FoodInfo from "./FoodInfo";

const AddingFood = ({mealName, active}) => {

    const [addingProduct, setAddingProduct] = useState(false);
    const [newProduct, setNewProduct] = useState({});
    const [loaded, setLoaded] = useState(  false);


    const findingProducts = useSelector((state) => state.products.findingProducts);
    const consumptionInfo = useSelector((state) => state.consumedProducts.consumptionInfo);
    const dispatch = useDispatch();
    const findProduct = (formData) => {
        dispatch(findProductByName(formData.name));
    }
    const deleteProduct = (productId) => {
        dispatch(deleteConsumedProduct(productId));
        setTimeout(() => {
            setLoaded(false);
        }, 1000)
    }
    useEffect(() => {
        if(!loaded) {
            dispatch(getTodayConsumedProducts());
            setLoaded(true);
        }
    }, [loaded]);
    useEffect(()=>{
        if(active===false){
            setAddingProduct(false);
            setNewProduct({});
        }
    }, [active])

    const FindingProducts = findingProducts.map((product) => (
        <div className={styles.searchedProduct} onClick={() => {
            setAddingProduct(true);
            setNewProduct(product);
        }}>
            <p>{product.name}</p>
            <p>{product.calories} ккал</p>
        </div>
    ))
    const ConsumedProducts = consumptionInfo.consumedProducts.map((product) => (
        <div className={styles.consumedProduct}>
            <img src={crossIcon} alt={'cross'} onClick={()=>deleteProduct(product.id)}/>
            <p className={styles.name}>{product.productName}</p>
            <p>{product.kbju.calories} ккал</p>
        </div>
    ))

    return (
        <div>
            <p className={styles.title}>Добавить продукты на {mealName.toLowerCase()}</p>
            <div className={styles.addingProduct}>
                {addingProduct
                    ? <FoodInfo product={newProduct} setLoaded={setLoaded} setAddingProduct={setAddingProduct}/>
                    : <div className={styles.mealHistory}>
                        {ConsumedProducts}
                        <p>Итого: {consumptionInfo.totalKbju.calories}</p>
                    </div>
                }

                <div className={styles.searchingProduct}>
                    <div className={styles.searchBar}>
                        <img src={searchIcon} alt={'search'}/>
                        <SearchingFoodForm onSubmit={findProduct}/>
                    </div>
                    <div className={styles.searchedProducts}>
                        {FindingProducts}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddingFood;