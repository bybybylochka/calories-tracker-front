import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import authReducer from "../reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers=combineReducers({
    auth: authReducer
})

let store=createStore(reducers,  applyMiddleware(thunkMiddleware));

window.store=store;

export default store;