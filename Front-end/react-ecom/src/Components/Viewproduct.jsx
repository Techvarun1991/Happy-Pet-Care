import React from "react"
import Base from "./Base"
import {Row,Col,Card, CardBody, CardText, Button, Container} from 'reactstrap'
import { useNavigate, useParams } from "react-router-dom"
import {loadSingleProduct} from '../Service/product-service'
import { useEffect } from "react"
import { useState } from "react"
import { Base_url } from '../Service/axios-helper'
import { Link } from 'react-router-dom'
import {addItemToCart} from '../Service/cartService'
import { toast } from "react-toastify"

 
function Viewproduct(){
    const navigate=useNavigate()
 const goStore=()=>{
    navigate("/store/all")
 }
    let imagesStyle={
        width:'100%',
        height:'300px',
        objectFit:'contain',
        margin:'15px 0'
    }
    const {productId}=useParams()

    const[product,setProduct]=useState(null)
   const CardButton=()=>{
    console.log(product.productQuantity)
    addItemToCart(productId,1).then(data=>{
        toast.success("Item Add to cart");
    }).catch(error=>{
        console.log(error)
    })
   }
    useEffect(()=>{
        
       
        loadSingleProduct(productId).then(data=>{
         setProduct(data)
        
        }).catch(error=>{
            console.log(error)
        })
    },[])
    
    

    const productHtml=()=>{
        return(
            <Row>
               
        <Col>
            
           {product && ( <Card>
            {/* { console.log(product)} */}
                 <CardBody>
                 <h1>{product.productName}</h1>
                 <img style={imagesStyle} src={Base_url+'/products/images/'+product.productId} alt="" />
                   <CardText><h3>₹{product.productPrize}</h3></CardText>
                   <CardText dangerouslySetInnerHTML={ {__html:product.productDesc} } ></CardText>
                  <CardText></CardText>
                 </CardBody>
                 <div className="text-center">
                 <Button size="lg" color="primary" onClick={goStore} >Back</Button>
                 <Button size="lg"  style={{marginLeft:'30px'}} color="success" onClick={CardButton} >Add To Card</Button>
                 </div>
            </Card>)}
             
        </Col>
    </Row>
        )
    }

    return(
   <Base>
   <Container> 
    
     {product &&(product.stock?productHtml():<h1 className="text-center text-danger my-5">Product is Out Of stock</h1>)

}</Container>
   
   
   </Base>
    )
}
export default Viewproduct