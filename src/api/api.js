import axios from "axios";

const instance=axios.create({
    baseURL: `http://localhost:8080`
})

export const authApi = {
    login(username, password) {
        return instance.post('/authorize', {username, password})
            .then(response => response.data);
    }
}