import React from 'react'
import styles from './List.module.css'

export const List = ({task, currentTime}) => {
  console.log(task, currentTime)
  return (
    <>
      <div className={styles.listBox}>
        <h3 className={styles.iteam}>{task}</h3>
        <div className={styles.timeAndCheckBox}>
          <h4>{currentTime}</h4>
          <input type='checkbox'/>
        </div>
        
        
      </div>
    </>
  )
}
