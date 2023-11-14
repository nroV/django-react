import React from 'react'

export default function ErrorAuth({message}) {
  return (
    <div
              className='w-100 mb-3 p-1'

                        
                        style={{ 
                          backgroundColor:"#FCC8D1",
                          color:"#DC0000",
                          width:"max-content"
                   
                         }}
                         
                         
                         >
                                    {message}
                        </div>
  )
}
