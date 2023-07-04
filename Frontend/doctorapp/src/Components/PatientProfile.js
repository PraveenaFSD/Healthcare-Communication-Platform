import logo from './logo.svg'
import React, { Routes ,Route,useEffect,useState} from "react";
import img from './docregister.jpg'
import PatientImg from './PatientImg';
function PatientProfile() {
    const [doctors, setDoctors] = useState({
      "firstName":"",
      "email":"",

      "bloodGroup":"",
    }
      
    );

    const [IdDTO, setUser] = useState({

        "userId": localStorage.getItem('userId'),
      });
    
    useEffect(() => {
        console.log(IdDTO.userId)
        const token = localStorage.getItem('token');
        console.log(token)

         fetch("https://localhost:7206/api/User/GetSinglePatient", {
            "method": "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ token,

            },
            "body": JSON.stringify({ ...IdDTO, "IdDTO": {} })
          })
            .then(async (res) => {
              var myDataa = await res.json();
            setDoctors(myDataa)
             console.log(myDataa.firstName)
            }
            ).catch((err) => {
              console.log(err)
            })
        });
     
    return (
      <div>
     <PatientImg/>
     <br/>
     <div className="ss">
     <div className="card" >
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h1 class="card-title">{doctors.firstName}</h1>
    <h4 class="card-title">Email &nbsp; {doctors.bloodGroup}</h4>
    <h4 class="card-title">Blood Group &nbsp; {doctors.bloodGroup}</h4>


    <p class="card-text">Email &nbsp;{doctors.bloodGroup}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
     </div>
    
      </div>
   )



    
   
   
  
   

  
}
export default PatientProfile;
