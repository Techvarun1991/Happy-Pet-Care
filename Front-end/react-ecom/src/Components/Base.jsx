import React from "react";
import CustomNavbar from "./CustomNavbar";



function Base({children}){
    return(

        <div>
            <CustomNavbar/>
            <div style={{marginTop:'60px'}}>
                {children}
            </div>
               
            <div >
            
            </div>

        </div>
    
    )

}

export default Base;