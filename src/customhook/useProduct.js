import React, { useEffect, useState } from 'react'
import { fetchproduct } from '../service/action/Product'
import { Mainurl ,SortUrl} from '../service/constants/ApiUrl'



export const useProduct = (search,sortby)=>{
    if(!search) {
      search =''
    }


const [products,setProduct] = useState([])
// const len = products.length
let url 
const [isloading,setLoading]= useState(true)
const [iserror,setError]= useState(false)
    useEffect(()=>{
        async function fetchingProduct() {
          setLoading(true)
          url = Mainurl +search
          if(sortby) {
            url = SortUrl+sortby
          }
      
          console.log(url)
          try {
            const res = await fetchproduct(`${url}`);
            if (!res.ok) {
              throw new Error(`There has been server error`);
            }
            const body = await res.json();
            console.log('Response Body:', body); // Log the response body to check its structure
            setProduct(body);
          } catch (error) {
            console.error('Error fetching data:', error);
            setError(true)
            // Handle error or set a default value for product
          } finally {
         
            setLoading(false)
          }
        }
        
          
        fetchingProduct()

        return () => {
        console.log("Clean up Product")
      }
 
        },[search,sortby])
        

return  {products,isloading,iserror }
}

