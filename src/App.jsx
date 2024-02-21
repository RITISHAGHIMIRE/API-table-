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
function App() {
 
  return (
   
   <Routes>
    <Route path='/' element={<Table/>}/>
    <Route path='/:id' element={<Office/>}/>
    <Route path='/Add' element={<Add/>}/>
    <Route path='/Log' element={<Log/>}/>
   </Routes>
  )
}
    
  
export default App
