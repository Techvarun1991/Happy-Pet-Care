import { PrivateHttp } from "./axios-helper";

export const createOrder=(orderDetails)=>{
   console.log(orderDetails.cartID)
   console.log(orderDetails.address)
    return PrivateHttp.post(`/order/`,{
        "address":orderDetails.address,
        "cartID":orderDetails.cartID
    })
    .then(response => response.data)
}
export const getOrder=()=>{
    return PrivateHttp.get(`/order/`).then(response=>response.data)
}

export const getListOfOrder=()=>{
    const list = PrivateHttp.get(`/order/list`).then(res=>res.data);
    console.log(list);
    return PrivateHttp.get(`/order/list`).then(res=>res.data);
}
export const updateOrder=(order,orderId)=>{
    return PrivateHttp.put(`order/${orderId}`,{
        "orderStatus":order.orderStatus,
        "paymentStatus":order.paymentStatus,
        "orderDelivered":order.orderDelivered
    }).then(res=>res.data)
}
export const deleteOrder=(orderId)=>{
    return PrivateHttp.delete(`order/${orderId}`).then(res=>res.data)
}