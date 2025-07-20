import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRoute = ({allowedRoles}) => {
  return <Outlet context={{ allowedRoles }} />
 

}

export default PrivateRoute