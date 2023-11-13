
import React, { useEffect } from 'react'
import { useState,} from 'react'
import { useParams } from 'react-router-dom'
import { GET_ONEPRODUCT } from '../service/productService'

const ViewsProduct = () => {
    const [product,setProduct] = useState({})
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [description,setDescription] = useState("")
    const {id} = useParams()


    useEffect(()=>{
        GET_ONEPRODUCT(id)
        .then(response=>{
            setProduct(response)
            setTitle(response.title)
            setPrice(response.price)
            setDescription(response.description)
            console.log("Get one product:",response)
        })
        .catch(err=>console.log("Error: ",err))
    },[])
 

  return (
    <div className="container ">
      <div className="wrapper m-3">
        <div className="row  bg-light rounded-4  p-4 " style={{ marginTop:100 }}>
          <div className="col-lg-6 col-xs-12">
            <div className="image-side d-flex align-items-center flex-column">
              <img src={product.images} alt="imageurl" className='object-fit-contain img-fluid ' width='350px' />
              <input type="file" className='form-control mt-3 w-50'/>
            </div>
          </div>
          <div className="col-lg-6 col-xs-12">
            <div className="input-side">
              <h1 className='mt-4 mb-3 text-center'>About Product</h1>
              <div className="d-flex ">
              <div>
                  <label htmlFor="">ID:</label>
                  <input className='form-control' type="number" placeholder='id' name='' id=''  value={id} />
                </div>
                <div className='ms-4'>
                  <label htmlFor="">Title:</label>
                  <input className='form-control' type="text" placeholder='title' name='' id=''  value={title} />
                </div>
                <div className='ms-4'>
                  <label htmlFor="">Price:</label>
                  <input className='form-control' type="text" placeholder='price' name='' id='' value={price}  />
                </div>
              </div>
              <label htmlFor="" className='mt-3'>Description:</label>
              <input type="text" className='form-control' placeholder='description'  value={description} />

              <div className="AllButton d-flex justify-content-center mt-5" >
                <button className="btn btn-warning mt-4" >Update</button>
                <button button className="btn btn-danger ms-4 mt-4">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewsProduct