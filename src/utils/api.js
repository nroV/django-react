import axios from "axios";


const api = axios.create({
    baseURL:"http://vorn.ponlue.bio:5046/api/"
})

export default api;