import React from "react"
import { Container,Row,Col } from "reactstrap"
import Base from "./Base"
import TextTransition, { presets } from "react-text-transition";


function About(){

    const TEXTS = [
        "Forest",
        "Building",
        "Tree",
        "Color"
      ];

    

    return(
        <Base>
            <Container className="mt-10"> 
                <Row>
                    <Col>
                    <h1 className="text-center" style={{fontWeight:1000}}>Welcome to Online </h1>
                    <p>Best In Class Experience With Buses Having Extra Comfort & Safety. ₹500 Off* Coupon RED500. Book Bus Tickets Online for 70,000+ Routes Across India With India's No.1 Bus Booking Site.
                         Reschedulable Tickets. Top Rated App 4.5/5. Live Bus Tracking.
                         
                         It’s tough to imagine daily life without e-commerce. We order food, clothes, and furniture; we register for classes and other online services; we download books, music, and movies; and so much more. E-commerce has taken root and is here to stay.

The term “e-commerce” simply means the sale of goods or services on the internet. In its most basic form, e-commerce involves electronically transferring funds and data between 2 or more parties. This form of business has evolved quite a bit since its beginnings in the electronic data interchange of the 1960s and the inception of online shopping in the 1990s.

In recent years, e-commerce has enjoyed a massive boost from the rise of smartphones, which allow consumers to shop from nearly anywhere. In fact, business experts predicted that mobile e-commerce alone would surpass $284 billion in 2020.

What is an e-commerce

                         
                         
                         
                         </p>
                    </Col>
                </Row>
            </Container>
 </Base>
    )
   
   
}

export default About
