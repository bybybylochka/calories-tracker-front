import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: `http://localhost:8080`
})

export const authApi = {
    login(username, password) {
        return instance.post('/authorize', {username, password})
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
    }
}