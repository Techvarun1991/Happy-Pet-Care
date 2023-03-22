import React from "react";
import dog from '../images/dog.jpg'
import bird from '../images/bird.jpg'
import fishes from '../images/fishes.jpg'
import smallpets from '../images/smallpets.jpg'
import cat from '../images/cat.jpg'
import { Link } from "react-router-dom";




export default function Types(){
    return(<>
        <section id="types">
        <div class="row">
        <div class="info2 col-lg-2">
            <h4>Lets Shop by <b>pet.</b></h4>
        
        
        </div>
        <div class="info col-lg-2">
        <Link to="/store/5"><img class="types-images"src={dog}></img></Link>
            
        
        </div>
        <div class="info col-lg-2">
        <Link to="/store/6"><img class="types-images"src={bird} href=""></img></Link>
        </div>
        <div class="info col-lg-2">
            <img class="types-images"src={fishes} href=""></img>
        </div>
        <div class="info col-lg-2">
            <img class="types-images"src={smallpets} href=""></img>
        </div>
        <div class="info col-lg-2">
           <Link to="store/6"><img class="types-images"src={cat} href=""></img></Link> 
        </div>
  
    </div>
    </section>
</>
    )
}