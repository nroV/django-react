import React from "react";
import HeadLine from "./HeadLine";
import ProductSection from "./ProductSection";
import { useProduct } from "../customhook/useProduct";
export default function ({products}) {
  let islength = products.length

  return (
    <section style={{ 
      marginBottom:"200px"
     }}>
      {

        islength && 
        <>
        
            <HeadLine title = {'New Arrivals'} subtitle= {'Latest Product'} />
             <ProductSection md= {1} lg ={4} products = {products} 
             
             ismid = {true}
             />
        </>
      }
  
        
        
             
    </section>
  );
}
