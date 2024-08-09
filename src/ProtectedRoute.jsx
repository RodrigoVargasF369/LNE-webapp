import { Navigate, Outlet } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';

function ProtectedRoute({ element: element, ...rest}){
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
    });

    useEffect(()=>{
        getCurrentUser()
        .then((user)=>{
            setAuthState({isAuthenticated: true, user})
        })
        .catch(()=>{
            setAuthState({isAuthenticated: false, user: null})
        })
    },[])

    return(
        authState.isAuthenticated? <Outlet/> : <Navigate to='/signin'/>
    )
}

export default ProtectedRoute;