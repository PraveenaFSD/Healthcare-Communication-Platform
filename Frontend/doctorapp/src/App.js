import './App.css';
import AdminProtected from './Components/Protected/AdminProtected';
import GetAllDoctersProtected from './Components/Protected/GetAllDoctorsProtected'
import UpdatePasswordProtected from './Components/Protected/GetAllDoctorsProtected'
import ApprovedDoctorsProtected from './Components/Protected/ApprovedDoctorsProtected';
import UpdateDoctorsProtected from './Components/Protected/UpdateDoctorsProtected';
import DoctorProtected from './Components/Protected/DoctorProtected';
import UpdatePatientProtected from './Components/Protected/UpdatePatientProtected'
import Doctor from './Components/Doctor';
import Login from './Components/Login';
import Patient from './Components/Patient';
import DocRegister from './Components/DocRegister'
import RegisterPatient from './Components/RegisterPatient'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetAllPatient from './Components/GetAllPatient';
import UpdateDoctor from './Components/UpdateDoctor';
import UpdatePatient from './Components/UpdatePatient';
import Admin from './Components/Admin';
import GetAllDocters from './Components/GetAllDocters';
import Register from './Components/Register'
import DisapprovedDoc from './Components/DisapprovedDoc';
import AdminProfile from './Components/AdminProfile';
import UpdatePassword from './Components/UpdatePassword'
import ApprovedDoctors from './Components/ApprovedDoctors';
import PatientProfile from './Components/PatientProfile';
import DoctorProfile from './Components/DoctorProfile';
import PatientHome  from './Components/PatientHome';
import PatientImg  from './Components/PatientImg';

function App() {
  var token;
  return (
    <div className="App">
       < BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/patient' element={<Patient />}/> 
      <Route path='/docregister' element={<DocRegister />}/> 
      <Route path='/registerpatient' element={<RegisterPatient />}/> 
      <Route path='/register' element={<Register />}/> 
      <Route path='/disapproveddoc' element={<DisapprovedDoc />}/> 
      <Route path='/getallpatient' element={<GetAllPatient />}/> 
      <Route path='/adminprofile' element={<AdminProfile />}/> 
      <Route path='/docterprofile' element={<DoctorProfile />}/> 
      <Route path='/patientprofile' element={<PatientProfile />}/> 
    <Route path='/approveddoctors' element={<ApprovedDoctors/>}/>
    <Route path='/patienthome' element={<PatientHome/>}/>
    <Route path='/patientimg' element={<PatientImg/>}/>

      <Route path='/admin' element={
          <AdminProtected token={token}>
            <Admin/>
          </AdminProtected>
          }/>
            <Route path='/getalldoctors' element={
          <GetAllDoctersProtected token={token}>
            <GetAllDocters/>
          </GetAllDoctersProtected>
          }/>
               <Route path='/updatepassword' element={
          <UpdatePasswordProtected token={token}>
            <UpdatePassword/>
          </UpdatePasswordProtected>
          }/>
                <Route path='/approveddoctors' element={
          <ApprovedDoctorsProtected token={token}>
            <UpdatePassword/>
          </ApprovedDoctorsProtected>
          }/>
              <Route path='/updatedoctor' element={
          <UpdateDoctorsProtected token={token}>
            <UpdateDoctor/>
          </UpdateDoctorsProtected>
          }/>
          <Route path='/doctor' element={
          <DoctorProtected token={token}>
            <Doctor/>
          </DoctorProtected>
          }/>
          <Route path='/updatepatient' element={
          <UpdatePatientProtected token={token}>
            <UpdatePatient/>
          </UpdatePatientProtected>
          }/>
      
      




    </Routes>
   </BrowserRouter>
      
    </div>
  );
}

export default App;
