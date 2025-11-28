import axios from 'axios'

interface RequestError extends Error{
    status?:number;
    details?: any
}
export interface ApiResponse<T>{
data?:T;
error?: RequestError | undefined
}
export const getRequests = async<T> (url:string):Promise<ApiResponse<T>> => {
    
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