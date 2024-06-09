import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css'
import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/LogIn';

function App() {

  return (
    <BrowserRouter>
      <nav className='navBar'>
        <ul>
          <li><Link to='/'>Events Planner</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/login'>Log In</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
