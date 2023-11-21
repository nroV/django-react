import React, {useEffect,useState} from "react";
import HeadLine from "./HeadLine";
import { RotatingLines } from "react-loader-spinner";
import { useCategory } from "../customhook/useCategory";
import { CategoryUrl, CategoryUrlCreate } from "../service/constants/ApiUrl";
import {fetccate} from "../service/action/Category"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
export default function () {

  // const {categories,isloading,iserror} = useCategory()

  const [categories,setCategory] = useState([])
  // const len = products.length
  let url 
  const [isloading,setLoading]= useState(true)
  const [iserror,setError]= useState(false)


  const [ishover,sethover]= useState(false)
      useEffect(()=>{
          async function fetchCate() {
            setLoading(true)
       
  
  
            console.log(url)
            try {
              const res = await fetccate(`${CategoryUrl}`);
              if (!res.ok) {
                throw new Error(`There has been server error`);
              }
              const body = await res.json();
              console.log('Response Body:', body); // Log the response body to check its structure
              setCategory(body);
              
            } catch (error) {
              console.error('Error fetching data:', error);
              setError(true)
              // Handle error or set a default value for product
            } finally {
           
              setLoading(false)
            }
          }
          
            
          fetchCate()
   
          },[])

  console.log(categories)

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
                    <CategoryCard category = {category}  key={category.id}
                  
                    
                    
                    />
                  )
          )
        }
    
     </div>


 }
        </div>
      </main>
    </div>
  );
}

function CategoryCard({category}){
  const [ishover,setHover] = useState(false)

  return (
    <div className="col-lg-4 mb-5" 

    onMouseOver={ ()=>setHover(true)}
    onMouseLeave = {()=>setHover(prev=>!prev)}
             
    >


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
  <section className={`d-row ${ishover == false ?'d-none' : 'd-flex'}`}>

    <Link className="nav-link bg-dark mx-3 text-white p-2" to={`form/category/${category.id}`}>Modify</Link>
      <Link className="nav-link bg-success mx-3 text-white  p-2 " to={
      'form/category'
    } >Create</Link>

    </section>
  </div>
  )
}
