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
                ...action.payload,
                isAuth: true
            }
        default: return state;
    }
}
export const login = (login, password) => async (dispatch) => {
    let response = await authApi.login(login, password);
    if(response.token){
        Cookies.set('jwt', response.token)
        dispatch(setUserData(response.token));
    }
}

export const setUserData = (token) => {
    return {
        type: SET_USER_DATA,
        payload: {token}
    }
}


export default authReducer;