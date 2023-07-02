import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function ApprovedDoctors() {
const [doctors, setDoctors] = useState([]);
useEffect(() => {
const token = localStorage.getItem('token');
console.log(token)
const config = {
headers: {
Authorization: `Bearer ${token}`, }
};
fetch('https://localhost:7206/api/User/GetAllApprovedDoctors')  
.then(response => response.json())
 .then(res => {
    setDoctors(res);
 })

 .catch(error => {
   console.error(error);
 });
}, []);
if (doctors.length == 0) {
return <div >
<h1 className = "alert alert-danger" >Loading the docter details... </h1></div>; }
return (
    <div>  <h1>Doctor Details</h1><br/>

    <div className="alterTable ">
    <table className="table table-striped ">
    <thead>
    <tr className="table-info">
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Date Of Birth</th>
    <th scope="col">Age </th>
    <th scope="col">Gender</th>
    <th scope="col">Address</th>
    <th scope="col">Phone Number</th>
    <th scope="col">Email</th>
    <th scope="col">Specialization</th>
    <th scope="col">Experience</th>



    
    
    </tr>
    </thead>
    <tbody>
    {doctors.map(u => (
    <tr key={u.id}>
    <td >{u.firstName}</td>
    <td >{u.lastName}</td>
    <td>{u.dateOfBirth}</td>
    <td >{u.age}</td>
    <td >{u.gender}</td>
    <td >{u.address}</td>
    <td >{u.phoneNumber}</td>
    <td >{u.email}</td>
    <td>{u.specialization}</td>
    <td>{u.experience}</td>

    
    
    
    
    </tr>
    ))}
    </tbody>
    </table>
    </div></div>
  
);
}
export default ApprovedDoctors;