import {productApi, waterApi} from "../api/api";
import {getTodayConsumedProducts} from "./consumed-product-reducer";

const SET_CONSUMED_WATER = 'SET_CONSUMED_WATER';
const ADD_CONSUMED_WATER = 'ADD_CONSUMED_WATER';
const DELETE_CONSUMED_WATER = 'DELETE_CONSUMED_WATER';

const initialState = {
    totalVolume: 0
}

const ConsumedWaterReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_CONSUMED_WATER:
            return {
                ...state,
                ...action.payload
            }
        case ADD_CONSUMED_WATER:
            return {
                ...state,
                totalVolume: +state.totalVolume+ +action.payload.newVolume
            }
        case DELETE_CONSUMED_WATER:
            return {
                ...state,
                totalVolume: +state.totalVolume- +action.payload.newVolume
            }
        default: return state;
    }

}

export const getTodayConsumedWater = () => async (dispatch) => {
    let response = await waterApi.getTodayConsumedWater();
    if(response){
        dispatch(setConsumedWater(response.totalVolume));
    }
}
export const addConsumedWater = (volume) => async (dispatch) => {
    let response = await waterApi.addConsumedWater(volume);
    if(response){
        dispatch(addWater(volume));
    }
}
export const deleteConsumedWater = (volume) => async (dispatch) => {
    let response = await waterApi.deleteConsumedWater(volume);
    if(response){
        dispatch(deleteWater(volume));
    }
}

export const setConsumedWater = (totalVolume) => {
    return {
        type:SET_CONSUMED_WATER,
        payload: {totalVolume}
    }
}
export const addWater = (newVolume) => {
    return {
        type:ADD_CONSUMED_WATER,
        payload: {newVolume}
    }
}
export const deleteWater = (newVolume) => {
    return {
        type:DELETE_CONSUMED_WATER,
        payload: {newVolume}
    }
}

export default ConsumedWaterReducer;