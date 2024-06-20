import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css'
import { Home } from './pages/Home';
import { LogInPage } from './pages/LogInPage';
import { SignupPage } from './pages/SignupPage';
import { styled } from '@mui/material';



function App() {

  return (
    <BrowserRouter>
      <nav className='navBar'>
        <ul>
          <li><Link to='/' className='links'>Events Planner</Link></li>
          <li><Link to='/signup' className='links'>Sign Up</Link></li>
          <li><Link to='/login' className='links'>Log In</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LogInPage  />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
