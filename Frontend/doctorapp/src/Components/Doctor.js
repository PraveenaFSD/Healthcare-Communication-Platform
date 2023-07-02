import logo from './logo.svg'
import React, { Routes ,Route} from "react";
import { Link } from "react-router-dom";
import GetAllPatient from './GetAllPatient';
import UpdateDoctor from './UpdateDoctor';

function Doctor() {
  
  return ( 
<div> <ul className="navbar-nav">
            <li className="nav-item active">
            <Link className="nav-link" to="/updatedoctor">Apply Leave</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/getallpatient" >Get All Leave Details</Link>
            </li>
          
           
          </ul>
<div>
<Routes>
            <Route path="/updatedoctor" element={<UpdateDoctor />} />
            <Route path="/getallpatient" element={<GetAllPatient />} /> 


            </Routes><img src={logo} class="img-fluid" alt="Responsive image"/>

    </div>
   
   
   </div>
   

  )
}
export default Doctor;
