import React, { useEffect, useState } from "react";
import styles from "../component/ProductSection.module.css"
export default function CardTemplate({lg,product,ismid = false }) {
    const [ishover,setHover] = useState(false)
    const {description,image_id,  name,price,stockqty} = product
    const [images,setImage] = useState([])
    const [index,setIndex] = useState(0)

    const {categoryname} = product.category_id
 

   

    useEffect(()=>{
        setImage(image_id)
 
    },[product])
    // when product change i want my image to do so 
 


    const img = {
        ...images[1]
    }



  return (
    <>
        <div className={`col-12 col-lg-${lg}`}>


          <card
            className={`card`}
            style={{
              maxWidth: "380px",
              border: "none",
              border: "2px solid #f7f7f8",
            }}
          >

            <card className='header'>

        
                <img
                onMouseOver={ ()=>setHover(true)}
                onMouseLeave = {()=>setHover(prev=>!prev)}
                className={`${styles.cardflip} ${
                    
                   ishover && styles.nothovercard}`}
                src={img.files}
        
                alt=""
                
              />
              <box 
              
              
              className={`${
               ishover === true ? styles.inner : styles.notinner
                
                
                
                }`}

                style ={{ 

                  width: "100%",  
                  padding:'0px 10px'
                 }}

                
                
                >
                        <button
                           onMouseOver={ ()=>setHover(true)}
                           onMouseLeave = {()=>setHover(prev=>!prev)}
                        className="btn btn-outline-dark w-100" style={{ 
                                color:'white',
                                fontWeight:'normal',
                                borderRadius:'0px',
                                fontSize:'12px',    
                                borderColor:'white',
                                width:'1000px'
                                
                         }}> View Detail</button>

              </box>
           
           
            </card>

            <card className="card-body">
              <h5>{name}</h5>
              <p className="lead">{categoryname}</p>
              <h3
                style={{
                  backgroundColor: "#1A5D1A",
                  width: "fit-content",
                  color: "white",
                  padding: "5px 10px",
                }}
              >
                $ {price}
              </h3>
            </card>
          </card>
        </div>
    </>

  )
}
