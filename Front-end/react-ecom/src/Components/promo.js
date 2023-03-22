import React from "react"
import promo1 from '../images/promo-1.jpg'
import promo2 from '../images/promo-2.jpg'
import promo3 from '../images/promo-3.jpg'



export default  function promos(){
    return(
        <section id="promo">
    <div class="container text-center">
        <div class="row g-4 row-cols-1 row-cols-lg-3">
          <div class="col">
           <div class="p-3 border"><a target="_blank" href=""><img  class ="img-fluid" src={promo1} alt="" /></a></div>
          </div>
          <div class="col">
            <div class="p-3 border"><a target="_blank" href=""><img  class ="img-fluid" src={promo2} alt="" /></a></div>
          </div>
           <div class="col">
            <div class="p-3 border"><a target="_blank" href=""><img  class ="img-fluid" src={promo3} alt="" /></a></div>
          </div>
        </div>
      </div>
    
</section>

    )

}