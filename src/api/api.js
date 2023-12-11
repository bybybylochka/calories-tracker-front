import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: `http://localhost:8080`
})

export const authApi = {
    login(username, password) {
        return instance.post('/authorize', {username, password})
            .then(response => response.data);
    },
    registration(username, password){
        return instance.post('/register/user', {username, password})
            .then(response => response.data);
    }
}
export const productApi = {
    findProductByName(name) {
        return instance.get(`/product/allByName`,
        {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            },
            params: {
                name: name
            }})
            .then(response => response.data);
    },
    getTodayConsumedProduct(){
        return instance.get('/consumed-product/today',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    addConsumedProduct(productId, weight, mealType){
        console.log(productId, weight, mealType);
        return instance.post('/consumed-product/add',
            {
                productId,
                weight,
                mealType
            },
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    deleteConsumedProduct(consumedProductId){
        return instance.delete(`/consumed-product/${consumedProductId}`,
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data)
    }
}

export const personalDataApi = {
    getPersonalData() {
        return instance.get('/personalData', {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        })
            .then(response => response.data);
    },
    addPersonalData(personalData){
        return instance.post('/personalData/add',
            {...personalData},
            {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        })
            .then(response => response.data);
    }
}
export const waterApi = {
    getTodayConsumedWater() {
        return instance.get('/consumed-water/today',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    addConsumedWater(volume) {
        return instance.post('/consumed-water',
        {},
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                },
                params: {
                    volume: volume
                }})
            .then(response => response.data)
            .catch((error)=>console.log(error));
    },
    deleteConsumedWater(volume) {
        return instance.delete('/consumed-water',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                },
                params: {
                    volume: volume
                }})
            .then(response => response.data)
            .catch((error)=>console.log(error));
    }
}

export const recipesApi = {
    getFavouriteRecipes () {
        return instance.get('/user/favourite-recipes',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    createShopList(recipes) {
        return instance.post('/shopping-list/create',
            {recipes},
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    getAllRecipes(){
        return instance.get('/recipe',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    getAllRecipesByParams(title, maxCalories, shouldSort){
        return instance.get('/recipe/allByParams',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                },
                params: {
                    title,
                    maxCalories,
                    shouldSort
                }
            })
            .then(response => response.data);
    },
    getRecipesByEditor(){
        return instance.get('/recipe/get/author',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    }
}

export const articlesApi = {
    addArticle (title, content) {
        return instance.post('/article/add',
            {
                title,
                content
            },
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    getArticlesByEditor(){
        return instance.get('/article/get/author',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    }
}