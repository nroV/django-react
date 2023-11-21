import React, { useEffect, useState } from 'react'
import { fetccate } from '../service/action/Category'
import { Mainurl ,SortUrl,CategoryUrl} from '../service/constants/ApiUrl'



export const useCategory = ()=>{


const [category,setCategory] = useState([])
// const len = products.length
let url 
const [isloading,setLoading]= useState(true)
const [iserror,setError]= useState(false)
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
        

return  {category,isloading,iserror }
}