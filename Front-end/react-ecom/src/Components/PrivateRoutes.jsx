import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { checkLogin } from '../auth'

function PrivateRoutes() {
  if(checkLogin()){
     return <Outlet/>
  }else{
    return <Navigate to="/login"/>
  }
}

export default PrivateRoutes
