// using axios for Connection React and Spring Boot
import axios from "axios";
import { PrivateHttp } from "./axios-helper";
const BASE_URL="http://localhost:8080"

export const createUser=(data)=>{
    return axios.post(`${BASE_URL}/users/`,data).then(response=>response.data)
}

export const generateToken=(loginData)=>{
    return axios.post(`${BASE_URL}/auth/login`,loginData).then((response)=>response.data)
}

export const getAllUser=()=>{
    return PrivateHttp.get(`/users/`).then(res=>res.data)
}

export const deleteUser=(userId)=>{
    return PrivateHttp.delete(`/users/${userId}`).then(res=>res.data)
}