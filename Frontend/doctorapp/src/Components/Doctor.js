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
          {/* <ul className="navbar-nav">
              <li className="nav-item active">
                  <Link className="nav-link" to={"$/approveddocter"}>Get All Doctors</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/getallpatient" >Update Profile</Link>
              </li>
          </ul> */}
          {/* <div>
              <Routes>
                  <Route path={"$/approveddocter"} element={<ApprovedDoctors/>}/>
              </Routes>
          </div> */}
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active nav-doc">
      {/* <a class="nav-link" href="/patient">GetAllDocters <span class="sr-only">(current)</span></a> */}
      <Link to="/approveddoctors"  className="nav-doc" >GetAllPatient</Link>&nbsp;&nbsp;
    </li>
    <li class="nav-item " >
    <Link to="/updatedoctor" className="nav-doc">UpdateProfile</Link>
    </li>
    <li class="nav-item active nav-doc">
<Link to="/adminprofile"  >Profile</Link>&nbsp;

</li>
<li class="nav-item active nav-doc">
<Link onClick={log} to="/" >Log out</Link>&nbsp;

</li>
    
   
  </ul>
 
</div>
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
