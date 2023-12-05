import {authApi, personalDataApi} from "../api/api";
import {setUserData} from "./auth-reducer";

const SET_USER_PERSONAL_DATA = 'SET_USER_PERSONAL_DATA';

const initialState = {
    name: '',
    norm: {}
}

const personalDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PERSONAL_DATA:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}

export const getPersonalData = () => async (dispatch) => {
    let response = await personalDataApi.getPersonalData();
    if(response){
        console.log(response)
        dispatch(setUserPersonalData(response));
    }
}

export const setUserPersonalData = (response) => ({
    type: SET_USER_PERSONAL_DATA,
    payload: {
        ...response
    }
})

export default personalDataReducer;