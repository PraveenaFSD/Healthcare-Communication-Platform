import logo from './logo.svg'
import React, { Routes, Route } from "react";
import { Link } from "react-router-dom";
import ApprovedDoctors from './ApprovedDoctors';
import './Login.css'
import {  useNavigate } from 'react-router-dom';


function Patient() {
    const navigate = useNavigate()


    var log =()=>
    {
localStorage.clear();
    }
    
    return (
        <div>
          
         
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="collapse navbar-collapse na" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto nav-doc">
      <li className="nav-item active ">
        <Link to="/approveddoctors"className="nav-doc" >Get All Doctors</Link>&nbsp;&nbsp;
      </li>
      <li className="nav-item active ">
      <Link to="/updatepatient" className="nav-doc">Update Patient</Link>
      </li>&nbsp;&nbsp;
      <li className="nav-item active ">
      <Link  className="nav-doc"onClick={log} to="/">Log out</Link>
      </li>
      
     
    </ul>
   
  </div>
</nav>

        </div>


    );
}
export default Patient;
