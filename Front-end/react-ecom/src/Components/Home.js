

import { useNavigate } from "react-router-dom";
import {card,CardHeader,CardBody, Container,Row,Col, Button} from "reactstrap";
import Base from './Base'


/*we Use Home(Props)  then we have fech dynamically data from  props.title ,props.description,
props.buttonName under return  <h1>{props.title}</h1>> 

but here is problem we can't pass Default value so we use 
object Distrutre 

so inside Home(props) we Use Home({title="Learn code",description="cording",buttonName="like"}) and return
<h1>{title}</h1>

here we set default value
*/




const Home=({title="default titile",description="default Description ",buttonName="Defalut Button",myFun})=>{
    let styleOb={
        padding:'20px',
        background:'#e2e2e2',
        border:'1px solid red',
        margin:'10px'
      }
      const navigate=useNavigate()
      
    return(
        // Dynamic Value By props from App.js

        
/*<h1>{title}</h1>
        <h2>{description}</h2>
        <button onClick={myFun}>{buttonName}</button> */
        //    <div >     
        // <card>
        //     <CardBody>
        //     <h3>{title}</h3>
        //     <p>{description}</p>
        //     </CardBody>
        //    <CardHeader>
        //    <button onClick={myFun}>{buttonName}</button>
        //    </CardHeader>
            
        // </card>
        // </div> 
      

       <Base >
       <div className="banner" style={{ backgroundColor: 'blue'}}>
            <Container >
                <Row>
                    <Col>
                        <h1 className="text-center" style={{fontWeight:1000,textTransform:"uppercase"}} >Welcome To my Online Store</h1>
                        <p className="text-center"> Best In Class Experience With Buses Having Extra Comfort & Safety. ₹500 Off* Coupon RED500. Book Bus Tickets Online for 70,000+ Routes Across India With India's No.1 Bus Booking Site.
                         Reschedulable Tickets. Top Rated App 4.5/5. Live Bus Tracking.
                         
                         It’s tough to imagine daily life without e-commerce. We order food, clothes, and furniture; we register for classes and other online services; we download books, music, and movies; and so much more. E-commerce has taken root and is here to stay.

The term “e-commerce” simply means the sale of goods or services on the internet. In its most basic form, e-commerce involves electronically transferring funds and data between 2 or more parties. This form of business has evolved quite a bit since its beginnings in the electronic data interchange of the 1960s and the inception of online shopping in the 1990s.

In recent years, e-commerce has enjoyed a massive boost from the rise of smartphones, which allow consumers to shop from nearly anywhere. In fact, business experts predicted that mobile e-commerce alone would surpass $284 billion in 2020.

What is an e-commerce</p>

                    <Container className="text-center" >
                        <Button style={{marginBlock:10}} onClick={()=>navigate("/store/all")} className="rounded-0" size="lg" color="success"   >Go to Store</Button>
                    </Container>
            
                    </Col>
                </Row>
            </Container>



        </div>
       </Base>
        
        


    );
}

export default Home