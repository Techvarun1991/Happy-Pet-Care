import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Container,Card, CardBody, CardText,Table,Row,Col, FormGroup,Input, Button} from "reactstrap";
import {getAllUser,deleteUser} from '../../../Service/user-Service'
import {Link} from 'react-router-dom'
function Adminuser(){

    const[user,setUser]=useState(null)
    

    useEffect(()=>{
        getAllUser().then(data=>{
            setUser(data)
            
        }).catch(error=>{
            console.log(error)
        })
    },[])
    
    //Time Formate
    const formatDate=(time)=>{
    
        return new Date(time).toDateString();
        }

    const deleteU=(uid)=>{
        deleteUser(uid).then(data=>{

        }).catch(error=>{
            toast.error("Can't Delete this User");
            console.log(error)
        })

    }

     


        
    const userHtml=()=>{
        return(
           
            <Row>
                <Col md={13}>
                <FormGroup>
                    <Input type="text" placeholder="Enter userId here"></Input>
                </FormGroup>
                    <Table
                     bordered 
                    borderless 
                    responsive 
                    hover 
                    className={"text-center bg-white"}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Address</th>
                                    <th>About</th>
                                    <th>Gender</th>
                                    <th>Create At</th>
                                    <th>Active</th>
                                    <th>User Roles</th>
                                    <th>Mobile</th>
                                   
                                    <th>Delete User</th>
                                    <th>Update User</th>
                                   
                                </tr>
                            </thead>

                            <tbody>
                            {user.map((u,index)=>{
                                        return(
                                        <tr key={index}>
                                            <td>{u.userId}</td>
                                            <td>{u.name}</td>
                                            <td>{u.email}</td>
                                            <td>{u.address}</td>
                                            <td>{u.about}</td>
                                            <td>{u.gender}</td>
                                            <td>{formatDate(u.date)}</td>
                                            <td>{u.active?"True":"False"}</td>

                                             <td>{u.roles.map(r=>
                                              r.name  +"    ")}
                                              </td>

                                            <td>{u.phone}</td>
                                        
                                         <td> 
                                            <Button color="primary" tag={Link} to={'/admin-dashboard/update-user/'+u.userId} action='true'>Update</Button>
                                            
                                         </td> 
                                         
                                         <td> 
                                            <Button color="danger" onClick={()=>deleteU(u.userId)} >Delete</Button>
                                            
                                         </td> 
                                            
                                            
                                        </tr>

                                    )})}
                            </tbody>
                    </Table>
                </Col>
            </Row>
           
        )
    }
 return(
    <Container>
        <Card color="light">
            <CardBody> {user && userHtml()} </CardBody>
            
        </Card>
    </Container>
 )   
}
export default Adminuser