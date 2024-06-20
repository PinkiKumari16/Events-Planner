import React, { useState } from 'react'
import styles from "./SignUp.module.css"
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';


export const SignUp = () => {
    const navigateToLogin = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordMessage, setShowPasswordMessage] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(password !== confirmPassword){
            setShowPasswordMessage(true);
            setError("Password & Confirm Password Must be Same")
        }else{
            if(password.length < 6){
                setShowPasswordMessage(true);
                setError("Password Must be 6 Digits")
            }else{
                let capitalCharError = "Must be have 1 Capital letter";
                let numerDigitError = "Must be have 1 Number letter";
                let specialCharError = "Must be have 1 Special letter";
                let smallCharError = "Must be have 1 Small letter";

                const specialCharErrorectors = ["!","@","#","$","%","&","*"];
                for (const digit of password){
                    if(digit >= "0" && digit <= "9"){
                        numerDigitError = true

                    }else if(digit >= "A" && digit <= "Z"){
                        capitalCharError = true;

                    }else if(digit >= "a" && digit <= "z"){
                        smallCharError = true;

                    }else if(specialCharErrorectors.includes(digit)){
                        specialCharError = true;
                    }
                }
                if(capitalCharError !== true){
                    setShowPasswordMessage(true);
                    setError(capitalCharError)

                }else if(numerDigitError !== true){
                    setShowPasswordMessage(true);
                    setError(numerDigitError)

                }else if(specialCharError !== true){
                    setShowPasswordMessage(true);
                    setError(specialCharError)

                }else if(smallCharError !== true){
                    setShowPasswordMessage(true);
                    setError(smallCharError)

                }else{
                    setError("")
                    console.log(email,password,confirmPassword)
                    setEmail("")
                    setPassword("")
                    setConfirmPassword("")
                    setTimeout(
                        ()=>{alert("Sign Up Successfully...")}
                        ,500
                    )
                }
            }
        }
    }
    const haveAccount = () =>{
        navigateToLogin('/login')
    }
  return (
    <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Sign Up 🔐</h1>
            <div className={styles.inputContainer}>
                <EmailIcon className={styles.icon}/>
                <TextField 
                    id="standard-basic1" 
                    type="text"
                    label="Email" 
                    variant="standard" 
                    value={email}
                    className={styles.inputBox} 
                    onChange={(e)=> setEmail(e.target.value)} 
                    required
                />
            </div>

            <div className={styles.inputContainer}>
                <LockIcon className={styles.icon}/>
                <TextField 
                    id="standard-basic2" 
                    type={showPassword ? "text" : "password"}
                    label="Password" 
                    variant="standard" 
                    value={password}
                    className={styles.inputBox} 
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                />

                {!showPassword ? (
                    <RemoveRedEyeIcon 
                        className={styles.icon} 
                        onClick={() => setShowPassword(!showPassword)}/>
                ) : (
                    <VisibilityOffIcon 
                        className={styles.icon} 
                        onClick={() => setShowPassword(!showPassword)} 
                    />
                )} 
            </div>

            <div className={styles.inputContainer}>
                <LockIcon className={styles.icon}/>
                <TextField 
                    id="standard-basic3" 
                    type="password" 
                    label="Confirm Password" 
                    variant="standard" 
                    value={confirmPassword}
                    className={styles.inputBox} 
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                    required
                />                
            </div>
            {showPasswordMessage && (
                <p className={styles.errorMessage}>{error}</p>
            )}

            <button  
                className={styles.loginButton} 
                type="submit">Submit
            </button>
            <p onClick={haveAccount}>You have already Account</p>
        </form>
    </>
  )
}