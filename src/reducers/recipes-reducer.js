import {articlesApi, recipesApi, usersApi, waterApi} from "../api/api";

const SET_FAVOURITE_RECIPES = 'SET_FAVOURITE_RECIPES';
const SET_SHOP_LIST = 'SET_SHOP_LIST';
const SET_RECIPES = 'SET_RECIPES';
const ADD_RECIPE_TO_FAVOURITE = 'ADD_RECIPE_TO_FAVOURITE';

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
        // case ADD_RECIPE_TO_FAVOURITE:
        //     return {
        //         ...state,
        //         recipes: [...state.recipes.map((recipe)=>{
        //             if(recipe.id===action.payload.recipeId){
        //                 recipe.likesCount=recipe.likesCount+1;
        //             }
        //             return recipe;
        //         })]
        //     }
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
export const addRecipe = (request) => async (dispatch) => {
    let response = await recipesApi.addRecipe(request);
    if(response){
        console.log(response);
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
export const addFavouriteRecipe = (recipeId) => async (dispatch)=>{
    let response = await usersApi.addFavouriteRecipe(recipeId);
    if(response){
        console.log(response);
        dispatch(getAllRecipes());
        //dispatch(addRecipeToFavourite(recipeId))
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