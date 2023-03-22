import { PrivateHttp } from "./axios-helper"

export const addItemToCart=(productId,quantity)=>{

    return PrivateHttp.post(`/cart/`,{
        productId:productId,
        quantity:quantity
    }).then(response=>response.data)

}

export const getCart=()=>{

return PrivateHttp.get(`/cart/`).then(res=>res.data)
}

export const removeItemFromCart=(productId)=>{
    return PrivateHttp.put(`/cart/${productId}`).then(res=>res.data)

}

