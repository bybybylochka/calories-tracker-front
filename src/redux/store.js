import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "../reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";
import articlesReducer from "../reducers/articles-reducer";

let reducers=combineReducers({
    auth: authReducer,
    articles: articlesReducer
})

let store=createStore(reducers,  applyMiddleware(thunkMiddleware));

window.store=store;

export default store;