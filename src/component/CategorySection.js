import React from "react";
import HeadLine from "./HeadLine";
export default function ({categories}) {

  return (
    <div>
      <HeadLine title={"Shop By Category"} subtitle={""} endtitle={""} />
      <main className="container">

    
        <div className="row">
       
          {

            isloading &&

                  
            <RotatingLines
            strokeColor="#4fa94d"
            strokeWidth="5"
            animationDuration="0.75"
            color="#4fa94d"
            width="16"
            visible={true}
            />


            }

 {

  !isloading &&


  <div className="row">
        {
            categories.map((category)=>

      // let image = category.image_id.files      
            (
              <div className="col-lg-4">
              <img
                src={category.image_id.files   }
                alt=""
                className="img-fluid w-100"
                style={{ 
                  maxHeight:'400px',
                  objectFit:'cover'
                 }}
              />
              
              <h4 className="text-center py-4">{category.categoryname}</h4>
              </div>
            )
)
                }
        </div>
}
    </div>


)