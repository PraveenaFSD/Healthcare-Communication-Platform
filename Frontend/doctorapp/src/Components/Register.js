import logo from './logo.svg'
import React, { Routes ,Route} from "react";
import { Link } from "react-router-dom";
import GetAllPatient from './GetAllPatient';
import UpdateDoctor from './UpdateDoctor';

function Register() {
  

    return (
      <div>
      
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active nav-doc">
      <Link to="/docregister" >Docter</Link>&nbsp;
    </li>
    <li class="nav-item">
    <Link to="/registerpatient" className="nav-doc">Patient</Link>
    </li>
    
   
  </ul>
 
</div>
</nav>
      </div>
   )

 

    
   
   
  
   

  
}
export default Register;
