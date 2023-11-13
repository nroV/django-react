
import React, { useEffect } from 'react'
import { useState,} from 'react'
import { useParams } from 'react-router-dom'
import { GET_ONEPRODUCT } from '../service/productService'

const ViewsProduct = () => {
    const [product,setProduct] = useState({})
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const [images,setImages] =useState([])
    const {id} = useParams()
    const [selectedIndex,setSelectedIndex] = useState(0)
    const [quantity, setQuantity] =useState(1);

    useEffect(()=>{
        GET_ONEPRODUCT(id)
        .then(response=>{
            setProduct(response)
            setTitle(response.title)
            setPrice(response.price)
            setDescription(response.description)
            setImages(response.images)
            
            console.log("Get one product:",response)
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
      setQuantity(prevCount=>prevCount+1)
    }
 

  return (
    <div className="container">
      <div className="wrapper m-3">
        <div className="row  bg-light rounded-4  p-4 " style={{ marginTop:100 }}>
          <div className="col-lg-6 col-xs-12">
            <div className="image-side d-flex align-items-center flex-column">
              <img src={images[selectedIndex]} alt="imageurl" className='object-fit-contain img-fluid  rounded-3' width='350px' />
              <div className="ImgCard">
                {
                  images.map((data,i)=>
                    <div className="image">
                        <img src={product.images[i]} onClick={()=>handleClick(i)} alt="" />
                    </div>
                  )
                }
              </div>
            </div>
          </div>



          <div className="col-lg-6 col-xs-12">
            <div className="input-side">
              <h1 className='mt-4 text-center'>{title}</h1>
              <h2 className='fw-bold mt-3'>${price}</h2>
              <p className='mt-4'>{description}</p>

              <div class="btn-group  text-center" role="group" aria-label="...">
                <button type="button" class="btn fw-bold" onClick={handleDecrement} style={{ border:'1px solid #e7e7e7' }}>-</button>
                <button type="button" class="btn fw-bold" style={{ border:'1px solid #e7e7e7', backgroundColor:'white',width:'150px' }}>{quantity}</button>
                <button type="button" class="btn fw-bold" onClick={handleIncrement} style={{ border:'1px solid #e7e7e7' }}>+</button>
              </div>


              <h5 className='mt-3'>Choose Size</h5>
              <div className="AllButton  " > 
                <button className="btn btn-secondary m-2 rounded-pill">X-Small</button>
                <button className="btn btn-secondary m-2 rounded-pill" >Small</button>
                <button className="btn btn-secondary m-2 rounded-pill" >Medium</button>
                <button className="btn btn-secondary m-2 rounded-pill">Large</button>
                <button className="btn btn-secondary m-2 rounded-pill">X-Large</button>
              </div>
            

              <div className="AllButton d-flex justify-content-center " > 
                <button className="btn btn-danger mt-4 w-50"  >Check Out</button>
                <button className="btn btn-success ms-4 mt-4 w-50" >Add Card</button>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default ViewsProduct