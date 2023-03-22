import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CardBody,Card,Button } from "reactstrap";
import Addproduct from "./Addproduct";


function Adminhome(){
  const navigate=useNavigate()
  const goAddProduct=()=>{
    navigate("/admin-dashboard/addProduct")
  }
 return(
 
  <Card color="primary" >
    <CardBody  className="text-center">
        <h1><b> Welcome to Admin Login </b></h1>
        <p>Start adding the product and managing the  order from here</p>
        <Button color='danger' onClick={()=>{goAddProduct()}}>Add Product</Button>
    </CardBody>
  </Card>
  
 )   
}
export default Adminhome;