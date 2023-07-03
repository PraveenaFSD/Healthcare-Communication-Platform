
import React, { useState } from "react";
import img from './updateDoctor.jpg'
import './UpdateDoctor.css'
import { Link, useNavigate } from 'react-router-dom';
import Patient from "./Patient";


function UpdateDoctor() {
    const [user, setuser] = useState({

        
       
          "id":localStorage.getItem(id),
        "passwordString": "",
        
      });
      var updatepas = async () => {
        try {
            
            const token = localStorage.getItem('token');
            
          await fetch('https://localhost:7206/api/User/UpdateDoctorDetails', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ token,

            },
            body: JSON.stringify(doctor)
          });
          alert("Update Password Details Successfull")
        } catch (error) {
          console.error(error);
        }
      };

  return (<div><Patient/>
        <div className="col-12 col-lg-11" >
          <div className="cd">
            <div className="card card0 rounded-0" >

              <div className="row">
                <div className="col-md-5 d-md-block d-none p-0 box"  >
                  <img src={img} className="img-updatedoctor"></img>
                </div>

                <div className="col-md-7 col-sm-12 p-0 box">
                  <div className="card rounded-0 border-0 card2 " id="paypage">
                    <div className="form-card">
                      <br />
                      <h2 id="heading2" >Update You Profile</h2><br />
                      <input type="text" className="btn-input" name="holdername" placeholder="Password" 
                      onChange={(event) => {
                        setuser({ ...doctor, "passwordString": event.target.value })
      
                      }}/>
                     
                 
              
                      <div className="row" >
                        <div className="col-md-10" >
                          <button className="login-button" onClick={updatedoc} >Update Details</button>
                        </div>
                        <br /><p>n</p><br />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>);

}
export default UpdateDoctor;
