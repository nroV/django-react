import React from 'react'
import styles from './Search.module.css'
export default function CustomSearch({placeholder,width}) {
  return (
    <input type="text" className={`form form-control ${styles.bgcolor}`}
    style={{
         marginRight:20,
         width:width
        
        }} placeholder={placeholder} />
  )
}
