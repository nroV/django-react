import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import CardTemplate from "./CardTemplate";
export default function ProductSection(
  {md=3,lg=3,products,ismid = false ,iserror,length,isloading}) {

 
  const pro = products
  // console.log(pro.length)
  return (
    <div className="container">
      <div className="row justify-content-center g-5">

      {
          length <= 0  && <>
          
              <center>
              <p>Sorry we couldn't find any related product</p>
              </center>
          </>

      }

      {

        isloading && 


          <>
          
                  
    <RotatingLines
    strokeColor="#4fa94d"
    strokeWidth="5"
    animationDuration="0.75"
    color="#4fa94d"
    width="96"
    visible={true}
    />
          </>
      }

      {


        products.map((product)=> (

          <CardTemplate lg={3} product = {product} ismid = {false} />
        ))
      }
     

    
      </div>
    </div>
  );
}
