import logo from './logo.svg'
import React, { Routes ,Route} from "react";
import { Link } from "react-router-dom";
import GetAllPatient from './GetAllPatient';
import UpdateDoctor from './UpdateDoctor';

function DisapprovedDoc() {
  

    return (
      <div>


<div className="alert alert-success" role="alert">
  <h1 className="alert-heading">Well done!</h1>
  <h3>Hey! User You have successfull register</h3>
  <hr/>
  <h2 className="mb-0">But Your are yet to approved</h2>
</div>


      </div>
   )


  
   

  
}
export default DisapprovedDoc;
