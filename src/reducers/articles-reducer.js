import {articlesApi, recipesApi} from "../api/api";
import {setFavouriteRecipes, setRecipes} from "./recipes-reducer";

const SET_ARTICLES = 'SET_ARTICLES';

let initialState = {
    articles: []
}

const articlesReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ARTICLES:
            return {
                ...state,
                ...action.payload
            }
        default: return state;
    }
}
export const getAllArticles = () => async (dispatch) => {
    let response = await articlesApi.gerArticles();
    if(response){
        dispatch(setArticles(response.articles));
    }
}
export const getArticlesByEditor = () => async (dispatch) => {
    let response = await articlesApi.getArticlesByEditor();
    if(response){
        dispatch(setArticles(response.articles));
    }
}

export const addArticle = (title, content) => async (dispatch) => {
    let response = await articlesApi.addArticle(title, content);
    if(response){
        console.log(response);
    }
}
export const setArticles = (articles) => {
    return {
        type: SET_ARTICLES,
        payload: {articles}
    }
}

export default articlesReducer;