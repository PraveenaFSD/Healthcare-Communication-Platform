import doccard from './doccard.jpg'
import React, { Routes ,Route} from "react";
import { Link } from "react-router-dom";
import GetAllPatient from './GetAllPatient';
import UpdateDoctor from './UpdateDoctor';
import Admin from './Admin'
import './Login.css'
function DeleteDocter() {
  

    return (
      <div>

<Admin/>
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
export default DeleteDocter;
