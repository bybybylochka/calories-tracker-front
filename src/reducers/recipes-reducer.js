import {recipesApi, waterApi} from "../api/api";

const SET_FAVOURITE_RECIPES = 'SET_FAVOURITE_RECIPES';
const SET_SHOP_LIST = 'SET_SHOP_LIST';
const SET_RECIPES = 'SET_RECIPES';

const initialState = {
    favouriteRecipes: [],
    shopList: {},
    recipes: []
}

const recipesReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_FAVOURITE_RECIPES:
            return {
                ...state,
                ...action.payload
            }
        case SET_SHOP_LIST:
            return {
                ...state,
                ...action.payload
            }
        case SET_RECIPES:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}

export const getFavouriteRecipes = () => async (dispatch) => {
    let response = await recipesApi.getFavouriteRecipes();
    if(response){
        dispatch(setFavouriteRecipes(response));
    }
}
export const getAllRecipes = () => async (dispatch) => {
    let response = await recipesApi.getAllRecipes();
    if(response){
        dispatch(setRecipes(response.recipes));
    }
}
export const getRecipesByEditor = () => async (dispatch) => {
    let response = await recipesApi.getRecipesByEditor();
    if(response){
        dispatch(setRecipes(response.recipes));
    }
}
export const getAllRecipesByParams = (title, maxCalories, shouldSort) => async (dispatch) => {
    console.log(title, maxCalories, shouldSort);
    let response = await recipesApi.getAllRecipesByParams(title, maxCalories, shouldSort);
    if(response){
        dispatch(setRecipes(response.recipes));
    }
}

export const createShopList = (recipes) => async (dispatch) => {
    let response = await recipesApi.createShopList(recipes);
    if(response){
        dispatch(setShopList(response.response));
    }
}

export const setFavouriteRecipes = (favouriteRecipes) => {
    return {
        type: SET_FAVOURITE_RECIPES,
        payload: {favouriteRecipes}
    }
}
export const setRecipes = (recipes) => {
    return {
        type: SET_RECIPES,
        payload: {recipes}
    }
}
export const setShopList = (shopList) => {
    return {
        type: SET_SHOP_LIST,
        payload: {shopList}
    }
}


export default recipesReducer;