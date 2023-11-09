
import React from 'react'
import { useState,} from 'react'
import { CREATE_ALLPRODUCTS } from '../service/productService'
import { FILE_UPLOAD } from '../service/fileService'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const NewProducts = () => {
    const [categoryid,setID] = useState("")
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [images,setImage] = useState("")
    const [img,setImg] =useState("")
    const [selectedImages,setSelectedImages]=useState("")

    let newProducts={
        // 'id':categoryid,
        'title':title,
        'price':price,
        'description':description,
        "categoryId": categoryid,
        "images":[
          
        ]
    }

    const handleCreateProduct = () =>{
      if(selectedImages){
        const data = new FormData();
        data.append("file",selectedImages);      

        // upload image
        FILE_UPLOAD(data)
        .then((response)=>{
          console.log("res:",response)
          setImage(response.location)
          // newProducts.img=response.location
          newProducts.images[0]=response.location
    
          CREATE_ALLPRODUCTS(newProducts)
          .then((response)=>console.log(response))
          .catch((error)=>console.log("error: ",error))
          
        })
        .catch((err)=>console.log("error",err)) 
      } else {
        newProducts.images=["https://sxprotection.com.au/wp-content/uploads/2016/07/team-placeholder.png"]
        CREATE_ALLPRODUCTS(newProducts)
            .then((response)=>{
              console.log(response)
              toast("create successful");
            })
            .catch((error)=>{
              console.log("error:",error)
              toast(error.response.data.message[0])
            })
      }

      // CREATE_ALLPRODUCTS(newProducts)
      // .then((response)=>console.log(response))
      // .catch((error)=>console.log("error: ",error))
    }

    const handleImgChange = (event) =>{
      if(event.target.files && event.target.files[0]){
        setImg(URL.createObjectURL(event.target.files[0]))
        setSelectedImages(event.target.files[0])
      }
    }

    const handleClear = () =>{
      setImage("")
      setID("")
      setTitle("")
      setPrice("")
      setDescription("")
    }

    console.log("new product",newProducts)
 

  return (
    <div className="container ">
      <div className="row  bg-light rounded-4  p-4 " style={{ marginTop:100 }}> 
          <div className="col-lg-6 col-xs-12">
            <div className="image-side  d-flex align-items-center flex-column">
              <img src={img ? img : "https://sxprotection.com.au/wp-content/uploads/2016/07/team-placeholder.png"} alt="imageurl" className='object-fit-contain img-fluid' width='350px' />
              <input type="file" className='form-control mt-3 w-50' onChange={handleImgChange} />
            </div>
          </div>
          <div className="col-lg-6 col-xs-12">
            <div className="input-side">
              <h1 className='mt-4 mb-5 text-center'>Create New Products</h1>
              <div className="d-flex ">
              <div>
                  <label htmlFor="">categoryID:</label>
                  <input className='form-control' type="text" placeholder='id' name='' id=''  onChange={(e)=>setID(e.target.value)}/>
                </div>
                <div className='ms-4'>
                  <label htmlFor="">Title:</label>
                  <input className='form-control' type="text" placeholder='title' name='' id=''  onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className='ms-4'>
                  <label htmlFor="">Price:</label>
                  <input className='form-control' type="text" placeholder='price' name='' id='' onChange={(e)=>setPrice(e.target.value)} />
                </div>
              </div>
              <label htmlFor="" className='mt-4'>Description:</label>
              <input type="text" className='form-control' placeholder='description'  onChange={(e)=>setDescription(e.target.value)}/>

              <div className="AllButton d-flex justify-content-center mt-5">
                <button className="btn btn-warning " onClick={handleCreateProduct}>Create Product</button>
                <button className="btn btn-danger ms-5 " onClick={handleClear}>Clear</button>
              </div>
              <ToastContainer/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewProducts