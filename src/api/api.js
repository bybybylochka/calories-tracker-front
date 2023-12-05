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

export const personalDataApi = {
    getPersonalData(token) {
        return instance.get('/personalData', {
            headers: {
                Authorization: `Bearer ${Cookies.get('jwt')}`,
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.data);
    }
}