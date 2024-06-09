import React from 'react'
import styles from './BodyBox.module.css'
import {SideBar} from '../side bar/SideBar'
import {Main} from '../main content/Main'

export const BodyBox = () => {
  return (
    <>
        <div className={styles.mainBox}>
            <SideBar />
            <Main />
        </div>
    </>
  )
}
