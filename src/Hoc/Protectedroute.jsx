import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
function Protectedroute() {
 const navigation=useNavigate();  
 const [token , settoken]=useState(false);
useEffect (()=>{
if(!localStorage.getItem('token')){
    settoken(false)
    navigation('/Log')
}else{
    settoken(true)
}
},[localStorage]);



  return (
    <div>
        <Outlet>

        </Outlet>
    </div>
  )
}

export default Protectedroute