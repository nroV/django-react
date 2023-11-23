
import React, { useEffect } from 'react'
import { useState,} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {RotatingLines} from 'react-loader-spinner'
import { DeleteProduct } from '../service/constants/ApiUrl'
import { DELETE_PRODUCT } from '../service/productService'

const ViewsProduct = (onUpdate) => {
    const [product,setProduct] = useState({})
    const [image_id,setImages_id] =useState([])
    const {id} = useParams()
    const [selectedIndex,setSelectedIndex] = useState(0)
    const [quantity, setQuantity] =useState(1);
    const [loading, setLoading] = useState(true)
    const [data,setData] = useState([])


    useEffect(()=>{
        fetch(`http://vorn.ponlue.bio:5046/api/product/${id}`)
        .then(response=>response.json())
        .then(res=>{
   
          setProduct(pev=>{
            setImages_id(res.image_id)
                    return res
                  })
                  setLoading(false)

 

        })
        .catch(err=>console.log("Error: ",err))
    },[])


    const handleClick =(index)=>{
      console.log("index",index);
      setSelectedIndex(index)
    }

    const handleDecrement =()=>{
      if(quantity>1){
        setQuantity(prevCount => prevCount -1);
      }
      
    }

    const handleIncrement =()=>{
      setQuantity(prevCount => prevCount+ 1)
    }

    // const {
    //   name,
    //   price
    // }=product

    console.log("pr", product)

    const handleUpdate = () =>{
      onUpdate(product)
    }

    const usenavigate = useNavigate()
    const handleDelete = (id) => {  
      console.log(id)  
      const product ={
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('token')}`
        }
      }
      fetch(`${DeleteProduct}/${id}`, product)
      .then(response => {
        if (response.ok) {
          usenavigate("/")
          return response.json()
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .then(res => console.log("Delete Product:", res))
      .catch(err => console.log("Delete error:", err))      
    }; 

  return (
    <div className="container">
      <div className="wrapper m-3">
        {
          loading ? (
            <div className="d-flex justify-content-center">
              <RotatingLines
              strokeColor="green"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
            </div>
          ) : (
            <div className="row  bg-light rounded-4  p-4 " style={{ marginTop:100 }}>
            <div className="col-lg-6 col-xs-12">

              <div className="image-side d-flex align-items-center flex-column">
                <img src={`http://vorn.ponlue.bio:5046${image_id[selectedIndex].files}`} alt="imageurl" className='object-fit-contain img-fluid  rounded-3' width='350px' />
                <div className="ImgCard">
                  {
                    image_id.map((data,id)=>
                      <div className="image">
                          <img src={`http://vorn.ponlue.bio:5046${product.image_id[id].files}`} onClick={()=>handleClick(id)} alt="" />
                      </div>
                    )
                  }
                </div>
              </div>
            </div>



            <div className="col-lg-6 col-xs-12">
              <div className="input-side">
                <h1 className='mt-4 text-center'>{product.name}</h1>
                <h2 className='fw-bold mt-3'>${product.price}</h2>
                <p className='mt-4'>{product.description}</p>
                <h5>QTY: {product.stockqty}</h5>

                <div class="btn-group  text-center" role="group" aria-label="...">
                  <button type="button" class="btn fw-bold" onClick={handleDecrement} style={{ border:'1px solid #e7e7e7' }}>-</button>
                  <button type="button" class="btn fw-bold" style={{ border:'1px solid #e7e7e7', backgroundColor:'white',width:'150px' }}>{quantity}</button>
                  <button type="button" class="btn fw-bold" onClick={handleIncrement} style={{ border:'1px solid #e7e7e7' }}>+</button>
                </div>
              
                <div className="AllButton d-flex justify-content-center " > 
                  <button className="btn btn-danger mt-4 w-50"  >Check Out</button>
                  <button className="btn btn-success ms-4 mt-4 w-50" >Add Card</button>
                  <button className="btn btn-primary ms-4 mt-4 w-50"  onClick={handleUpdate}>Edit</button>
                  <button className="btn btn-warning ms-4 mt-4 w-50" onClick={()=>handleDelete(id)}>Delete</button>
                </div>
              </div>
            </div>
          </div> 
          )
        }
         
      </div>
    </div>
  )
}

export default ViewsProduct