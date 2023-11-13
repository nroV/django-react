
// const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       // Add any other headers as needed
//       'Authorization': 'Bearer YOUR_TOKEN_HERE' // Example of an Authorization header
//     },
//     body: JSON.stringify(postData)
//   };


export const fetchproduct = async  (url) =>{

    const res = await fetch(`${url}`)
 
   return res


  
}