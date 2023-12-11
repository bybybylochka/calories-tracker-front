import {authApi} from "../api/api";
import Cookies from "js-cookie";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    token: null,
    isAuth:false
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: true
            }
        default: return state;
    }
}
export const login = (login, password) => async (dispatch) => {
    let response = await authApi.login(login, password);
    if(response.token){
        Cookies.set('jwt', response.token, {expires: 1})
        dispatch(setUserData(response.token));
    }
}
export const register = (login, password) => async (dispatch) => {
    let response = await authApi.registration(login, password);
    console.log(response);
    if(response.token){
        Cookies.set('jwt', response.token, {expires: 1})
        dispatch(setUserData(response.token));
    }
}
export const me = () => async (dispatch) => {
    if(Cookies.get('jwt')){
        dispatch(setUserData());
    }
}

export const setUserData = () => {
    return {
        type: SET_USER_DATA,
    }
}


export default authReducer;