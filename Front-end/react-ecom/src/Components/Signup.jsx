import React, { useState } from 'react'
import { CardBody, Container,Row,Col,Card,Input, Label,option, Button} from 'reactstrap';
import { createUser } from '../Service/user-Service';
import {toast} from 'react-toastify'
import Base from './Base'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  /*const[name,setName]=useState('') at a time it can change one value only so we used 
  object */
const  [user,SetUser]=useState({
    name:'',
    email:'',
    password:'',
    about:'',
    address:'',
    phone:'',
    gender:' '
  })
  const [cpass, setCpass] = useState("");
  const onFieldChange=(event,fieldName)=>{
    //console.log(event); 
   // console.log(event.target.value)
  // setName(event.target.value) //set the value in name5
  SetUser({...user,[fieldName]:event.target.value})
  }
  // const emailFieldChange=(event)=>{
  //   SetUser({...user,email:event.target.value})
  // }
  let navigate = useNavigate();
  const handleCpassChange = (event) => {
    console.log("hello" + event.target.value);
    setCpass(event.target.value);
  };


  const registerUser=(event)=>{
    event.preventDefault();
    console.log(event)
    if(user.name.trim()===''){
      //alert("user name is Required");
      toast.error("User name is Required")
    }else if(user.email.trim()===''){
      //alert("user email is Required");
      toast.error("User Email is Required")
    }else if (user.password.trim() === '') {
      toast.error('Please enter your password');
    } else if(/^(?=.[A-Z])(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(user.password.trim)){
      toast.error('Password be like Asdf@123');
    }
    else if (user.password.length < 8) {
      toast.error('Password must be at least 8 characters long');
    } else if (user.password !== cpass) {
      toast.error('Passwords do not match');
    }else if (!/^\d{10}$/.test(user.phone)) {
      toast.error('Please enter a valid 10-digit mobile number');
    }
    else{
    //Submit the Form
    createUser(user).then((data)=>{
      console.log(data); 
      //alert("User Register");
      toast.success("User Registered successfully")
    }).catch(error =>{
      if(error.response.status===400){
        toast.error("vaildation Eroor")
       // alert("vaild Error");
       var message=``
       for(let i in error.response.data){
        //  print error in console console.log(error.response.data[i])
        message=message + `${i.toUpperCase()} ${error.response.data[i]} \n`
       }
       message=message + "";
       toast.error(message);
      }else if(error.response.status===401){
        // toast.error("vaildation Eroor")
       // alert("vaild Error");
       var message=``
       for(let i in error.response.data){
        //  print error in console console.log(error.response.data[i])
        message=message + `${i.toUpperCase()} ${error.response.data[i]} \n`
       }
       message=message + "";
       toast.error(message+ " Emailid is already is there ");
       navigate('/login');
      }else{
        toast.error("Server Error")
      }
      console.log(error)
    });
  }


  }
  
  return (
    <Base>
    <Container>
          <Row>
            <Col md={{
              size:6,
              offset:3
            }}>
              <Card className='Shadow-sm mt-5'  >
                 <CardBody>
                  
                   <h3 className='text-center '>Signup Here</h3>
                   <form onSubmit={registerUser}>
                    <div className='my-3'>
                      <Label for="username">Enter your Name</Label>
                    <Input type="text" id="name" placeholder='Enter Your Name Here'
                    onChange={(event)=>onFieldChange(event,'name')} 
                    value={user.name}
                    required/>
                    </div>

                    <div className='my-3'>
                      <Label for="email">Enter your Email</Label>
                    <Input type="email" id="email" placeholder='Enter Your Email Here'
                    //onChange={emailFieldChange} 
                     onChange={(event)=>onFieldChange(event,'email')}
                    value={user.email}
                    required/>
                    </div>

                    <div className='my-3'>
                      <Label for="password">Enter your Passwoard</Label>
                    <Input type="password" id="passwoard" placeholder='Enter Your Passwoard Here'
                    onChange={(event)=>onFieldChange(event,'password')}
                    value={user.password}
                    required/>
                    </div>
                    <div className='my-3'>
                      <Label for="password">Confirm your Passwoard</Label>
                    <Input type="password" id="passwoard" placeholder='Confirm password'
                    onChange={handleCpassChange}
                    value={cpass}
                    required/>
                    </div>
                    

                    <div className='my-3'>
                      <Label for="address">Enter your Address</Label>
                    <Input id="address" type="textarea" placeholder='Enter Your Address'
                    onChange={(event)=>onFieldChange(event,'address')}
                    value={user.address}
                    required/>
                    </div>

                    {/* <div className='my-3'>
                      <Label for="about">Enter your about yourself in short</Label>
                    <Input id="about" type="textarea" placeholder='Enter your about yourself in short Here'
                    onChange={(event)=>onFieldChange(event,'about')}
                    //value={user.about}
                    />
                    </div> */}

                    <div className='my-3'>
                    <Label for="Gender">Select your Gender</Label>
                    <Input type="select" id="gender"
                    onChange={(event)=>onFieldChange(event,'gender')}
                    value={user.gender}
                    required>
                    <option>select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    
                    </Input>
                   </div>

                   <div className='my-3'>
                      <Label for="mobileNo">Enter your Mobile Number</Label>
                    <Input type="number" id="phone" placeholder='Enter your Mobile Number'
                    onChange={(event)=>onFieldChange(event,'phone')}
                    value={user.phone}
                    required
                    />
                    </div>

                    <div className='my-3 text-center'>
                      <Button block color='primary'>signup</Button>
                    </div>

                   </form>
                   

                 </CardBody>
              </Card>
            </Col>
          </Row>
    </Container>
    </Base>
  )
}