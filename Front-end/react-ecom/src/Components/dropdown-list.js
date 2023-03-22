import React from "react";


export default function Dropdownlist(){
    return (<>
        <div className="drop">
        <div className="row mt-5">
         <div className="col-lg-6">
             <div className="btn-group mt-1">
                 <button type="button" className="btn">Shop by Pet</button>
                 <button type="button" className="btn  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                     <span className="visually-hidden">Toggle Dropdown</span>
                 </button>
                 <ul class="dropdown-menu">
                     <li><a className="dropdown-item" href="">Dog</a></li>
                     <li><a className="dropdown-item" href="">Cats</a></li>
                     <li><a className="dropdown-item" href="">Birds</a></li>
                     <li><a className="dropdown-item" href="">Fishes</a></li>
                     <li><a className="dropdown-item" href="">Small Animals</a></li>
                     <li>
                         <hr className="dropdown-divider" />
                     </li>
                     <li><a className="dropdown-item" href="#">Separated link</a></li>
                 </ul>
             </div>
              <div className="btn-group mt-1">
                 <button type="button" className="btn ">Shop by Brand</button>
                 <button type="button" className="btn  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                     <span className="visually-hidden">Toggle Dropdown</span>
                 </button>
                 <ul className="dropdown-menu">
                     <li><a className="dropdown-item" href="">Pedigree</a></li>
                     <li><a className="dropdown-item" href="">Royal Canine</a></li>
                     <li><a className="dropdown-item" href="">Drools</a></li>
                     <li>
                         <hr className="dropdown-divider" />
                     </li>
                     <li><a className="dropdown-item" href="">Separated link</a></li>
                 </ul>
             </div>
             <div className="btn-group mt-1">
                 <button type="button" className="btn ">Shop by Breed</button>
                 <button type="button" className="btn  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                     <span className="visually-hidden">Toggle Dropdown</span>
                 </button>
                 <ul className="dropdown-menu">
                     <li><a className="dropdown-item" href="">Action</a></li>
                     <li><a className="dropdown-item" href="">Another action</a></li>
                     <li><a className="dropdown-item" href="">Something else here</a></li>
                     <li>
                         <hr className="dropdown-divider" />
                     </li>
                     <li><a className="dropdown-item" href="">Separated link</a></li>
                 </ul>
             </div>
            
         </div>
         <div className= "col-lg-6 mt-3">
             <a className="col mx-4" href="" id="a-tag" >Free Shipping on orders above ₹ 999 </a>
 
         </div>
         
     </div>
     </div>
     </>
 
     );
 };