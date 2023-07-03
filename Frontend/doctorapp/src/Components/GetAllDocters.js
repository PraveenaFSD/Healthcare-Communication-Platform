import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './GetAllDocters.css'
import Admin from './Admin'
import GetAllDocters from "./GetAllDocters";
function GetAllDoctors() {
    const navigate = useNavigate()

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
     
        fetch('https://localhost:7206/api/User/GetAllDoctors')
            .then(async (res) => {
                var myDataa = await res.json()
                setDoctors(myDataa);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const updateLeaveStatus = async (id, status) => {
        try {
            const token = localStorage.getItem('token');
     
            const updatedLeaveData = {
                id: id,
                status: status === 'approved' ? 'bending' : 'aproved'
            };

            await fetch('https://localhost:7206/api/User/Approvedisapprovedoctor', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer "+token
                },
                body: JSON.stringify(updatedLeaveData)
            })
                .then(res => {
                    console.log(res.status)
                    if (res.status == 202) {
                        alert("update status was successfull");
                        navigate('/getalldoctors')
                    }
                    else {
                        {
                            alert("update status was unsuccessfull");

                        }
                    }
                })

        } catch (error) {
            console.error(error);
        }
    };

    if (doctors.length == 0) {
        return <div >     <Admin/>

            <h1 className="alert alert-danger" >Loading the docter details... </h1></div>;
    }
    return (
        
        <div> <Admin/>
        <h1>Doctor Details</h1><br />

            <div className="alterTable ">
                <table className="table table-striped ">
                    <thead>
                        <tr className="table-info">
                            <th scope="col">User Id</th>

                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Date Of Birth</th>
                            <th scope="col">Age </th>
                            <th scope="col">Gender</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Status</th>

                            <th scope="col">Specialization</th>
                            <th scope="col">Experience</th>
                            





                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map(u => (
                            <tr key={u.id}>
                                <td >{u.id}</td>

                                <td >{u.firstName}</td>
                                <td >{u.lastName}</td>
                                <td>{u.dateOfBirth}</td>
                                <td >{u.age}</td>
                                <td >{u.gender}</td>
                                <td >{u.phone}</td>
                                <td >{u.address}</td>
                                <td >{u.email}</td>
                                <td>    <button
                                    className='btn-change'
                                    style={{ backgroundColor: u.status === 'bending' ? '#f9d2c0' : '#cbf2d9' }}
                                    onClick={() => updateLeaveStatus(u.id, u.status)}
                                >
                                    {u.status}
                                </button></td>

                                <td>{u.specialization}</td>
                                <td>{u.experience}</td>
                            





                            </tr>
                        ))}
                    </tbody>
                </table>
            </div></div>

    );
}
export default GetAllDoctors;