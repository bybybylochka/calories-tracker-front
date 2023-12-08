import authReducer from "../reducers/auth-reducer";
import articlesReducer from "../reducers/articles-reducer";
import personalDataReducer from "../reducers/personalData-reducer";
import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../reducers/product-reducer";
import consumedProductReducer from "../reducers/consumed-product-reducer";

let store=configureStore({
    reducer: {
        auth: authReducer,
        articles: articlesReducer,
        personalData: personalDataReducer,
        products: productReducer,
        consumedProducts: consumedProductReducer
    }
})

window.store=store;

export default store;