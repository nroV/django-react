import React, { useEffect, useRef, useState } from 'react'
import LeftBar from '../component/LeftBar'
import MainSection from '../component/MainSection'
import { fetchproduct } from '../service/action/Product'
import { Mainurl } from '../service/constants/ApiUrl'
import { useProduct } from '../customhook/useProduct'
import { useParams } from 'react-router-dom'
let allproducts = []
export default function ProductPart({categories}) {

const [sortby,setSort] = useState()
const [search,setSearch]= useState("")

const  {products,isloading,iserror } = useProduct({search:search,sortby:sortby})


let { id } = useParams(); // Access the value of 'id' from the URL


allproducts = [...products]


let filteredProducts = []
if(id) {
  console.log(id)

  filteredProducts = allproducts.filter(product => product.category_id.id.toString() === id);

}
else {
  filteredProducts = [...allproducts]
}

useEffect(()=>{

    setSearch("")

},[id])


function handleserach(e) {
  e.preventDefault()

  setSearch(e.target.value)
  
}
function sortchange(e) {
  e.preventDefault()
  setSort(e.target.value)


 
  
}


if(iserror === true ) {
  return   (
    <div className={`container d-flex justify-content-center direction-row`}>

    <p className="lead text-center my-5">
      Server has been broken down or client site error...
    </p>

     {/* <img src="Animation - 1699848386529.gif"
     
     alt="img-lotties"
     
     srcset=""
     style={{ 
      minWidth:"50px",
      minHeight:'200px',
      objectFit:"cover"
      }}
     
     
     /> */}

</div>
  ) 
  }
  return (
    <main className='container'>
 
        <div className="row justify-content-center">
         
            <LeftBar pt= {3} 
            
            categories = {categories} setSearch = {setSearch} 
            search = {search}
            
            />
      
        

         

                <MainSection pt= {9} 
                isloading = {isloading }
                handleserach = {handleserach}
                 products = {filteredProducts} 
                 iserror = {iserror}
                 sortchange ={sortchange}
                 search = {search}
                 setSearch = {setSearch}
                />


         
           
     
    
         
        </div>

 

          

    </main>
  )
}
