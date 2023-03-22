import React, { useState } from "react";
import { toast } from "react-toastify";
import { Container,Card, CardBody, CardText, Label,Input, Button} from "reactstrap";
import { createCategory } from "../../../Service/category-service";
function Addcategory(){
    const[cat,setCat]=useState(null);
    const addTitle=()=>{
        createCategory(cat.title).then(data=>{
            console.log(data);
            toast.success("Category Add successfully")
        }).catch(error=>{
            console.log(error)
        })
    }
return(
        <Container>
            <Card color="light">
                <CardBody >
                    
                    <CardText className="text-center">
                    <label><b><h3>Add Category</h3> </b></label>
                    </CardText>

                    <CardText>
                    <label ><b>Category Title </b></label>
                    <Input className="mt-3" type="text" onChange={event=>{setCat({title:event.target.value})}}></Input>
                    </CardText>
                    <Button className="mt-4" color="success" block onClick={addTitle}><h5> Create </h5></Button>

                </CardBody>
                
            </Card>
        </Container>
)
}
export default Addcategory
