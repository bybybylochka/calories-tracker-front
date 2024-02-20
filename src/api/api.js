import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: `http://localhost:8080`
})

export const authApi = {
    login(username, password) {
        return instance.post('/authorize', {username, password})
            .then(response => response.data)
            .catch(()=>alert('Ошибка авторизации: неверный логин или пароль'));
    },
    registration(username, password){
        return instance.post('/register/user', {username, password})
            .then(response => response.data)
            .catch(()=>alert('Ошибка регистрации: логин должен быть уникальным'))    ;
    },
    logout(){
        return instance.get('/authorize/logout')
            .then(response => response.data)
            .catch(()=>alert('Ошибка авторизации'));
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
            .then(response => response.data)
            .catch(()=>alert('Ошибка получения продукта'));
    },
    getTodayConsumedProduct(){
        return instance.get('/consumed-product/today',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data)
            .catch(()=>alert('Ошибка получения пользовательских данных'));
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
            .then(response => response.data)
            .catch(()=>alert('Ошибка добавления продукта'));
    },
    deleteConsumedProduct(consumedProductId){
        return instance.delete(`/consumed-product/${consumedProductId}`,
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data)
            .catch(()=>alert('Ошибка удаления продукта'));
    },
    addProduct(product){
        return instance.post(`/product/add`,
            {
                ...product
            },
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data)
            .catch(()=>alert('Ошибка добавления продукта'));
    }
}

export const personalDataApi = {
    getPersonalData() {
        return instance.get('/personalData', {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        })
            .then(response => response.data)
            .catch(()=>alert('Ошибка получения пользовательских данных'));
    },
    addPersonalData(personalData){
        return instance.post('/personalData/add',
            {...personalData},
            {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        })
            .then(response => response.data)
            .catch(()=>alert('Ошибка добавления пользовательских данных'));
    },
    updatePersonalData(personalData){
        return instance.put('/personalData/update-personal-data',
            {...personalData},
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data)
            .catch(()=>alert('Ошибка добавления пользовательских данных'));
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
            .then(response => response.data)
            .catch(()=>alert('Ошибка получения сохраненных рецептов'));
    },
    createShopList(recipes) {
        return instance.post('/shopping-list/create',
            {recipes},
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data)
            .catch(()=>alert('Ошибка составления списка покупок'));
    },
    getAllRecipes(){
        return instance.get('/recipe',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data)
            .catch(()=>alert('Ошибка получения рецептов'));
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
            .then(response => response.data)
            .catch(()=>alert('Ошибка получения рецептов'));
    },
    getRecipesByEditor(){
        return instance.get('/recipe/get/author',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data)
            .catch(()=>alert('Ошибка получения рецептов'));
    },
    addRecipe(request) {
        return instance.post(
            '/recipe/add',
            {...request},
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            }).then(response => response.data)
            .catch(()=>alert('Ошибка добавления рецептов'));
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
    },
    gerArticles(){
        return instance.get('/article',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    }
}

export const usersApi = {
    getTotalUsersCount(){
        return instance.get('/stats/user/count',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    getTodayUsersCount(){
        return instance.get('/stats/user/count/today',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    getRegistrationStatistics(){
        return instance.get('/stats/user/registration',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    addFavouriteRecipe(recipeId){
        return instance.put(`/user/add-favourite-recipe/${recipeId}`,{},
            {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`
            }
        })
            .then(response => response.data);
    }
}
export const editorsApi = {
    getEditors() {
        return instance.get('/stats/editor',
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    },
    addEditor(fullName, authenticationData){
        return instance.post('/editor/add',
            {
                fullName,
                authenticationData
            },
            {
                headers: {
                    Authorization: `Bearer ${Cookies.get('jwt')}`
                }
            })
            .then(response => response.data);
    }
}