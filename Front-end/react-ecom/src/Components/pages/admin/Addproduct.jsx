
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {Row,Col,Card, FormGroup, Label,Input,Form, Container, Button, CardBody} from 'reactstrap'
import {loadCategories}  from "../../../Service/category-service";
import {addproduct, uploadProductImage} from "../../../Service/product-service"
import JoditEditor from 'jodit-react';
import React, {useRef, useMemo } from 'react';
function Addproduct(){
    const[category,setCategory]=useState([])
    const[product,setProduct]=useState([])
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const[images,setImages]=useState(null)
    // on change images
    const imageUpload=(event)=>{
        console.log(event.target.files[0]);
        setImages(event.target.files[0])
     }
    useEffect(()=>{
            loadCategories().then(cats=>{
                setCategory([...cats])
               
            }).catch(error=>{
                console.log(error)
            })
    },[])
  
    const addProductFormSubmit=(event)=>{
        event.preventDefault();

        addproduct(product,content).then(data=>{
            console.log(data)
            console.log(images)
            toast.success("Product Added Successfully")
        }
        ).catch(error=>{
            console.log(error)
        })
        
      
    }
    //field change product Description
    const contentFieldChanged=(data)=>{
        setProduct({...product,'productDesc':data})
    }

    

    function addProductHtml(){
        return(
            <Row> 
                <Col md="11"  >
                    <h3 className="text-center" style={{color:"Blue"}}> Add New Product </h3> 
                    <Form onSubmit={addProductFormSubmit}>
                        {/* {JSON.stringify(product)} */}
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
                            <Label for={'cat'}><h5><b>Product Category</b></h5></Label>
                            <Input id={'cat'} className={"ms-4"}  type={'select'} onChange={event=>setProduct({...product,productCategory:event.target.value})} value={product.productCategory}>
                                {  
                                   (category?category.map((cat,i)=>{
                                    return(
                                        
                                       <option value={cat.categoryId} key={i}>{cat.title}</option>
            
                                    )
                                }):<option >Select</option>)
                                    
                                }
                            </Input>
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
                    (addProductHtml())
                }
            
            </CardBody>
            </Card>
            </Container>
    )
}
export default Addproduct;