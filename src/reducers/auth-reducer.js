import {authApi} from "../api/api";
import Cookies from "js-cookie";

const SET_USER_DATA = "SET_USER_DATA";
const REMOVE_USER_DATA = "REMOVE_USER_DATA";

let initialState = {
    role: '',
    isAuth:false
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case REMOVE_USER_DATA:
            return {
                ...state,
                isAuth: false,
                role: ''
            }
        default: return state;
    }
}
export const login = (login, password) => async (dispatch) => {
    let response = await authApi.login(login, password);
    if(response){
        Cookies.set('jwt', response.token, {expires: 1});
        Cookies.set('role', response.role, {expires: 1})
        dispatch(setUserData(response.role));
    }
}
export const logout = () => async (dispatch) => {
    await authApi.logout();
    Cookies.remove('jwt');
    Cookies.remove('role')
    dispatch(removeUserData());
}
export const register = (login, password) => async (dispatch) => {
    let response = await authApi.registration(login, password);
    if(response){
        Cookies.set('jwt', response.token, {expires: 1})
        Cookies.set('role', response.role, {expires: 1})
        dispatch(setUserData(response.token));
    }
}
export const me = () => async (dispatch) => {
    if(Cookies.get('jwt')){
        dispatch(setUserData(Cookies.get('role')));
    }
}

export const setUserData = (role) => {
    return {
        type: SET_USER_DATA,
        payload: {role}
    }
}
export const removeUserData = () => {
    return {
        type: REMOVE_USER_DATA
    }
}


export default authReducer;