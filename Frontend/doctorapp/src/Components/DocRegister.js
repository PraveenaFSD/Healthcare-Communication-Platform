import './DocRegister.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";


function DocRegister() {
  const [doctor, setDoctor] = useState({
    user: {

    },
    "firstName": "",
    "lastName": "",
    "dateOfBirth": "",
    "age": 0,
    "gender": "",
    "phone": "",
    "address": "",
    "email": "",
    "specialization": "",
    "licenseNumber": "",
    "experience": 0,
    "passwordString": ""

  });
  const navigate = useNavigate();

  var applyLeave = () => {
    console.log(doctor)
    fetch('https://localhost:7206/api/User/AddDoctor',
      {
        "method": "POST",
        headers: {
          "accept": "text/plain",
          "Content-Type": 'application/json'
        },
        "body": JSON.stringify({ ...doctor, "doctor": {} })
      })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        localStorage.setItem("myData", myData.token);
      }

      ).catch((err) => {
        console.log(err)
      })
  }
  return (

    <div>
      <div className="wrapper" >
        <div className="inner" >
          <form action="">
            <h2 className="reg">Docter Registration Form</h2>
            <br />
            <div >
              <div className="form-wrapper">
                <label >First Name</label>
                <input type="text" className="form-control" onChange={(event) => {
                  setDoctor({ ...doctor, "firstName": event.target.value })

                }} />
              </div>
              <div className="form-wrapper">
                <label >Last Name</label>
                <input type="text" className="form-control" onChange={(event) => {
                  setDoctor({ ...doctor, "lastName": event.target.value })

                }} />
              </div>
            </div>
            <div className="form-wrapper">
              <label >DOB</label>
              <input type="date" className="form-control" onChange={(event) => {
                setDoctor({ ...doctor, "dateOfBirth": event.target.value })

              }} />
            </div>
            <div className="form-wrapper">
              <label >Age</label>
              <input type="number" className="form-control" onChange={(event) => {
                setDoctor({ ...doctor, "age": event.target.value })

              }} />
            </div>
            <div className="form-wrapper">
              <label >Gender</label>
              <input type="text" className="form-control" onChange={(event) => {
                setDoctor({ ...doctor, "gender": event.target.value })

              }} />
            </div>
            <div className="form-wrapper">
              <label >Phone Number</label>
              <input type="string" className="form-control" onChange={(event) => {
                setDoctor({ ...doctor, "phone": event.target.value })

              }} />
            </div>

            <div className="form-wrapper">
              <label >Adddress</label>
              <input type="text" className="form-control" onChange={(event) => {
                setDoctor({ ...doctor, "address": event.target.value })

              }} />
            </div>
            <div className="form-wrapper">
              <label >Email</label>
              <input type="text" className="form-control" onChange={(event) => {
                setDoctor({ ...doctor, "email": event.target.value })

              }} />
            </div>
            <div className="form-wrapper">
              <label >Password</label>
              <input type="password" className="form-control" onChange={(event) => {
                setDoctor({ ...doctor, "passwordString": event.target.value })

              }} />
            </div>
            <div className="form-wrapper">
              <label >Specialization </label>
              <input type="text" className="form-control" onChange={(event) => {
                setDoctor({ ...doctor, "specialization": event.target.value })

              }} />
            </div>
            <div className="form-wrapper">
              <label >License Number</label>
              <input type="string" className="form-control" onChange={(event) => {
                setDoctor({ ...doctor, "licenseNumber": event.target.value })

              }} />
            </div>
            <div className="form-wrapper">
              <label >Experience </label>
              <input type="number" className="form-control" onChange={(event) => {
                setDoctor({ ...doctor, "experience": event.target.value })

              }} />
            </div>

            <button type="submit" className="btn-register" onClick={applyLeave}>Register Now</button>
            {/* <Routes>
    <Route path="disaprroveddoc" element={<DisApprovedDoc />} />
          
         
    </Routes> */}
          </form>
        </div>
      </div>


    </div>

  )

}
export default DocRegister