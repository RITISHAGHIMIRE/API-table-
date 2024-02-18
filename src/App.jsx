import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { Route, Router, Routes } from 'react-router-dom';
import Table from './pagecomponent/Table';
import Office from './Page/Office';

function App() {
 
  return (
   
   <Routes>
    <Route path='/' element={<Table/>}/>
    <Route path='/:id' element={<Office/>}/>
   </Routes>
  )
}
    
  
export default App
