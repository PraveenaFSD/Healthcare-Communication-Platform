import logo from './logo.svg'
import React, { Routes ,Route} from "react";
import { Link } from "react-router-dom";


function Doctor() {
  
  return ( 
<div><nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#"> Update Profile</a>

{/* <Routes>
      
      <Route path='/getallpatient' element={<GetAllPatient />}/>
    
    </Routes> */}
  
</nav>
<div><img src={logo} class="img-fluid" alt="Responsive image"/>

    </div>
   
   </div>
   

  )
}
export default Doctor;
