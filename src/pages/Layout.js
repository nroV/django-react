import React from 'react'

import { RotatingLines } from 'react-loader-spinner'
export default function 

({children,isloading}) {


  return (



    <div>


        {
          isloading && <section className='container d-flex justify-content-center'>

             
     <RotatingLines
    strokeColor="#4fa94d"
    strokeWidth="5"
    animationDuration="0.75"
    color="#4fa94d"
    width="36"
    visible={true}
    />
          </section>
        }

        {
            !isloading && <>
          
          {children}
            </>
        }

  

     

    </div>
  )
}
