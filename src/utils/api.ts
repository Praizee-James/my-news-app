import type { NewsApiResponse } from "./Types";
import { BaseURL } from "./constants";
import { getRequests } from "./request";
import type { ApiResponse } from "./request";

const apiKey = import.meta.env.VITE_API_KEY;

export const getTopHeadlines = async (
  category?: string,pageNo?:number
): Promise<ApiResponse<NewsApiResponse>> => {
  const url = `${BaseURL}/top-headlines?country=us&apiKey=${apiKey}${
    category ? `&category=${category}` : ""
  }${pageNo?`&page=${pageNo}` :''}`;

  return await getRequests<NewsApiResponse>(url);
};

export const getByQuery =async(query:string,pageNo?:number):Promise<ApiResponse<NewsApiResponse>>=>{
  const url = `${BaseURL}/everything?apiKey=${apiKey}${query ? `&q=${query}` : ""}
  ${pageNo?`&page=${pageNo}` :''}&pageSize=20`;

  return await getRequests<NewsApiResponse>(url);
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=7ee071e6abf1451293a273deebbac01b
}