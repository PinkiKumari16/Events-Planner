import React from 'react'
import { Login } from '../components/login/Login'
import styles from './LoginSignup.module.css'; 

export const LogInPage = () => {
  return (
    <>
        <div className={styles.LoginBody}>
            <Login />
        </div>
    </>
  )
}
