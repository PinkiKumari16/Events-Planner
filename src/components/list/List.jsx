import React, { useEffect, useState } from 'react'
import styles from './List.module.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const List = ({task, currentTime, deleteIteam}) => {
  const [isChecked,setIsChecked] = useState(false)
  
  return (
    <>
      <div className={styles.listBox}>
        <FiberManualRecordIcon className={styles.dotIcon}/>
        <h3 className={`${styles.iteam} ${(isChecked) ? styles.done : ''}`}>{task}</h3>
        <div className={styles.timeAndCheckBox}>
          <h4>{currentTime}</h4>
          <input type='checkbox' onClick={(e)=>setIsChecked(e.target.checked)} className={styles.checkBox} />
          <DeleteForeverIcon onClick={()=>deleteIteam(task)} className={styles.deleteIcon}/>
        </div>
      </div>
    </>
  )
}
