import './App.css';
import Doctor from './Components/Doctor';
import Login from './Components/Login';
import Patient from './Components/Patient';
import DocRegister from './Components/DocRegister'
import RegisterPatient from './Components/RegisterPatient'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetAllPatient from './Components/GetAllPatient';
import UpdateDoctor from './Components/UpdateDoctor';
import ApprovedDoctors from './Components/ApprovedDoctors';
import UpdatePatient from './Components/UpdatePatient';
import Admin from './Components/Admin';
import GetAllDocters from './Components/GetAllDocters';
import Register from './Components/Register'
import DisapprovedDoc from './Components/DisapprovedDoc';
import AdminProfile from './Components/Admin';
import UpdatePassword from './Components/UpdatePassword'
import DeleteDocter from './Components/AdminProfile'

function App() {
  return (
    <div className="App">
       < BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/doctor' element={<Doctor />}/> 
      <Route path='/admin' element={<Admin />}/> 
      //<Route path='/patient/*' element={<Patient />}/> 
      <Route path='/patient' element={<Patient />}/> 
      <Route path='/docregister' element={<DocRegister />}/> 
      <Route path='/registerpatient' element={<RegisterPatient />}/> 
      <Route path='/register' element={<Register />}/> 
      <Route path='/disapproveddoc' element={<DisapprovedDoc />}/> 

      <Route path='/getalldoctors' element={<GetAllDocters />}/> 
      <Route path='/updatepatient' element={<UpdatePatient />}/> 
      <Route path='/updatedoctor' element={<UpdateDoctor />}/> 
      <Route path='/approveddoctors' element={<ApprovedDoctors />}/> 
      <Route path='/adminprofile' element={<AdminProfile />}/> 
      <Route path='/deletedocter' element={<DeleteDocter />}/> 
      <Route path='/updatepassword' element={<UpdatePassword />}/> 



      




    </Routes>
   </BrowserRouter>
      
    </div>
  );
}

export default App;
