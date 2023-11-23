
import React, { useEffect } from 'react'
import { useState,} from 'react'
import { CREATE_ALLPRODUCTS } from '../service/productService'
import { FILE_UPLOAD } from '../service/fileService'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios, { Axios } from 'axios'
import { CategoryUrl, UploadImage, updateproduct, updateproducturl } from '../service/constants/ApiUrl'
import { CreateProduct } from '../service/constants/ApiUrl'
import { useNavigate } from 'react-router'
import { useProduct } from '../customhook/useProduct'
import { useParams } from 'react-router-dom'
import { fetccate } from '../service/action/Category'

const NewProducts = ({setChange}) => {
    const [category_id,setCategory_id] = useState()
    const [name,setName] = useState("")
    const [stockqty, setStockqty] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [images,setImage] = useState([])
    const [preview,setPreview]= useState([])
    const [img,setImg] =useState("")
    const [selectedImages,setSelectedImages]=useState("")
    const [uploadimg,setUploadImg] = useState()

    const [categories,setCategories] = useState([])
  const[loading,setLoading]= useState(false)
  const  [iscreate,setCreate] = useState()

  const  {products,isloading,iserror } =  useProduct({search:'',sortby:null,action:iscreate})    

  const [isloadingcate,setLoadingcate]= useState(true)
  const [iserrorcate,setcateError]= useState(false)
  const[product,setProduct]= useState([])
   

console.log("Render again")
  const navigate = useNavigate()
  const {id} = useParams()

    let newProducts={

        name:name,
        stockqty:stockqty,
        price:price,
        description:description,
        category_id: category_id,
        image_id:images
    }


    const handleCreateProduct = (e) =>{

      e.preventDefault()
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token ${localStorage.getItem('token')}` ,
   

        },
        body: JSON.stringify(newProducts)
      };
      fetch(CreateProduct,requestOptions)
      .then(response=>{
        if(!localStorage.getItem('token')) {
          throw new Error("Please Sign in or login first")
        }

        console.log(response)
        if(response.ok) {
  
          return response.json()
        }
        else {
          throw new Error("Invalid token")
        }



      })
      .then(res => {
        setChange("Create")

        console.log(res)
  

      
 
        return res 
      } )
      .catch(err=>alert("Please sign up or register"))
      .finally(()=>{
        navigate("/")
   
      })
   

    }



    const handleImgChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        if(event.target.files && event.target.files[0]){
          let formdata = new FormData()  
          if(!localStorage.getItem('token')) {
            throw new Error("Please Sign in or login first")
          }
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
              console.log(res)
              setImage(prev=>[...prev,res.id])
              setPreview(prev=>[...prev,res.files])
              // setPayLoad(prev=>{
              //   return {
              //    ...prev,
              //   image_id:res.id,
              //   }
              // })
              return res
            }
          )
          .catch(err=>console.error(err))
        }
    }
  }
  useEffect(()=>{
    if(id){
      fetch(`http://vorn.ponlue.bio:5046/api/product/${id}`)
      .then(response=>response.json())
      .then(res=>{

        const imgid = res.image_id.map((img)=>img.id)
        setProduct(res)
        setImage(imgid)
 setCategory_id(res.category_id.id)
        setName(res.name)
        setStockqty(res.stockqty)
        setPrice (res.price)
        setDescription(res.description)

          return res

      })
      .catch(err=>console.log("Error: ",err))
      .finally(()=>{
        setLoading(false)
      })
    }
    async function fetchCate() {
      setLoadingcate(true)
 


 
      try {
        const res = await fetccate(`${CategoryUrl}`);
        if (!res.ok) {
          throw new Error(`There has been server error`);
        }
        const body = await res.json();
        console.log('Response Body:', body); // Log the response body to check its structure
        setCategories(body)
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setcateError(true)
        // Handle error or set a default value for product
      } finally {
     
        setLoadingcate(false)
      }
    }
    
      
    fetchCate()
  },[])
    const onupdate =()=>{
  
  
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token ${localStorage.getItem('token')}` ,
   

        },
        body: JSON.stringify(newProducts)
      };
      fetch(updateproducturl+id,requestOptions)
      .then(response=>{
        if(!localStorage.getItem('token')) {
          throw new Error("Please Sign in or login first")
        }
        setChange(response.body)
        console.log(response)
        if(response.ok) {
  
          return response.json()
        }
        else {
          throw new Error("Wrong information")
        }
   



      })
      .then(res => {


        console.log(res)
  

      
 
        return res 
      } )
      .catch(err=>console.log(err))
      .finally(()=>{
        navigate("/")
   
      })
   


    }
    const handleClear = () =>{
      setImage("")
      setCategory_id("")
      setName("")
      setStockqty("")
      setPrice("")
      setDescription("")
    }

    console.log("new product",newProducts)
    console.log(categories)
  let buttonStatus = name && stockqty && price && category_id && description && images ? false :true

  return (
    <div className="container ">
      <div className="row  bg-light rounded-4  p-4 " style={{ marginTop:50 }}> 
          <div className="col-lg-6 col-xs-12">
            <div className="image-side  d-flex align-items-center flex-column">
              <img src={img ? img : "https://sxprotection.com.au/wp-content/uploads/2016/07/team-placeholder.png"} alt="imageurl" className='object-fit-contain img-fluid' width='350px' />
              <input type="file" className='form-control mt-3 w-50' onChange={handleImgChange} />
            </div>
            {

              preview &&  
                <div className="image-side d-flex align-items-center flex-column">
              {/* <img src={`${img}`} alt="imageurl" className='object-fit-contain img-fluid  rounded-3' width='350px' /> */}
              <div className="ImgCard">
                {
                  preview.map((url,id)=>
                    <div className="image">
                        <img src={`${url}`} alt="" />
                    </div>
                  )
                }
              </div>
            </div>
            }
         
          </div>
          <div className="col-lg-6 col-xs-12">
            <div className="input-side">
              <h1 className='mt-4 mb-5 text-center'>
             {
                !price && 'Create new product'
             }
             {
              price && 'Update product'
             }
             
                
                
                </h1>
              <div className="d-flex">
                  <div className='w-50'>
                    <label htmlFor="">Name:</label>
                    <input className='form-control'
                    value={name}
                    
                    type="text"
                
                     placeholder='Product name' name='' id=''  onChange={(e)=>setName(e.target.value)}/>
                  </div>
                  <div className='ms-4 w-50'>
                    <label htmlFor="">CategoryID:</label>
                    {/* <input className='form-control' type="text" placeholder='id' name='' id=''  onChange={(e)=>setCategory_id(e.target.value)}/> */}

                    {
             
                          id &&
                          (
                            !isloadingcate &&        
                             
                               <select
                                class="form-select" aria-label="Default select example" onChange={(e)=>setCategory_id(e.target.value)}>
                            {
                      
                                <>
                                {
                                  categories.map((cate)=>       
                                   <option value={cate.id}>{cate.categoryname}</option>)
                                }
                        
           
                                </>
                            
                            }
                    </select>
                          )
                          
                          
        
        
              


                    }
                    {
                      !id && 
                      <select class="form-select" aria-label="Default select example" onChange={(e)=>setCategory_id(e.target.value)}>
<option value="1">Accessories</option>
<option value="2">Men</option>
<option selected value="3">Women</option>
<option value="3">Shoes</option>
</select>
                    }
                 
                  </div>
              </div>
              
              <div className="d-flex mt-4">
                <div className='w-50'>
                  <label htmlFor="">Stock:</label>
                  <input className='form-control'
                              value={stockqty}
                  
                  type="text" placeholder='Stock' name='' id=''  onChange={(e)=>setStockqty(e.target.value)}/>
                </div>
                <div className='ms-4 w-50'>
                  <label htmlFor="">Price:</label>
                  <input className='form-control'
               
                  
                  type="text"
                  value={price}
                  placeholder='price' name='' id='' onChange={(e)=>setPrice(e.target.value)} />
                </div>
              </div>
              
              <label htmlFor="" className='mt-4'>Description:</label>
              <input type="text"
                     value={description}
              className='form-control' placeholder='description'  onChange={(e)=>setDescription(e.target.value)}/>

              <div className="AllButton d-flex justify-content-center mt-5">
              {
                id && 

                    <button className="btn btn-warning " 
                
              disabled={buttonStatus} 
              onClick={onupdate}
              
              
              >
                
         update
        
                
                </button>
             }
             {
              !id &&    
              <button className="btn btn-warning " 
                
              disabled={buttonStatus} 
              onClick={handleCreateProduct}
              
              
              >
                
         Create
        
                
                </button>
             }
           
           
                <button className="btn btn-danger ms-5 "
                
                onClick={handleClear}>Clear</button>
              </div>
              <ToastContainer/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewProducts