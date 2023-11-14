import React, { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import ProductSection from './ProductSection'
import CustomSearch from './CustomSearch'
export default function MainSection({pt,isloading,products,iserror,handleserach,
  setSearch,search,sortchange}) {

  const length = products.length
  
  if(isloading === true) {
    return       <div className={`col-lg-9 d-flex justify-content-center`}>
    
    
    <RotatingLines
    strokeColor="#4fa94d"
    strokeWidth="5"
    animationDuration="0.75"
    color="#4fa94d"
    width="96"
    visible={true}
    />
    </div>
  }



  return (
    <div className={`col-lg-${pt}`}>
      <div className="card border-0 my-5">
        <top className="d-flex justify-content-between">
        <h3>All Products</h3>
         
         <left>
             <p>Showing  {length} products</p>
            <div className="">
            <select
              onChange={(e)=>sortchange(e)}
              class=""
              aria-label=".form-select-sm example"
              style={{ 
               padding:'5px',
               border:'0.25px solid grey',
               backgroundColor:"white",
       
               color:'black'
               }}
            >
              <option selected
              
              
              >Sort By</option>
              <option value="name">Product Name A-z</option>
              <option value="-name">Product Name Z-a</option>
    
            </select>

     
          </div> 
         </left>
        </top>
        <CustomSearch my ={3} placeholder ={'Search product title...'}
        setSearch = {setSearch}

        search={search}
        handleserach = {handleserach} />

        <main className='my-5'>
             <ProductSection md= {1} lg ={4}

             length = {length}
             
             products = {products} 
             isloading = {isloading}
             
             iserror = {iserror}
             />
        </main>
  

      </div>
      
 
      </div>
  )
}
