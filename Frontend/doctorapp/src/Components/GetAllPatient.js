// import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import axios from 'axios';
// function GetAllPatient() {
// const [patients, setPatients] = useState([]);
// useEffect(() => {
// const token = localStorage.getItem('token');
// const config = {
// headers: {
// Authorization: `Bearer ${token}`, }
// };
// axios.get('https://localhost:7206/api/User/GetAllPatients', config) .then(res => {
//     setPatients(res.data);
// })
// .catch(error => {
// console.error('Error retrieving interns:', error);
// });
// }, []);
// //console.log('Interns:', interns);
// if (patients.length == 0) {
// return <div >
// <h1 className = "alert alert-danger" >Loading... </h1></div>; }
// return (
// <div className="alterTable">
// <table className="table table-bordered">
// <thead>
// <tr className="table-dark">
// <th scope="col">User ID</th>
// <th scope="col">First Name</th>
// <th scope="col">Last Name</th>
// <th scope="col">Date Of Birth</th>
// <th scope="col">Age </th>
// <th scope="col">Gender</th>
// <th scope="col">Address</th>
// <th scope="col">Phone Number</th>
// <th scope="col">Email</th>
// <th scope="col">Blood Group</th>


// </tr>
// </thead>
// <tbody>
// {interns.map(u => (
// <tr key={u.id}>
// <td className="table-warning">{u.name}</td>
// <td className="table-warning">{u.dateOfBirth}</td>
// <td className="table-warning">{u.age}</td>
// <td className="table-warning">{u.gender}</td>
// <td className="table-warning">{u.phone}</td>
// <td className="table-warning">{u.email}</td>
// </tr>
// ))}
// </tbody>
// </table>
// </div>
// );
// }
// export default GetAllPAtient;