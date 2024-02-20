import React, {useState} from "react";
import {getAllByName} from "../../../reducers/product-reducer";
import styles from './EditorMain.module.scss'

const AddingIngredientsFormItem = ({ingredients, setIngredients}) => {
    const [foundProducts, setFoundProducts] = useState([])
    const [productId, setProductId] = useState()
    const [productName, setProductName] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    async function handleProductNameChange(e){
        console.log(e.target.value)
        setProductName(e.target.value)
        let foundProducts = await getAllByName(e.target.value);
        setFoundProducts(foundProducts)
    }

    const onSaveButtonClick = (e) => {
        e.preventDefault()
        const ingredient = {
            id: productId,
            quantity: quantity
        }
        setIngredients([...ingredients, ingredient])
        console.log(ingredients)
    }

    const handleSuggestion = (product) => {
        setProductId(product.id)
        setProductName(product.name)
        setFoundProducts([])
    }

    return (
        <form className={styles.ingredient}>
            <div className={styles.ingredientSearch}>
                <input
                    id={"productName"}
                    name={"productName"}
                    placeholder={"Название продукта"}
                    onChange={(e) => {
                        handleProductNameChange(e)
                    }}
                    value={productName}
                />
                <ul>
                    { foundProducts.map((product, index) =>
                        (<li key={index} onClick={() => handleSuggestion(product)}>{product.name}</li>))
                    }
                </ul>
            </div>
            <input
                id={"quantity"}
                name={"quantity"}
                placeholder={"Кол-во"}
                type={"number"}
                min={1}
                onChange={handleQuantityChange}
                value={quantity}
            />
            <div>
                <button onClick={onSaveButtonClick}>Сохранить</button>
            </div>
        </form>
    )
}

export default AddingIngredientsFormItem