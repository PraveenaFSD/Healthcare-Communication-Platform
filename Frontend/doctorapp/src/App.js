import './App.css';
import Doctor from './Components/Doctor';
import Login from './Components/Login';
import DocRegister from './Components/DocRegister'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GetAllPatient from './Components/GetAllPatient';
import UpdateDoctor from './Components/UpdateDoctor';



function App() {
  return (
    <div className="App">
       < BrowserRouter>
    <Routes>
      <Route path='/' element={<GetAllPatient />}/>
      {/* <Route path='/doctor' element={<Doctor />}/> */}
    </Routes>
   </BrowserRouter>
      
    </div>
  );
}

export default App;
