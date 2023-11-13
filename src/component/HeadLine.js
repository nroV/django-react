import React from 'react'
import { Link } from 'react-router-dom'

export default function ({title,subtitle,endtitle}) {
  return (
    <>
    
    <div style={{ 
        width:"100%",
        height:"150px",
        backgroundColor:"black"
     }}>

        <h1 className="text-center text-white py-5 text-uppercase">
       {title}

        </h1>


    </div>
      <div className="container my-5">
        <header className="d-flex justify-content-between">
          <h4>{subtitle}</h4>

          <Link className='nav-link' to={'product'}>
          
          <span>{endtitle}</span></Link>

          {/* <div className="">
            <select
              class=""
              aria-label=".form-select-sm example"
              style={{ 
               padding:'5px',
               border:'0px solid white',
               backgroundColor:"black",
               borderRadius:'8px',
               color:'white'
               }}
            >
              <option selected >Sort By </option>
              <option value="1">Name Asc</option>
              <option value="2">Name Desc</option>
    
            </select>
          </div> */}
        </header>
      </div>
    </>
  )
}
