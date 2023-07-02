import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function GetAllPatient() {
const [patients, setPatients] = useState([]);
useEffect(() => {
const token = localStorage.getItem('token');
console.log(token)
const config = {
headers: {
Authorization: `Bearer ${token}`, }
};
fetch('https://localhost:7206/api/User/GetAllPatients')  
.then(response => response.json())
 .then(res => {
    setPatients(res);
 })

 .catch(error => {
   console.error(error);
 });
}, []);
if (patients.length == 0) {
return <div >
<h1 className = "alert alert-danger" >Loading the patient details... </h1></div>; }
return (
    <div>  <h1>Patient Details</h1><br/>

    <div className="alterTable ">
    <table className="table table-striped ">
    <thead>
    <tr className="table-info">
    <th scope="col">User ID</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Date Of Birth</th>
    <th scope="col">Age </th>
    <th scope="col">Gender</th>
    <th scope="col">Address</th>
    <th scope="col">Phone Number</th>
    <th scope="col">Email</th>
    <th scope="col">Blood Group</th>
    
    
    </tr>
    </thead>
    <tbody>
    {patients.map(u => (
    <tr key={u.id}>
    <td >{u.id}</td>
    <td >{u.firstName}</td>
    <td >{u.lastName}</td>
    <td>{u.dateOfBirth}</td>
    <td >{u.age}</td>
    <td >{u.gender}</td>
    <td >{u.address}</td>
    <td >{u.phoneNumber}</td>
    <td >{u.email}</td>
    <td>{u.bloodGroup}</td>
    
    
    
    
    </tr>
    ))}
    </tbody>
    </table>
    </div></div>
  
);
}
export default GetAllPatient;