import {authApi, personalDataApi} from "../api/api";
import {setUserData} from "./auth-reducer";

const SET_USER_PERSONAL_DATA = 'SET_USER_PERSONAL_DATA';

const initialState = {
    name: '',
    gender: '',
    activityType:'',
    goalType: '',
    height: '',
    dateOfBirth: {},
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
        dispatch(setUserPersonalData(response));
    }
}

export const addPersonalData = (personalData) => async (dispatch) => {
    console.log(personalData);
    let response = await personalDataApi.addPersonalData(personalData);
    if(response){
        console.log(response);
    }
}

export const updatePersonalData = (personalData) => async (dispatch) => {
    console.log(personalData);
    let response = await personalDataApi.updatePersonalData(personalData);
    if(response){
        console.log(response);
    }
}



export const setUserPersonalData = (response) => ({
    type: SET_USER_PERSONAL_DATA,
    payload: {
        ...response
    }
})

export default personalDataReducer;