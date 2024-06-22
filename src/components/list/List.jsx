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
        <h3 className={`${styles.iteam} ${(isChecked) ? styles.comp : ''}`}>{task}</h3>
        <div className={styles.timeAndCheckBox}>
          <h4>{currentTime}</h4>
          <input type='checkbox' style={{transform: "scale(1.5)"}}  onClick={(e)=>setIsChecked(e.target.checked)}/>
          <DeleteForeverIcon style={{marginTop: "0.5em"}} onClick={()=>deleteIteam(task)} />
        </div>
      </div>
    </>
  )
}
