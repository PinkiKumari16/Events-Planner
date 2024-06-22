import React from 'react'
import styles from './SideBar.module.css'
import pinkiImage from '/pinki.jpeg'
import EventIcon from '@mui/icons-material/Event';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import SettingsIcon from '@mui/icons-material/Settings';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export const SideBar = () => {
  return (
    <>
        <div className={styles.sideBar}>
          <div className={styles.dataContainer}>
            <img src={pinkiImage} className={styles.image} />
            <div className={styles.nameBox}>
              <p style={{color: 'var(--black-color)'}}>Do-it</p>
              <strong>Pinki Kumari</strong>
            </div>
          </div>
          <hr className={styles.line} />
          <div className={styles.information}>
            <div className={styles.todaysTask}>
               <EventIcon className={styles.eventIcon} />
               <div className={styles.filterData}>
                  <p style={{color: 'var(--black-color)'}}>Today tasks</p>
                  <p className={styles.filter}><FiberManualRecordIcon className={styles.dotIcon}/> <span className={styles.iteams}>Perssonal</span></p>
                  <p className={styles.filter}><FiberManualRecordIcon className={styles.dotIcon}/> <span className={styles.iteams}>FreeLance</span></p>
                  <p className={styles.filter}><FiberManualRecordIcon className={styles.dotIcon}/> <span className={styles.iteams}>Work</span></p>
                  <p className={styles.filter}><FiberManualRecordIcon className={styles.dotIcon}/> <span className={styles.iteams}>Add filter</span></p>
                </div>
            </div>
            <div className={styles.todaysTask}>
              <EventRepeatIcon className={styles.eventIcon}/>
              <p style={{marginLeft:'1.5em', color: 'var(--black-color)'}}>Scheduled tasks</p>
            </div>
            <div className={styles.todaysTask}>
              <SettingsIcon className={styles.eventIcon}/>
              <p style={{marginLeft:'1.5em', color: 'var(--black-color)'}}>Settings</p>
            </div>
          </div>
        </div>
    </>
  )
}
