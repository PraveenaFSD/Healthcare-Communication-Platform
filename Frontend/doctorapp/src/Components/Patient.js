import logo from './logo.svg'
import React, { Routes ,Route} from "react";
import { Link } from "react-router-dom";
;

function Patient() {
  
  return ( 
<div> <ul className="navbar-nav">
            <li className="nav-item active">
            <Link className="nav-link" >Get All Doctors</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link"  >Update Profile</Link>
            </li>
          
           
          </ul>
<div>


    </div>
   
   
   </div>
   

  )
}
export default Patient;
