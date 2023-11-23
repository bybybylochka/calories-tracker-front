import {authApi} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    token: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload}
        default: return state;
    }
}
export const login = (login, password) => async (dispatch) => {
    // let token = login+password;
    // dispatch(setUserData(token));
    let response = await authApi.login(login, password);
    if(response.token){
        dispatch(setUserData(response.token));
    }
    // else{
    //     const message = "Something is wrong";
    //     dispatch(stopSubmit("login", {_error: message}));
    // }
}

export const setUserData = (token) => {
    return {
        type: SET_USER_DATA,
        payload: {token}
    }
}


export default authReducer;