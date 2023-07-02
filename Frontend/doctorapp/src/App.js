import './App.css';
import Doctor from './Components/Doctor';
import Login from './Components/Login';
import DocRegister from './Components/DocRegister'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
       < BrowserRouter>
    <Routes>
      <Route path='/' element={<DocRegister />}/>
      <Route path='/doctor' element={<Doctor />}/>
    </Routes>
   </BrowserRouter>
      
    </div>
  );
}

export default App;
