import axios from 'axios'

interface RequestError extends Error{
    status?:number;
    details?: any
}
export interface ApiResponse<T>{
data?:T;
error?: RequestError | undefined
}
export const getRequests = async<T> ():Promise<ApiResponse<T>> => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7ee071e6abf1451293a273deebbac01b'
    try {
        
       const response = await axios.get<T>(url) 
       return{data:response.data}
    } catch (error:any) {
        const status = error.response?.status
        const details = error.response?.data
return{
    error:{
        message:`Error Fetching ${url}`,
        status,
        details,
        name:'RequestError'
    }
}
    }
}