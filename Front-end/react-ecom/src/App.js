import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Service from './Components/Service';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import CustomNavbar from './Components/CustomNavbar';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './Components/PrivateRoutes'
import Store from './Components/Store';
import Banner from './Components/Banner';
import Cart from './Components/Cart';
import { CartProvider } from './Components/Context';
import AdminViewproduct from './Components/pages/admin/AdminViewproduct';
import Admindashboard from './Components/pages/admin/Admindashboard';
import Adminhome from './Components/pages/admin/Adminhome';
import Addproduct from './Components/pages/admin/Addproduct';
import Uploadimage from './Components/pages/admin/Uploadimage';
import Addcategory from './Components/pages/admin/Addcategory';
import Viewproduct from '../src/Components/Viewproduct'
import Updateproduct from './Components/pages/admin/Updateproduct';
import Adminuser from './Components/pages/admin/Adminuser';
import UpdateUser from './Components/pages/admin/UpdateUser';
import Order from './Components/pages/admin/Order';
import UpdateOrder from './Components/pages/admin/UpdateOrder';
import Category from './Components/pages/admin/Category';
import { HomePage } from './Components/HomePage';
import Base from './Components/Base';
import { ForgotPassword } from './Components/ForgotPassword';
import { ForgotPassOTPBox } from './Components/ForgotPassOTPBox';
import { OTPBox } from './Components/OTPBox';


const sayHello=()=>{
  alert("Hello,How are you");
  }

function App() {
  return (
    // <div  className='container'>
    //   <h1>This is root element</h1>   
    //   {
      
    //   /* <Home myFun={sayHello} title="Learn JavaScript"  description="We are learning JavaScrpit"  buttonName="like" />  
    //   <Home title="Lear React" description="We are learning Reacts" buttonName="click here"/>      
    //   <Home/>
    //   <About/>
    //   <Service/>
    //   <Login/>
    //   <Signup/>
    //   <Profile/>
    //   <Dashboard/> */
      
    //   }
    // </div>

     <CartProvider>
    <BrowserRouter>
    <Base/>
    <ToastContainer/>
      
        <Routes>

            <Route path="/"  element={<HomePage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Service/>}></Route>
            <Route path="/banner" element={<Banner/>}></Route>
           <Route path="/about"   element={<About/>}/>
           <Route path="/login"   element={<Login/>}/>
           <Route path="store/:categoryId" element={<Store/>}/>   
           <Route path="viewProduct/:productId" element={<Viewproduct/>}/> 
            <Route path='/Forgot' element={<ForgotPassword/>}></Route>
            <Route path='/ForgotOTP' element={<ForgotPassOTPBox/>}></Route>
            {/* <Route path='/regOTP' element={<OTPBox/>}></Route> */}
           {/* Admin-DashBoard Start */}
           
           <Route path="/admin-dashboard"  element={<Admindashboard/>}>
           <Route path="home" element={<Adminhome/>}/>
           <Route path="addProduct" element={<Addproduct/>}/>
           <Route path="uploadproductimage" element={<Uploadimage/>} />
           <Route path="category" element={<Addcategory/>} />
           <Route path="viewproduct" element={<AdminViewproduct/>} />
           <Route path="updateProduct/:productId" element={<Updateproduct/>} />
           <Route path="adminuser" element={<Adminuser/>} />
           <Route path="update-user/:userId" element={<UpdateUser/>} />
           <Route path="order" element={<Order/>} />
           <Route path="/admin-dashboard/order/update/:orderId" element={<UpdateOrder/>} />
           <Route path="/admin-dashboard/cat" element={<Category/>}/></Route>  
        {/* Admin-DashBoard End */}

           <Route path="/signup"   element={<Signup/>}/>  
           <Route path="/user" element={<PrivateRoutes/>}>
           <Route path="dashboard" element={<Dashboard/>}/>
           <Route path="cart"  element={<Cart/>}/>

           </Route>
        </Routes>
    </BrowserRouter>
    </CartProvider>

  );
}
export default App;
