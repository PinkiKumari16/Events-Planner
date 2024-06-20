import React from 'react'
import { SignUp } from '../components/signup/SignUp'
import styles from './LoginSignup.module.css'; 

export const SignupPage = () => {
  return (
    <>
      <div className={styles.LoginBody}>
        <SignUp />
      </div>
    </>
  )
}
