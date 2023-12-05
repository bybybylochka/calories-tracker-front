import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "../reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import articlesReducer from "../reducers/articles-reducer";
import personalDataReducer from "../reducers/personalData-reducer";
import {configureStore} from "@reduxjs/toolkit";

// let reducers=combineReducers({
//     auth: authReducer,
//     articles: articlesReducer,
//     personalData: personalDataReducer
// })

let store=configureStore({
    reducer: {
        auth: authReducer,
        articles: articlesReducer,
        personalData: personalDataReducer
    }
})
// let store=createStore(reducers,  applyMiddleware(thunkMiddleware));

window.store=store;

export default store;