import type { NewsApiResponse } from "./Types";
import { BaseURL } from "./constants";
import { getRequests } from "./request";
import type { ApiResponse } from "./request";

const apiKey = import.meta.env.VITE_API_KEY;

export const getTopHeadlines = async (
  category?: string
): Promise<ApiResponse<NewsApiResponse>> => {
  const url = `${BaseURL}/top-headlines?country=us&apiKey=${apiKey}${
    category ? `&category=${category}` : ""
  }`;

  return await getRequests<NewsApiResponse>(url);
};
