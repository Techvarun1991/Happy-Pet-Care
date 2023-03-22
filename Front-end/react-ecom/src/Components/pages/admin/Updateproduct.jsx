
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {Row,Col,Card, FormGroup, Label,Input,Form, Container, Button, CardBody} from 'reactstrap'
import {loadCategories}  from "../../../Service/category-service";
import {addproduct, uploadProductImage} from "../../../Service/product-service"
import JoditEditor from 'jodit-react';
import React, {useRef, useMemo } from 'react';
import { useParams } from "react-router-dom";
import {update} from "../../../Service/product-service"
function Updateproduct(){
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const[product,setProduct] =useState('');
    const[category,setCategory]=useState([])
     const {productId}=useParams()
    

// submit the Update form
const updateProductFormSubmit=(event)=>{
    event.preventDefault();
   update(product,productId).then(data=>{
    toast.success("Product Update Successfully")
   }).catch(error=>{
    console.log(error)
   })
}
//field change product Description
const contentFieldChanged=(data)=>{
    setProduct({...product,'productDesc':data})
}




    const updateProduct=()=>{
         return(
            <Row> 
                <Col md="11"  >
                 
                    <h3 className="text-center" style={{color:"Blue"}}> Add New Product </h3> 
                    <Form onSubmit={updateProductFormSubmit} >
                       {console.log(product)}
                        {JSON.stringify(product)}
                        {JSON.stringify(product.category)}
                        {JSON.stringify(product.category)}
                       
                       <FormGroup>
                           
                        </FormGroup>
                        <FormGroup>
                            <Label for={'productName'}><h5><b>Product Name</b></h5></Label>
                            <Input id={'productName'} placeholder="Enter Product Name Here" type={'text'} onChange={event => setProduct({...product,productName:event.target.value})} value={product.productName} ></Input>
                        </FormGroup>

                        <FormGroup>
                           
                            <Label for={'productDesc'}><h5><b>Product Description</b></h5></Label>
                           {/* <Input id={'productDesc'} placeholder="Enter ProductDesription Here" type={'textarea'} onChange={event =>setProduct({...product,productDesc:event.target.value})} value={product.productDesc} ></Input>*/}
                           <JoditEditor
                           ref={editor}
                           value={content}
                           onChange={contentFieldChanged}
                           />                       
                            </FormGroup>
                                
                        <FormGroup>
                            <Label for={'productPrize'}><h5><b>Product Product Prize</b></h5></Label>
                            <Input id={'productPrize'} placeholder="Enter ProductPrize Here" type={'number'}  onChange={event=>setProduct({...product,productPrize:event.target.value})}  value={product.productPrize} ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for='productQuantity'><h5><b>Product Quantity</b></h5></Label>
                            <Input id={'productQuantity'} placeholder="Enter ProductDesription Here" type={'number'}  onChange={event=>setProduct({...product,productQuantity:event.target.value})} value={product.productQuantity} ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for={'live'}><h5><b>Product Live</b></h5></Label>
                            <Input id={'live'} className={"ms-5"} placeholder="Enter ProductDesription Here" type={'checkbox'} onChange={event=>setProduct({...product,live:!product.live}) }
                            checked={product.live} ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for={'stock'}><h5><b>Product Stock</b></h5></Label>
                            <Input id={'stock'} className={"ms-4"}   type={'checkbox'} onChange={event=>setProduct({...product,stock:!product.stock})} checked={product.stock}  ></Input>
                        </FormGroup>

                       

                       
                       

                        < FormGroup>
                            <Container className="text-center">
                            <Button type="submit" color="success" block> Add Product</Button>
                            </Container>
                        </FormGroup>


                    </Form>
                </Col>
                
            </Row>
        )
    }
    



  return(
    <Container >
    <Card >
    <CardBody>
        {
            (updateProduct())
        }
    
    </CardBody>
    </Card>
    </Container>
  )
}
export default Updateproduct;