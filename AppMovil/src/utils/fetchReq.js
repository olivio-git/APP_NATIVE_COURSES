import axios from "axios"

export const handleRegisterUserFetch = (user) => {
    return axios.post('http://192.168.0.10:3001/proxy/users/user/',user)
};

export const handleLoginUserFetch = (user) => {
    return axios.post('http://192.168.0.10:3001/proxy/users/user/auth/login',user)
};