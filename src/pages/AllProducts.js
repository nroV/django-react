// import React from 'react'
// import { useState,useEffect } from 'react'
// import { GET_ALLPRODUCTS } from '../service/productService'
// import ProductCard from '../component/ProductCard'
// import { RotatingLines } from 'react-loader-spinner'

// const AllProducts = () => {
//     const [products,setProducts] = useState([])
//     const [loading,setLoading] = useState(true)
//     const [productsearch,setProductSearch] = useState([])

//     useEffect(()=>{
//         GET_ALLPRODUCTS()
//         .then((response)=>{
//             setProducts(response)
//             setProductSearch(response)
//             setLoading(false)
//         })
//         .catch((err)=>console.log("error " ,err))
//     },[])

//     const handleSearch = (e) =>{
//         setProducts(productsearch.filter((product)=>product.title.toLowerCase().startsWith(e.target.value.toLowerCase())))
//         // console.log("search",)
//     }


//   return (
//     <div className="container" >
//         {
//             loading ? (
//                     <div className="loading d-flex justify-content-center align-items-center">
//                         <RotatingLines
//                             strokeColor="#4fa94d"
//                             strokeWidth="5"
//                             animationDuration="0.75"
//                             color="#4fa94d"
//                             width="96"
//                             visible={true}
//                             />
//                     </div>
//                 )
//             : (
//                 // <h1>All Products</h1>
//                 <div className="row">
//                     <div className="container d-sm-flex justify-content-between mt-4">
//                         <h2>All Products: <span className='text-warning'>{products.length}</span> </h2>
//                         <input type="text" className='form form-control w-50 ' style={{ marginRight:20 }} placeholder='search' onChange={(e)=>handleSearch(e)} />
//                     </div>
//                     {
//                         products.map((product)=>
//                             <div className="col-lg-4 col-md-6 d-flex justify-content-center">
//                                 <ProductCard  product={product} key={product.id} />
//                             </div>
//                         )
//                     }
//                 </div>
//             )
//         }
        
//     </div>
//   )
// }

// export default AllProducts