import React from "react";
import banner1 from '../images/Screenshot 2022-12-07 172619.jpg'
import banner2 from '../images/Screenshot 2022-12-07 172842.jpg'
import banner3 from '../images/Screenshot 2022-12-07 172803.jpg'
import banner4 from '../images/Screenshot 2022-12-07 172907.jpg'
import { Link } from 'react-router-dom';

export default function Banner(){
    return(<>
<div class="conatiner-fluid">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-pause ="hover">
        <div class="carousel-inner">
          
          <div class="carousel-item active">
            <img src={banner1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item"  >
            <img src={banner2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item" >
            <img src={banner3}class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" >
            <img src={banner4}class="d-block w-100" alt="..." />
          </div>
         
        </div>
    </div>
</div>
</>
);

};