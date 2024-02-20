import {editorsApi, usersApi} from "../api/api";

const SET_EDITORS = 'SET_EDITORS';
const ADD_EDITOR = 'ADD_EDITOR';

const initialState = {
    editors: []
}

const editorsReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_EDITORS:
            return {
                ...state,
                ...action.payload
            }
        case ADD_EDITOR:
            return {
                ...state,
                editors: [...state.editors, action.payload.editor]
            }

        default: return state;
    }
}

export const getEditors = () => async (dispatch) => {
    let response = await editorsApi.getEditors();
    if(response){
        dispatch(setEditors(response.editors))
    }
}
export const addEditors = (fullname, username, password) => async (dispatch) => {
    let response = await editorsApi.addEditor(fullname, {username, password});
    if(response){
        dispatch(addEditor(response))
    }
}
export const setEditors = (editors) => {
    return {
        type: SET_EDITORS,
        payload: {editors}
    }
}
export const addEditor = (editor) => {
    return {
        type: ADD_EDITOR,
        payload: {editor}
    }
}
export default editorsReducer;