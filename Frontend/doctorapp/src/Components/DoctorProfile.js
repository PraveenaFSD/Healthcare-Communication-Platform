import doccard from './doccard.jpg'
import React, { Routes ,Route} from "react";
import Doctor from './Doctor'

import './Login.css'
function DoctorProfile() {
  

    return (
      <div>

<Doctor/>
<div class="card" >
  <img class="card-img-top" src={doccard} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


      </div>
   )


  
   

  
}
export default DoctorProfile;
