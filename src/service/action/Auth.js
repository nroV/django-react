
export const logout = async  (url,token) =>{
  const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}` // Example of an Authorization header
       // Add any other headers as needed
      }

    };
  const res = await fetch(`${url}`,requestOptions)

 return res



}
  
export const Loginuser = async  (url,payload) =>{
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
         // Add any other headers as needed
        },
        body: JSON.stringify(payload)
      };
    const res = await fetch(`${url}`,requestOptions)
 
   return res


  
}
export const registeruser = async  (url,payload) =>{
  const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
       // Add any other headers as needed
      },
      body: JSON.stringify(payload)
    };
  const res = await fetch(`${url}`,requestOptions)

 return res



}