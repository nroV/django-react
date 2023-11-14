import React ,{useEffect, useRef }from 'react'
import styles from './Search.module.css'
export default function CustomSearch({placeholder,width,my = 5,
  
  
  handleserach,setSearch,search}) {


  const searchinput = useRef(null)

  console.log(search)

  useEffect(()=>{
    searchinput.current.focus()



  },[])
  return (
    <input type="text" 
    ref={searchinput}

    value={search}
    onChange={(e)=>handleserach(e)}
    className={`form form-control w-100 ${styles.bgcolor}
    
    my-${my}`}
    style={{
         marginRight:20,
         width:width
        
        }} placeholder={placeholder} />
  )
}
