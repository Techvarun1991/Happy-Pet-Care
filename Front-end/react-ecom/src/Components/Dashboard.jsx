import { Button, CardBody, CardText,Row,Col,Card,Modal, ModalHeader, ModalBody, ModalFooter, CardHeader, CardFooter, CardTitle, Container } from 'reactstrap';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {checkLogin, checkLogin1, getCurrentUser, logout} from '../auth'
import Base from './Base';
import { getOrder } from '../Service/order-service';
import { Base_url } from '../Service/axios-helper'
import { margin } from '@mui/system'

function Dashboard() {
  const navigate=useNavigate();

  const [user, setUser] = useState(null)
  const [order,SetOrder]=useState(null)
  const [modal, setModal] = useState(false);
 
  const[selectItem,setSelectItem]=useState(null);

  const toggle = () => setModal(!modal);
  const closeModol=()=>{
    setModal(false)
  }
  const openModal=(order)=>{
    setModal(true)
    setSelectItem(order)
    //console.log(selectItem)
    //console.log(selectItem.item[0].product.productName)
  }
  let imagesStyle={
    width:'100%',
    height:'300px',
    objectFit:'contain',
    margin:'15px 0',
}


  useEffect(() => {
    console.log(getCurrentUser())
    setUser(getCurrentUser())
  },[])

  useEffect(()=>{
  getOrder().then(data=>{
    SetOrder(data)
    console.log(data)

  }).catch(error=>{
    console.log(error)
  })
  },[])
    
  const formatDate=(time)=>{
    
  return new Date(time).toDateString();
  }
  const logoutUser=()=>{
    logout(()=>{
      navigate("/")
    });
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
  const htmlOrder=()=>{
    return(

      
      <Row>
           <Card     color="light" style={{width:400,marginTop:50,marginLeft:475,color:'red'}}><h1>Your Order's Details</h1></Card>
           <Col md={{size:8,offset:2}} style={{marginTop:12}}>
              {order.map(order=>(
                <Card key={order.orderId} style={{marginTop:10}} className={order.paymentStatus=='PAID'?'border-success mt-2':'border-danger mt-2'}> 
                <CardBody className='text-center' >
                  <Row>
                    <Col md={5}>
                    <CardText>
                    <h5>ORDER NUMBER  :{" "+order.orderId}</h5>
                    </CardText>
                    </Col>

                    <Col md={5}>
                    <CardText style={{marginLeft:75}}>
                      <b> Create At:{formatDate(order.orderCreated)}</b>
                    </CardText>
                    </Col>

                    <Col md={5}>
                    <CardText>
                     <h7> ADDRESS :{order.billingAddress}  </h7> 
                    </CardText>
                    </Col>
                    <Col md={5} style={{marginLeft:80}}>
                      <CardText >  
                      <h7>Payment Status : <b className={order.paymentStatus=='PAID'?'text-success':'text-danger'}>{order.paymentStatus}</b> </h7> 
                      </CardText>
                    </Col>
                    <Col md={5}>
                      <CardText md={5}>
                    <h7>Order Status :    {order.orderStatus}</h7> 
                    </CardText>
                    </Col>
                    <Col md={5} style={{marginLeft:80}}>
                      <CardText>
                    <h7>order Delivered:{order.orderDelivered?formatDate(order.orderDelivered):'Order Not Deliver'}</h7> 
                    </CardText>
                    </Col>

                    <Col md={5}>
                    <CardText >
                   <h7>Bill Amount</h7>  :<b style={{color:'red'}}>{"₹"+order.orderAmout}</b>
                    </CardText>
                    </Col>
                    </Row>
                    <Container>
                    {order.paymentStatus=="Not Piad"?<Button  color='success' size='sm'>Pay Now</Button>:""}
                    <Button size='sm' onClick={()=>openModal(order)} color='primary' className='ms-3'>View Product</Button>
                </Container>
                </CardBody>
               
              </Card>
              ))}
           </Col>
      </Row>
    )
  }
  return (
 <Base>
     <>
   {user && (
    <div>
      
    </div>
   )}
   {order && htmlOrder()}
    </>
  {modelHtml()}
 </Base>
  )
}

export default Dashboard