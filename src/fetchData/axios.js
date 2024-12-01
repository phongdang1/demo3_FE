import axios from "axios";

const instance = axios.create({
    baseURL: 'https://demo3-be.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.response.use(function (response) {
    return response
}, function (error) {
    return error.response;
});

export default instance;