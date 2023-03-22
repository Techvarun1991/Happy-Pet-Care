import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Container,Row,Col,Input,FormCol,Card, CardHeader,Form,Label,Button, CardBody} from "reactstrap";
import {updateOrder} from "../../../Service/order-service"
function UpdateOrder(){
    const {orderId}=useParams()
    const[order,setOrder]=useState(null);

    const orderUpdateInput=(event)=>{
        event.preventDefault();
        updateOrder(order,orderId).then(data=>{
            toast.success("Order Updated")
        }).catch(error=>{
            console.log(error)
        })
    }
    return(
        <Container >
           <Row>
                <Col md={12}>
                   <Card color="light">
                    <CardBody>
                        {JSON.stringify(order)}
                        <h3 className="text-center">Update Details Order</h3>
                        <Form className="ms-2 mt-4" onSubmit={orderUpdateInput} >
                      
                        <Label><b> order Status</b></Label>
                        <Input onChange={(event)=>{setOrder({...order,orderStatus:event.target.value})}} type="text" placeholder="Enter order Status"></Input>

                        <Label><b>Payment Status</b></Label>
                        <Input onChange={(event)=>{setOrder({...order,paymentStatus:event.target.value})}}   type="text" placeholder="Enter order Status"></Input>

                        <Label><b>orderDelivered</b></Label>
                        <Input  onChange={(event)=>{setOrder({...order,orderDelivered:event.target.value})}}  type="date" placeholder="Enter order Status"></Input>
                        <Button type="submit" className="my-4" block color="success">Submit</Button>
                        </Form>
                        </CardBody>
                   </Card>
                </Col>
           </Row>
        </Container>
    )
}
export default UpdateOrder