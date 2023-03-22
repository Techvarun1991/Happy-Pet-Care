import React  from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { CardBody, Container,Card,Row,Col,Table, Button } from "reactstrap";
import {loadCategories,deleteCategory} from "../../../Service/category-service"

function Category(){
    const [cat,setCat]=useState(null)
    useEffect(()=>{
        loadCategories().then(data=>{
            setCat(data)
            
           
        }).catch(error=>{
            console.log(error)
        })

    },[])
    const deleteCat=(categoryid)=>{
        deleteCategory(categoryid).then(data=>{
            toast.success("Category Remove Sucessfull");
        }).catch(error=>{
            console.log(error)
            toast.error("Category Having Some Product")
        })
    }

    const cartegotyHtml=()=>{
        return(
           
                    <Table
                    bordered
                    borderless
                    response
                    hover
                    className="bg-white text-center"
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                       <tbody>
                        {cat.map((cat,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{cat.categoryId}</td>
                                    <td>{cat.title}</td>
                                  <td> 
                                     <Button onClick={()=>deleteCat(cat.categoryId)} size="sm"  color="danger">Delete</Button>
                                  </td>
                                </tr>
                            )
                        })}
                       </tbody>
                    </Table>
                   
        )
    }
    
    return(
        
     <Container>
        <Row>
            <Col>
            <Card>
                <CardBody>
                    {cat && cartegotyHtml()}
                </CardBody>
                </Card>
            </Col>
        </Row>
     </Container>
    )
}
export default Category