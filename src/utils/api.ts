import type { NewsType } from "./Types";
import type {ApiResponse, getRequests} from './request'


 export const getTopHeadlines = async ():Promise<ApiResponse<NewsType>> => {
    return await getRequests<NewsType>()
}