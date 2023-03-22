import axios from "axios";
import { getToken } from "../auth";

export const Base_url='http://localhost:8080';

export const http=axios.create({
    baseURL:Base_url
});

export const PrivateHttp=axios.create({
    baseURL:Base_url
})

// add token in header

PrivateHttp.interceptors.request.use(request=>{
    //console.log("privateHttp interceptors")
    //change the request
    let token=getToken()
    if(token){
       
        request.headers.common.Authorization=`Bearer ${token}`
      //  console.log("Token add to header"+token)

    }
    return request;
},error=>Promise.reject(error))