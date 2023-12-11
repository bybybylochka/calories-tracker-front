import authReducer from "../reducers/auth-reducer";
import articlesReducer from "../reducers/articles-reducer";
import personalDataReducer from "../reducers/personalData-reducer";
import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../reducers/product-reducer";
import consumedProductReducer from "../reducers/consumed-product-reducer";
import consumedWaterReducer from "../reducers/consumed-water-reducer";
import recipesReducer from "../reducers/recipes-reducer";

let store=configureStore({
    reducer: {
        auth: authReducer,
        articles: articlesReducer,
        personalData: personalDataReducer,
        products: productReducer,
        consumedProducts: consumedProductReducer,
        consumedWater: consumedWaterReducer,
        recipes: recipesReducer
    }
})

window.store=store;

export default store;