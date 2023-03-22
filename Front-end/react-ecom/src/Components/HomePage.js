import React from "react";
import Dropdownlist from "./dropdown-list";
import Types from "./types";
import Promo from "./promo";
import Banner from "./Banner"
// import Products from "./products";

import Blog from "./Blog";
export function HomePage(){
  return (
   <>
   <div className="container-fluid bg-light">
           
           <Dropdownlist />
           <Banner/>
           <Types />
           <Promo />
           {/* <div className="flex-container">
           <section id="products">
           {cards}
           </section>
           </div> */}
           {/* <Testimonial /> */}
           <Blog />
           {/* <Ending />  */}
           {/* <Signup />*/}

           {/* <Dropdownlist></Dropdownlist> */}    
       </div>
   </>
  );
};
