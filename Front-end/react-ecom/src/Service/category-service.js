import { http,PrivateHttp} from "./axios-helper";

export const loadCategories=()=>{
    return http.get(`/cat/`).then((response)=>response.data)
}

export const createCategory=(title)=>{
return PrivateHttp.post(`/cat/`,{
  "title":title
}
).then(res=>res.data)
}

export const deleteCategory=(categoryId)=>{

return PrivateHttp.delete(`/cat/${categoryId}`).then(res=>res.data)
}

