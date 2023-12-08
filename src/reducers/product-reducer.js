import {productApi} from "../api/api";

const SET_FINDING_PRODUCTS = 'SET_FINDING_PRODUCTS';

const initialState = {
    findingProducts: []
}

const ProductReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_FINDING_PRODUCTS:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }

}

export const findProductByName = (name) => async (dispatch) => {
    let response = await productApi.findProductByName(name);
    if(response){
        dispatch(setFindingProducts(response));
    }
}

export const setFindingProducts = (products) => {
    return {
        type:SET_FINDING_PRODUCTS,
        payload: {findingProducts: products}
    }
}

export default ProductReducer;