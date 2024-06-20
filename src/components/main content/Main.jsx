import React from 'react'
import styles from './Main.module.css'
import { useState } from 'react'
import {List} from '../list/List'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export const Main = () => {
    let [text, setText] = useState('');
    let [workList, setWorkList] = useState([]);
    // let [currDate, setCurrDate] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault()

        let date = new Date();
        let hour = date.getHours();
        let mintues = date.getMinutes();
        let timeZon = (hour>=12)? `PM` : `AM`;
        let currentTime = `${hour}:${mintues} `+timeZon;
        // setWorkList([text, ...workList])

        setWorkList([{currentTime:currentTime, text:text}, ...workList])

        setText('')
    }
  return (
    <>
        <div className={styles.mainContent}>
            <h2>Today main focus</h2>
            <h1 style={{color: 'var(--white-color)'}}> Design team metting</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputBox}>
                    <input 
                        className={styles.input}
                        placeholder='What is you next task?'
                        type='text'
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    />
                    <div className={styles.inputIcon}>
                        <AccessTimeIcon />
                        <CalendarTodayIcon />
                    </div>
                </div>
            </form>
            <div className={styles.listContener}>
                {workList.map((data)=><List task={data.text}  currentTime={data.currentTime} id={data.currentTime}/>)}
            </div>

        </div>
    </>
  )
}


