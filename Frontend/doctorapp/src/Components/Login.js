
import React, { useState } from "react";
import './Login.css'
import doclogo from './doclogo.png'
import { Link, useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate()
  const [user, setUser] = useState({

    "userId": 0,
    "password": ""
  });

  var login = () => {
    console.log(user)
    fetch("https://localhost:7206/api/User/LoginUser", {
      "method": "POST",
      headers: {
        "accept": "text/plain",
        "Content-Type": 'application/json'
      },
      "body": JSON.stringify({ ...user, "user": {} })
    })
      .then(async (res) => {
        var myDataa = await res.json();
        localStorage.setItem("token", myDataa.token)
        localStorage.setItem("role", myDataa.role)
        localStorage.setItem("userId", myDataa.userId)
        navigate("/doctor");
      }
      ).catch((err) => {
        console.log(err)
      })
  }




  return (<div>
    <div class="container-fluid">
      <div class="row justify-content-center" className="tr" >
        <div class="col-12 col-lg-11" >
          <div className="welcome">&nbsp;&nbsp; Welcome Back!!!</div>
          <div className="cd">
            <div class="card card0 rounded-0" >

              <div class="row">
                <div class="col-md-5 d-md-block d-none p-0 box"  >
                  <br /><br />
                  <img src={doclogo} className="img"></img>
                </div>

                <div class="col-md-7 col-sm-12 p-0 box">
                  <div class="card rounded-0 border-0 card2" id="paypage" className="sec">
                    <div class="form-card">
                      <br /><br />
                      <h2 id="heading2" >Login</h2><br />

                      <input type="text" className="btn-input" name="holdername" placeholder="User Id" onChange={(event) => {
                        setUser({ ...user, "userId": event.target.value })
                      }} />
                      <input type="password" className="btn-input" name="holdername" placeholder="Password" onChange={(event) => {
                        setUser({ ...user, "password": event.target.value })
                      }} />


                      <div class="row" >
                        <div class="col-md-6">
                          <Link className="forgot">forgot your password?</Link>			                        </div>
                        <div class="col-md-6" >
                          <button className="login-btn" onClick={login}>Login</button>
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
      </div>
    </div>
  </div>);

}
export default Login;
