import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {Row,Col,CardText, FormGroup,Input,Table, Button,Form ,Container, CardBody,Card, Pagination, PaginationItem, PaginationLink,Modal,ModalBody,ModalHeader,ModalFooter} from "reactstrap"
import { loadProducts,deleteProduct as delete_product, loadSingleProduct } from "../../../Service/product-service";
import { Link, useNavigate } from 'react-router-dom'
import { Base_url } from '../../../Service/axios-helper'
import { searchProduct as service_searchProduct } from "../../../Service/product-service";

function AdminViewproduct(){
    const[product,setProduct]=useState(null)
    const[productSingle,setProductSingle]=useState(null);
    const [modal, setModal] = useState(false);
    const[clickProduct,setClickProduct]=useState(null);
    
    const toggle = () => setModal(!modal);
    const closeModol=()=>{
        setModal(false)
      }
      const openModal=(clickProductId)=>{
        setModal(true)
       loadSingleProduct(clickProductId).then(data=>{
        setClickProduct(data)
        //console.log(clickProduct)
       }).catch(error=>{
        console.log(error)
       })
        //console.log(selectItem)
      //console.log(selectItem.item[0].product.productName)
      }
      let imagesStyle={
        width:'100%',
        height:'300px',
        objectFit:'contain',
        margin:'15px 0',
    }
  
    useEffect(()=>{
       loadproductFromServer(0);
           
          
    },[])

    const[search,setSearch]=useState({
      productName:''
    })
    const searchProduct=(event,fieldName)=>{
      setSearch({...search,[fieldName]:event.target.value})
      if(search.productName!=''){
      service_searchProduct(search).then(data=>{
        console.log(data);
      }).catch(error=>{
        console.log(error);
      })
    }
    }
   
    const loadproductFromServer=(pageNumber)=>{
        loadProducts(pageNumber,2).then(data=>{
            setProduct(data);
        }).catch(error=>{
            console.log(error);
        })
    }
    const modelHtml=()=>{
        return(
           
          <Modal isOpen={modal} toggle={closeModol} size="lg">
          <ModalHeader toggle={closeModol}><h5>Product Id {clickProduct.productId}</h5></ModalHeader>
          <ModalBody>
          { 
            
              <Card className='mt-3 boder-0 shadow-sm'  color='light' >
                <CardBody className='mt-3'>
                   <Row >
                      <Col md={8}>
                          <CardText>
                            <h5>Product Name : {clickProduct.productName}</h5>
                            </CardText >
    
                            <CardText  dangerouslySetInnerHTML={ {__html:clickProduct.productDesc} }  >
                            </CardText>

                            <CardText ><h5>{clickProduct.stock?"Available":"False"}</h5></CardText>
    
                            <CardText>
                            <h5>Quantity : <b> {clickProduct.productQuantity}</b></h5>
                            </CardText>
    
                            <CardText>
                            <h5>Prize: ₹{clickProduct.productPrize}<b></b></h5>
                            </CardText>
                           
                      </Col>
                      <Col md={4}><img style={imagesStyle} src={Base_url+'/products/images/'+clickProduct.productId} alt="" /></Col>
                            
                   </Row>
                </CardBody>
              </Card>
            
          }
            
          </ModalBody>
          <ModalFooter>
           
            <Button color="primary" size='sm' onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        )
      }
    
  
    const UpdateProduct=(productId)=>{
      loadSingleProduct(productId).then(data=>{
        setProductSingle(data);
        console.log(productSingle);
      }).catch(error=>{
        console.log(error);
      })
        
    }
    const deleteProduct=(productId)=>{
       delete_product(productId).then(data=>{
          toast.success("product Delete Successfully")
       }).catch(error=>{
        toast.error("Product Can't be Delete anyone cart Having this Product")
       })
       
    }

    const produtcTableHtml=()=>{
        return(
            <Row>
              {JSON.stringify(search)}
            <Col md={20}>
                    <FormGroup > 
                      
                        <Input style={{
                             width:500,
                             marginLeft:225
                        }} type="text"  placeholder="Enter Product Name For Search" value={search.productName} onChange={(event)=>searchProduct(event,'productName')} ></Input>
                        
                      
                       
                    </FormGroup>

                    <Table bordered responsive 
                    hover
                    className={'bg-white text-center'}
                    
                    >
                        {/* Start Table Headinig */}
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>title</th>
                            <th>Prize</th>
                            <th>Stock</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th >View Product</th>
                            <th >Update Product</th>
                            <th >Delete Product</th>
                          </tr>
                        </thead>


                        {/* End Table head */}
                        <tbody>
                            {
                                product.content.map((p,index)=>{
                                    
                                    return(
                                        <tr key={index}>
                                        <td>{p.productId}</td>
                                        <td>{p.productName}</td>
                                        <td>{p.productPrize}</td>
                                        <td>{p.stock?"True":"False"}</td>
                                        <td>{p.category.title}</td>
                                        <td>{p.productQuantity}</td>
                                        <td> 
                                            <Button    color="primary"  size="sm" onClick={()=>openModal(p.productId)}>View</Button>
                                            
                                        </td>
                                        <td>
                                        <Button  tag={Link} to={'/admin-dashboard/UpdateProduct/'+p.productId} action='true' color="success" size="sm" >Update</Button>
                                        </td>
                                        <td>
                                        <Button color="danger" size="sm" onClick={event=>deleteProduct(p.productId)}>Delete</Button>
                                        </td>
                                        
                                        </tr>
                                    );
                                })
                            };  
                        </tbody>
                    </Table>
                    <Pagination>
                            {Array.from(Array(product.totalPages),(e,i) =>(
                                <PaginationItem active={i===product.pageNumber}>
                                    <PaginationLink onClick={(()=>loadproductFromServer(i))} >{i}</PaginationLink>
                                </PaginationItem>
                            )
                            )}
                            <PaginationItem disabled={product.lastPage}>
                                <PaginationLink onClick={((event=>loadproductFromServer(product.pageNumber+1)))} next></PaginationLink>
                              
                            </PaginationItem>
                    </Pagination>
            </Col>
        </Row>
        )
    }
    return(
       
      <Container>
        <Card color="light" >
            <CardBody>
                {product && produtcTableHtml()}
                {clickProduct && modelHtml()}
            </CardBody>
        </Card>
       
      </Container>

    
      
     
        
    )
}
export default AdminViewproduct