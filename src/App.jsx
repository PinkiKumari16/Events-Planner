import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import { LogInPage } from './pages/LogInPage';
import { SignupPage } from './pages/SignupPage';




function App() {

  const [dayZone, setDayZone] = useState('Good Morning');

  useEffect(() => {
      const updateDayZone = () => {
          let time = new Date();
          if (time.getHours() >= 20) {
              setDayZone('Good Night');
          } else if (time.getHours() >= 16) {
              setDayZone('Good Evening');
          } else if (time.getHours() >= 12) {
              setDayZone('Good Afternoon');
          } else {
              setDayZone('Good Morning');
          }
      };

      updateDayZone();

      const intervalId = setInterval(() => {
          updateDayZone();
      }, 1 * 60 * 60 * 1000); 

      return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <BrowserRouter>
      <nav className='navBar'>
        <h1 style={{color: '#fff'}}>{dayZone}</h1>
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

  