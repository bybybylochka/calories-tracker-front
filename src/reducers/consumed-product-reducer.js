import {productApi} from "../api/api";

const SET_CONSUMED_PRODUCTS = 'SET_CONSUMED_PRODUCTS';

const initialState = {
    consumptionInfo: {
        consumedProducts: [],
        totalKbju: {},
        caloriesByMealType: {}
    }
}

const ConsumedProductReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_CONSUMED_PRODUCTS:
            return {
                ...state,
                consumptionInfo: action.payload
            }
        default: return state;
    }

}

export const getTodayConsumedProducts = () => async (dispatch) => {
    let response = await productApi.getTodayConsumedProduct();
    if(response){
        dispatch(setConsumedProducts(response));
    }
}
export const addConsumedProduct = (productId, weight, mealType) => async (dispatch) => {
    await productApi.addConsumedProduct(productId, weight, mealType);
}

export const deleteConsumedProduct = (productId) => async (dispatch) => {
    await productApi.deleteConsumedProduct(productId);
}

export const setConsumedProducts = (products) => {
    return {
        type:SET_CONSUMED_PRODUCTS,
        payload: {...products}
    }
}

export default ConsumedProductReducer;