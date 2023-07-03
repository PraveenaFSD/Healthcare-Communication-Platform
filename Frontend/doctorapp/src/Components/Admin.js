import logo from './logo.svg'
import React, { Routes ,Route,useState,useEffect} from "react";
import { Link, useNavigate,navigate } from "react-router-dom";
 
;

function Admin() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
         getdoctors();
       }, []);
       const navigate = useNavigate()
var log =()=>{
    localStorage.clear()
}
    var getdoctors=()=>
    {
        const token = localStorage.getItem('token');
        console.log(token)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
        fetch('https://localhost:7206/api/User/GetAllDoctors',config)  
         .then(res => {
            setDoctors(res);
         })
         .catch(error => {
           console.error(error);
         });
 

    }
  
    
    
  return ( 
       <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">
<li class="nav-item active nav-doc">
<Link to="/getalldoctors" >Get All Doctors</Link>&nbsp;
</li>
<li class="nav-item active nav-doc">
<Link to="/adminprofile"  >Update Password</Link>&nbsp;

</li>
<li class="nav-item active nav-doc">
<Link to="/deletedocter"  >Admin Profile</Link>&nbsp;

</li>
<li class="nav-item active nav-doc">
<Link onClick={log} to="/" >Log out</Link>&nbsp;

</li>




</ul>

</div>
</nav>
</div>

   
  )}
  export default Admin;

  


