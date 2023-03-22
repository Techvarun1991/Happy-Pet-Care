import { http, PrivateHttp } from "./axios-helper";

export const loadProducts=(pageNumber="0",pageSize="2",sortBy="productId",sortDir="desc")=>{
  return  http.get(`/product/?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`).then(response=>response.data)
}

export const loadProductByCategory=(
  categoryId,
  pageNumber="0",
  pageSize="9"
  )=>{
    return http
    .get(`/category/${categoryId}/product?pageSize=${pageSize}&pageNumber=${pageNumber}`)
    .then(response=>response.data)

    // /category/1/product?pageSize=1&PageNumbe=2
};

export const loadSingleProduct=(productId)=>{
  return http.get(`/product/${productId}`).then(response=>response.data)
};

export const addproduct=(product)=>{
  console.log(product);
  return PrivateHttp.post(`/categories/${product.productCategory}/product/`,product).then(res=>res.data)
  
}
export const uploadProductImage=(images,productId)=>{
  const formData=new FormData();
  formData.append("product_image",images);
  return PrivateHttp.post(`/products/images/${productId}`,formData,{
headers:{
  "Content-Type":"multipart/form-data"
},
  }).then(res=>res.data)

}

export const deleteProduct=(productId)=>{
return PrivateHttp.delete(`/product/${productId}`).then(res=>res.data)

}

export const update=(product,productId)=>{
  return PrivateHttp.put(`/product/${productId}`,{
    
    "productName":product.productName,
    "productDesc":product.productDesc,
    "productPrize":product.productPrize,
    "stock":product.stock,
    "productQuantity":product.productQuantity,
    "live":product.live,
  }
 
  ).then(res=>res.data)

}

export const searchProduct=(search)=>{
  console.log(search.productName)
  return PrivateHttp.get(`/product/search/${search.productName}`
  ).then(res=>res.data);

}


