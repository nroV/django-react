import api from "../utils/api"

export const GET_ALLPRODUCTS = async()=>{
    const response = await api.get('/products')
    return response.data
}

export const CREATE_ALLPRODUCTS =async(newProducts)=>{
    const response = await api.post('/products',newProducts)
    return response.data
}

export const GET_ONEPRODUCT = async(id)=>{
    const response = await api.get(`/products/${id}`)
    return response.data
}