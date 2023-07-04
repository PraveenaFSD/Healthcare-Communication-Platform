import logo from './logo.svg'
import React, { Routes ,Route} from "react";
import { Link } from "react-router-dom";
import GetAllPatient from './GetAllPatient';
import UpdateDoctor from './UpdateDoctor';

function Doctor() {
  
var log =()=>{
  localStorage.clear();
}
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <a class="navbar-brand" ><Link  className="nav-d"to="/getallpatient">Get All Patient</Link></a>
  <a class="navbar-brand" ><Link className="nav-d" to="/updatedoctor">Update Profile</Link></a>
  <a class="navbar-brand" ><Link className="nav-d" to="/docterprofile">Account</Link></a>

  <a class="navbar-brand" ><Link className="nav-d" onClick={log} to="/">Log out</Link></a>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

</nav>

      </div>
   )

{/* <div> <ul className="navbar-nav">
            <li className="nav-item active">
            <Link className="nav-link" to="/updatedoctor">Apply Leave</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/getallpatient" >Get All Leave Details</Link>
            </li>
          
           
          </ul> */}
          
{/* <Routes>
            <Route path="/updatedoctor" element={<UpdateDoctor />} />
            <Route path="/getallpatient" element={<GetAllPatient />} /> 


            </Routes><img src={logo} class="img-fluid" alt="Responsive image"/> */}

    
   
   
  
   

  
}
export default Doctor;
