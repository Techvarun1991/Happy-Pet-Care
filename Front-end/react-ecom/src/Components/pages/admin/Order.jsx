import { Container } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CardBody,Card,Row,Col,CardText, FormGroup,Input,Table, Button,Modal,ModalBody,ModalHeader,ModalFooter} from "reactstrap";
import { deleteOrder, getListOfOrder } from "../../../Service/order-service";
import { Base_url } from '../../../Service/axios-helper'
import { Route,Link } from "react-router-dom";
import {deleteOrder as dp} from "../../../Service/order-service"
import { toast } from "react-toastify";

function Order(){

    const[order,setOrder]=useState(null);
    const [modal, setModal] = useState(false);
    const[selectItem,setSelectItem]=useState(null);
    const toggle = () => setModal(!modal);
    const closeModol=()=>{
        setModal(false)
      }

      const deleteOrder=(orderId)=>{
        dp(orderId).then(res=>{
            toast.success("Order canceled Successfully")
        }).catch(error=>{
            console.log(error)
        })
       
      }

    useEffect(()=>{
    
        getListOfOrder().then(data=>{
           setOrder(data);
           console.log(data);
    // console.log(data[6].item)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const openModal=(order)=>{
        setModal(true)
        setSelectItem(order)
      }

      let imagesStyle={
        width:'100%',
        height:'300px',
        objectFit:'contain',
        margin:'15px 0',
    }

    const modelHtml=()=>{
        return(
          <Modal isOpen={modal} toggle={closeModol} size='lg'>
          <ModalHeader toggle={closeModol}><h1>Product of Order{selectItem && +selectItem.orderId}</h1></ModalHeader>
          <ModalBody>
          { 
            selectItem && ( selectItem.item.map((item,index)=>(
              <Card className='mt-3 boder-0 shadow-sm'  color='light' >
                <CardBody className='mt-3'>
                   <Row key={index}>
                      <Col md={8}>
                          <CardText>
                            <h5>{item.product.productName}</h5>
                            </CardText>
    
                            <CardText  dangerouslySetInnerHTML={ {__html:item.product.productDesc} }>
                              
                            </CardText>
    
                            <CardText>
                            <h5>Quantity:<b>{item.quantity}</b></h5>
                            </CardText>
    
                            <CardText>
                            <h5>Prize:<b>{item.totalProductPrize}</b></h5>
                            </CardText>
                           
                      </Col>
                      <Col md={4}><img style={imagesStyle} src={Base_url+'/products/images/'+item.product.productId} alt="" /></Col>
                            
                   </Row>
                </CardBody>
              </Card>
            ))
          )}
            
          </ModalBody>
          <ModalFooter>
           
            <Button color="primary" size='sm' onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        )
      }


    const orderHtml=()=>{
        return(
            <Row>
                <Col md={20}>
                    <h3>Here is All Order</h3>
                    <FormGroup>
                        <Input placeholder={"Search Order By Order id"}></Input>
                    </FormGroup>
                    <Table 
                    bordered
                    borderless
                    responsive
                    hover
                    className="text-center bg-white" 
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Billing Address</th>
                                <th>Order Amount</th>
                                <th>Order Create</th>
                               <th>order Delivered</th>
                               <th>Order Status</th>
                               <th>Payment Status</th>
                               <th>Oder User Id</th>
                               <th>View Product</th>
                               <th>Update Order</th>
                               <th>Cancel Order</th>
                            </tr>
                        </thead>

                        <tbody>
                                {order.map((o,index)=>{
                                    return(
                                    <tr key={index}>

                                        <td>{o.orderId}</td>
                                        <td>{o.billingAddress}</td>
                                        <td>{o.orderAmout}</td>
                                        <td>{o.orderCreated}</td>
                                        <td>{o.orderDelivered==null?"Not Delivered":"Delivered"}</td>
                                        <td>{o.orderStatus}</td>
                                        <td>{o.paymentStatus}</td>
                                        <td>{o.user==null?"Unknown":o.user.userId}</td>
                                        <td>
                                            <Button color="primary" className="mt-2" size="sm" onClick={()=>{openModal(o)}}>View</Button>
                                        </td>

                                        <td>
                                            <Button color="info" className="mt-2" size="sm" tag={Link} to={"/admin-dashboard/order/update/"+o.orderId} action="true" >Update</Button>
                                        </td>

                                        <td>
                                            <Button onClick={()=>{deleteOrder(o.orderId)}} color="danger" className="mt-2" size="sm">Cancel</Button>
                                        </td>
                                        
                                    </tr>
                               ) })}
                        </tbody>

                    </Table>
                </Col>
            </Row>
        )
    }

    return(
        <Container>
            <Card>
                <CardBody>
                    {order && orderHtml()}
                    {selectItem && modelHtml()}
                </CardBody>
            </Card>
        </Container>   
    )
}
export default Order