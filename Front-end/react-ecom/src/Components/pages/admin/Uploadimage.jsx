import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { CardHeader,Card, Container, Label,CardBody,Input, CardFooter, Button} from "reactstrap";
import  {uploadProductImage} from '../../../Service/product-service'
function Uploadimage(){
    const[product,setProduct]=useState(null);
    const [images,setImages]=useState(null);
  
 const upload=(event)=>{
   // console.log(event.target.files[0].name)
     //console.log(product.productId)
     //console.log(pid)
   setImages(event.target.files[0])
 
   
   
 }
const submitImage=()=>{
    
    uploadProductImage(images,product.productId).then(data=>{
        toast.success("upload Image")
    }).catch(error=>{
        console.log(error)
       if(error.response.data.message==="User id is not present here"){
        toast.error("Enter Vaild ProductId")
       }
    })
    
}
    return(
             
        <Container >
            <Card style={{
    width: '50rem'
  }} >
            <CardHeader className="text-center"><b ><h1>Upload Product Image</h1></b></CardHeader>
            <CardBody  >
            {/* {JSON.stringify(images)}
            {console.log(images.Images[0].name)}
             */}
                <Label for="productId"><h5>Product id</h5></Label>
                                                       
                <Input id={"productId"} type={'number'} onChange={event=>setProduct({productId:event.target.value})} ></Input>
                <Label className="mt-3" for="productId"><h5>Upload Image</h5></Label>
                <Input id={"productId"} type={'file'} onChange={upload}></Input>
            </CardBody>
            <CardFooter><Button type="submit" onClick={submitImage} color="success" block>Upload</Button></CardFooter>
        </Card>
        </Container>
               
    )
}

export default Uploadimage