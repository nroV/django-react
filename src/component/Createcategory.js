import React, { useEffect } from 'react'

import { useState,} from 'react'
import { CREATE_ALLPRODUCTS } from '../service/productService'
import { Link, useParams } from 'react-router-dom'
import { FILE_UPLOAD } from '../service/fileService'
import { ToastContainer,toast } from 'react-toastify'
import { CategoryUrl, CategoryUrlCreate ,UploadImage} from '../service/constants/ApiUrl'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
export default function Createcategory() {
    const [title,setTitle] = useState("")
    const [img,setImg] =useState()
    const [imgapi,setImageApi] =useState()
    const [selectedImages,setSelectedImages]=useState("")
    const [payload,setPayLoad]=useState({
        categoryname:"",
        image_id:""
    })
    const navigate = useNavigate();
    const {id} = useParams()
    const handleClear = () =>{
        setImg(
            ""
        )
        setTitle("")

      }
      const handleImgChange = (event) =>{
        if(event.target.files && event.target.files[0]){
          let formdata = new FormData()  
          formdata.append("files", event.target.files[0]);
          setImg(URL.createObjectURL(event.target.files[0]))
          console.log(localStorage.getItem('token'))
    

  
          const requestOptions = {
            method: 'POST',
            headers: {
              'Authorization':`Token ${localStorage.getItem('token')}`,
           

      
                   
            },
            body: formdata
          };
          fetch(UploadImage,requestOptions)
          .then(response=>response.json())
          .then(res => 
            {
              setImageApi(res)
            
              setPayLoad(prev=>{
                return {
                 ...prev,
                image_id:res.id,

                }
              
              })
              return res
            }
      
         
          )
          .catch(err=>console.error(err))
        }

      }

      const usenavigate = useNavigate()
 
      const ondelete = (id )=>{
        console.log(id)

       let answer = window.confirm("Press a button!\nEither OK or Cancel.");

       if(!answer) {
        return 
       }
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Token ${localStorage.getItem('token')}` ,
    
      
          }
    
        }
        fetch(`${CategoryUrl}/${id}`,requestOptions)
        .then(response=>{
          if(!response.ok) {
            alert("Please Sign Up or Login first to get token")
            return
          }
          else {
            usenavigate("/")
            return response.json()
          }

  
        })
        .then(res => {
    
          console.log(res)
          return res
      
        })
        .catch(err=>console.error(err))
      
      }

      function createcategory(e) {
        e.preventDefault()
        console.log(payload)
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Token ${localStorage.getItem('token')}` ,
     

          },
          body: JSON.stringify(payload)
        };
        fetch(CategoryUrlCreate,requestOptions)
        .then(response=>{
          if(!response.ok) {
            alert("Please Sign Up or Login first to get token")
            return
          }
          else {
            return response.json()
          }



        })
        .then(res => {
          console.log(res)
          if(res.detail){
           
          }
          else {
            navigate("/")
          }
   
          return res 
        } )
        .catch(err=>console.error(err))
      }

      function updatecategory(e) {
        e.preventDefault()
        console.log(payload)
        const requestOptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization':`Token ${localStorage.getItem('token')}` ,
     

          },
          body: JSON.stringify(payload)
        };
        fetch(`${CategoryUrl}/${id}`,requestOptions)
        .then(response=>{

          if(!response.ok) {
            alert("Please Sign Up or Login first to get token")
            return
          }
          else {
  
            return response.json()
          }      
        })
        .then(res => {
          console.log(res)
          if(!res.detail) {
            navigate("/")
          }
   
          return res 
        } )
        .catch(err=>console.error(err))
      }
      
      // console.log("Response image  ")
      // console.log(imgapi)
      console.log(payload)

      useEffect(()=>{
        console.log("Find id ",id)

        if(id != null) {
          console.log("Find id ",id)
     
          fetch(`${CategoryUrl}/${id}`)
          .then(response=>response.json())
          .then(res => {
            console.log(res)
            setPayLoad(
              prev=>{
             return {...prev,
                categoryname:res.categoryname,
                image_id:res.image_id
              }
            }
            )
            setTitle(res.categoryname)
            setImg(res.image_id.files)

            return res 
          } )
          .catch(err=>console.error(err))
        }

      },[])
    return (
        <div className="container ">
          <form onSubmit={(e)=>createcategory(e)}>
          <div className="row  bg-light rounded-4  p-4 " style={{ marginTop:100 }}> 
              <div className="col-lg-6 col-xs-12">
                <div className="image-side  d-flex align-items-center flex-column">
                  <img src={img == null ? "https://sxprotection.com.au/wp-content/uploads/2016/07/team-placeholder.png" : img} alt="imageurl" className='object-fit-contain img-fluid' width='350px' />
                  <input type="file" className='form-control mt-3 w-50' onChange={handleImgChange} />
                </div>
              </div>
              <div className="col-lg-6 col-xs-12">
                <div className="input-side">
                  {
                    id &&           <>
                    <div className='d-flex'>


                    <Link className="nav-link bg-success mx-3 text-white p-2 text-center" 
    
    onClick={(e)=>updatecategory(e)}
    >Update</Link>
      <Link className="nav-link bg-danger mx-3 text-white p-2 text-center " 
    
    onClick={()=>ondelete(id)}
    >Delete</Link>
                    </div>
                     
                    
                    
                    </>
                  }
    
                  <h1 className='mt-4 mb-5 text-center'>Create New Category</h1>
                  <div className="d-flex ">
             
                    <div className='ms-4'>
                      <label htmlFor="">Category Title:</label>
                      <input className='form-control' type="text" 
                      value={title}
                      
                      placeholder='title' name='categoryname' id=''  onChange={(e)=>{
                        setTitle(e.target.value) 
                        const {name,value} = e.target

                        setPayLoad(prev=>{
                          return {
                           ...prev,
                          [name]:value
                          }
                        
                        })
                      }}/>
                    </div>
            
                  </div>

                  {

                    !id && 
                    <>
                    
                    <div className="AllButton d-flex justify-content-center mt-5">
                    <button className="btn btn-warning " type='submit' >Create Category</button>
                    <button className="btn btn-danger ms-5 " onClick={handleClear}>Clear</button>
                  </div>
                    </>
                  }
          
        
                
                  <ToastContainer/>
                </div>
              </div>
          </div>
          </form>
        </div>
      )
}