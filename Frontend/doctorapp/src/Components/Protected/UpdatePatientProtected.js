import { Navigate } from "react-router-dom";

function UpdatePatientProtected({token,role,children})
{
    token=localStorage.getItem("token");
    
    if(token!=null && localStorage.getItem("role")=="patient".toLowerCase)
        return children;
    return <Navigate to='/'/>
}

export default UpdatePatientProtected