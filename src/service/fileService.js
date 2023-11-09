import api from "../utils/api";

export const FILE_UPLOAD=async(data)=>{
    // var requestOptions = {
    //     method: 'POST',
    //     body: data,

    //   };
      
    //   fetch("https://api.escuelajs.co/api/v1/files/upload", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    console.log("data",data)
    const response = await api.post('/files/upload',data,{})
    return response.data
}