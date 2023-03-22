import React, { useContext, useEffect } from 'react'
import Base from './Base'
import {addItemToCart, getCart,removeItemFromCart as removeItem} from '../Service/cartService'
import { useState } from 'react'
import { CardBody, CardText, Container,Card, CardTitle, CardHeader, CardFooter, Button, FormGroup,Input, Toast} from 'reactstrap'
import { Base_url } from '../Service/axios-helper'
import { context1 } from './Context'
import { color } from '@mui/system'
import { toast } from 'react-toastify'
import {createOrder as createOrderService} from '../Service/order-service'
import { useNavigate } from 'react-router-dom'
import { checkLogin } from '../auth'
import {createOrder as paymentOrder,successPayment} from '../Service/payment.service'
function Cart() {
  const navigate=useNavigate()
  const value=useContext(context1)
  const[cart,setCart]=useState(null)
  const[orderDetails,setOrderDetails]=useState({
      address:'',
      cartID:''
  })
  const [orderCreated, setOrderCreated] = useState(false)
  
  useEffect(()=>{
    setTimeout(()=>{
      getCart().then(data =>{
        value.setCart(data)
        setCart(data) 
        
      }).catch(error=>{
        if(error.response.data.massage="Cart Not found"){
          toast.error("Your Cart is Empty Cart(0)")
          navigate("/store/all")
         }
        console.log(error.response.data.massage)
        console.log(error)
      })
    
    },1000)
  },[])

  const[orderProceed,setOrderProceed]=useState(false)

  let imagesStyle={
    width:'100%',
    height:'300px',
    objectFit:'contain',
    margin:'15px 0'
}



const IncreaseQty=(pid,CartQty,pQty)=>{
  if(CartQty<=pQty){
 addItemToCart(pid,CartQty).then(
  (data)=>{
            setCart(data)
            toast.success("+1")
  }
 ).catch((error)=>{console.log(error)})
  }else{
    toast.error("Product Out of Stock")
  }
}


const DecreaseQty=(pid,Qty)=>{
  if(Qty>0){
  addItemToCart(pid,Qty).then(
    (data)=>{
              setCart(data)
              toast.success("+1")
    }
   ).catch((error)=>{console.log(error)})
  }
  else{
    toast.error("Quantity cannot Decrease")
  }
}

const removeItemToCart=(item)=>{
 removeItem(item.product.productId).then(data=>{
  value.setCart(data)
  setCart(data)
 }).catch(error=>{
  console.log(error);
 })
}

const initializeRazorpay=()=>{
    return new Promise((res)=>{
       const script=document.createElement("script");
       script.src='https://checkout.razorpay.com/v1/checkout.js';

       script.onload=()=>{
        res(true);
       }

       script.onerror=()=>{
        res(false);
       }
       document.body.appendChild(script);
    })
}

async function initiatePayment(data){

  const res=await initializeRazorpay();
 
  if(res){
   // console.log("Razorpayintialized")
   console.log(data.orderAmout)
   console.log(typeof(data.orderAmout)) 
    paymentOrder(data.orderAmout).then(res=>{
      console.log(res);
      toast.success("order created")
      
      // open payment form
      if(res.message=='CREATED'){
        console.log("method run");
        var options = {
          "key": "rzp_test_Ixt4C2fSFKfBVm", // Enter the Key ID generated from the Dashboard
          "amount": res.price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          "currency": "INR",
          "name": "Happy Pet Shoping",
          "description": "This is learning payment module",
          "image": "https://drive.google.com/file/d/15gWfGXJIEV4pNcD1dOLh8rdPgIbDY_fn/view?usp=share_link",
          "order_id": res.orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          "prefill": {
              "name": "Varun Garade",
              "email": "varungarade1151@gmail.com",
              "contact": "enter your mobile Number"
          },
          "notes": {
              "address": ""
          },
          "theme": {
              "color": "#3399cc"
          }
      };

      options.handler=(response)=>{

        response['user_order_id']=data.orderId
        console.log(response)

        successPayment(response).then(r=>{
          console.log(r)
          if(r.caputer){
            toast.success("Payment done ....");
            navigate("/user/dashboard");
          }

        }).catch(error =>{
          console.log(error)
          toast.error("error in capturing")
        })
        

      }


      const rzp=new window.Razorpay(options);
      rzp.open();

      }

      


    }).catch(error=>{
      console.log(error)
      toast.error("error in create order")
    })
  }else{
    toast.error("Error in intitializing razorpay")
  }

}
const createOrder=()=>{
    if(!window.confirm("Are You Sure Want to Proceed")){
      return;
    }
    if(cart.iteam.length>0){
    orderDetails.cartID=cart.cartId;
    
    createOrderService(orderDetails).then(data=>{
      toast.success("order Placed : Redirecting to payment Page")
      setOrderCreated(true)
       initiatePayment(data);
       console.log("userOrderDetail");
        console.log(data);
    }).catch(error=>{
       console.log("create order error")
      console.log(error)
    })
  }else{
    toast.error("plz add at least product in Cart")
  }
}
const cartHItemsHtmlData=()=>{
  
}

const CartItemsHtml=()=>{
  return(
   
    <Container>
    <h1>Cart Items({cart.iteam.length})</h1>
      <div className='mt-3'>
            {cart.iteam.map((cartItem,index)=>(

              <Card className='mt-2' border-0 shadow-sm color='light'>
                <CardBody>
                <img style={imagesStyle} src={Base_url+'/products/images/'+cartItem.product.productId} alt="" />
                <CardHeader><h4 className='text-center'>{cartItem.product.productName}{cartItem.product.productId}</h4> </CardHeader>
                 
                </CardBody>
                <CardText>
                  <b> <h8 className="ms-3">Quantity: {cartItem.quantity}</h8></b>
                  </CardText>
                  <CardText className='sm-3'>
                  <b> <h8 className='ms-3'>Prize: {cartItem. totalproductprize}</h8></b>
               
                  </CardText>
                 
                 <div>
                  
                  <Button  onClick={()=>IncreaseQty(cartItem.product.productId,cartItem.quantity+1,cartItem.product.productQuantity)} color='success' size="sm" className='my-3 ms-3'>Increase Quantity</Button>
                  <Button onClick={()=>DecreaseQty(cartItem.product.productId,cartItem.quantity-1)} color='primary' size="sm" className='my-3 ms-3'>Decrease Quantity</Button>
                  <Button onClick={(event)=>removeItemToCart(cartItem)} color='danger' size="sm" className='my-3 ms-3'>Remove Item</Button>
                 </div>

                 <CardFooter dangerouslySetInnerHTML={ {__html:cartItem.product.productDesc} } ></CardFooter>
                 
              </Card>
            ))} 
            <Container className='my-3'>
            {console.log(cart.iteam.length)}
             { cart.iteam.length>0 ?(<Button onClick={()=>{setOrderProceed(true)}}  block color='primary' size='lg'>Click Here To Proceed</Button>):''}
            </Container>
      </div>
  </Container>
            
  )
}
const orderProceedHtml=()=>{
  let styleOb={
    padding:'20px',
    background:'red',
    marginTop:'120px',
    marginLeft:'350px',
    width:"50%",
    height:"%",
  }
  return(
        <div>
          {JSON.stringify(orderDetails)}
           <Card  style={styleOb}>
            <CardTitle className='text-center'><h5 style={{color:'white'}}><b>Fill the delivery Address</b></h5></CardTitle>
           </Card>
           <FormGroup>
            <Input value={orderDetails.address} onChange={(event)=>setOrderDetails({...orderDetails,address:event.target.value})} style={{height:'300px',marginTop:'5%',marginLeft:'9%',width:'1300px'}} placeholder='Enter your delivery Address Here' type='textarea'> </Input>
            <Container className='text-center'>
              <Button onClick={createOrder} style={{marginTop:'10px'}} size="sm" block color='success'><h3>Create Order & Proceed for Payment</h3></Button>
              <Button style={{marginTop:'10px'}} size="sm" block color='primary' onClick={()=>{setOrderProceed(false)}}><h3>Back</h3></Button>
            </Container>
           </FormGroup>
        </div>
  )
}
 
  const cartHtml=()=>{
    return(
      <Container>
      {orderProceed ? orderCreated ? <h1>Order Create , Redirecting to payment...</h1> : orderProceedHtml():CartItemsHtml()}

      </Container>
    
       
    )
  }
  return (
    <Base>
    {cart ? cartHtml() :<h1>Loding...</h1>}
    </Base>
  )
}

export default Cart