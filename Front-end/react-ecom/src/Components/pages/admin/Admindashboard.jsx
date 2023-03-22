import React  from "react";
import {Row,Col, ListGroup, ListGroupItem} from 'reactstrap'
import { CardBody,Card,Button } from "reactstrap";
import Base from '../../../Components/Base'
import {Link,Outlet} from 'react-router-dom'
import { adminLogin } from "../../../auth";

const AdmindashboardHtml=()=>{
  return(
    
    
             
      <Row className="p-4">

        <Col md={2} ><ListGroup style={{
    width: '15rem'
  }} className="text-center">
               <ListGroupItem tag={Link} to={'/admin-dashboard/home'} action='true' >
                 <h5 > Home</h5>
               </ListGroupItem>

               <ListGroupItem tag={Link} to={'/admin-dashboard/addProduct'} action='true' >
                 <h5>Add Product</h5>
               </ListGroupItem>

               <ListGroupItem tag={Link} to={'/admin-dashboard/uploadproductimage'} action='true' >
                 <h5>Upload Product Image</h5>
               </ListGroupItem>
               
               <ListGroupItem tag={Link} to={'/admin-dashboard/category'} action='true' >
                 <h5>Add Category</h5>
               </ListGroupItem>

               <ListGroupItem tag={Link} to={'/admin-dashboard/viewproduct'} action='true' >
                 <h5>View Product</h5>
               </ListGroupItem>

               <ListGroupItem tag={Link} to={'/admin-dashboard/adminuser'} action='true' >
                 <h5>Manage User</h5>
               </ListGroupItem>

               <ListGroupItem tag={Link} to={'/admin-dashboard/order'} action='true' >
                 <h5>Manage Order</h5>
               </ListGroupItem>

              < ListGroupItem tag={Link} to={'/admin-dashboard/cat'} action='true' >
                 <h5>Manage Category</h5>
               </ListGroupItem>

             </ListGroup>
             </Col>

        <Col md={9} style={{ marginLeft:'102px'}}> <Outlet/>  </Col>
      
         
      </Row>
      
      
            
   
  )
}

function Admindashboard(){
 return(
  <>
  <Base>
  <div className="container-fluid">
   {AdmindashboardHtml()}
   </div>
  </Base>
  </>
 )   

}
export default Admindashboard;