import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { Route, Router, Routes } from 'react-router-dom';
import Table from './pagecomponent/Table';
import Office from './Page/Office';
import Add from './Course/Add';
import Log from './Log/Log';
import Protectedroute from './Hoc/Protectedroute';
function App() {
 
  return (
   
   <Routes>
    <Route element={<Protectedroute/>}>
    <Route path='/' element={<Table/>}/>
    <Route path='/:id' element={<Office/>}/>
    <Route path='/Add' element={<Add/>}/>
    <Route path='/Log' element={<Log/>}/>
    </Route>
 
   </Routes>
  )
}
    
  
export default App
