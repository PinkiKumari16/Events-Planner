import React, { useState } from 'react'
import styles from "./Login.module.css"
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordMessage, setShowPasswordMessage] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(password.length<=5){
            setShowPasswordMessage(true);
        }else{
            setShowPasswordMessage(false)
            console.log(email,password); 
            setEmail("")
            setPassword("")
        }
    }
    const notHaveAccount = () => {
        navigate('/signup');
    }

  return (
    <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1>🔐 Login 🔐</h1>

            <div className={styles.inputContainer}>
                <EmailIcon className={styles.icon} />

                <input 
                    type="email" 
                    placeholder="Enter Email..." 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className={styles.inputContainer}>
                <LockIcon className={styles.icon} />

                <input 
                    type={!showPassword ? ("password") : ("text")}
                    placeholder="Enter Password.." 
                    className={styles.passwordInput} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                { showPassword ? (
                    <VisibilityOffIcon 
                        className={styles.icon} 
                        onClick={() => setShowPassword(!showPassword)} 
                    />) : (
                    <RemoveRedEyeIcon 
                        className={styles.icon} 
                        onClick={() => setShowPassword(!showPassword)}
                    />
                )}
            </div>
            {showPasswordMessage && (
                <p className={styles.errorMessage}>Password is too Short!</p>
            )}

            <button className={styles.loginButton} type="submit">Login</button>
            <p onClick={notHaveAccount}>You Don't have Account</p>
        </form>
    </>
  )
}