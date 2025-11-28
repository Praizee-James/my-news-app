import { useEffect, useState, type FC } from 'react'
import { Box } from '@mui/material'
import NewsCard from './NewsCard'

import HeaderSection from './HeaderSection'
import { getTopHeadlines } from '../utils/api'
import type { NewsType } from '../utils/Types'

interface HomeCardListProps {
    category: string
}

const HomeCardList: FC<HomeCardListProps> = ({ category }) => {

    const [catNews, setCatNews] = useState<NewsType[]>([])
    const fetchCategoryNews = async () => {
        const response = await getTopHeadlines(category)
        if(response.data){
             const filterCatNews = response?.data?.articles.filter(
                (res: NewsType) => res.urlToImage != null)
            setCatNews(filterCatNews )
        }
    }
    
    useEffect(() => {
        fetchCategoryNews()
    }, [])

    
    return (
        <Box>
            {/* NewsCardList */}
            <HeaderSection title={category} />
            <NewsCard news ={catNews} />
        </Box>
    )
}

export default HomeCardList
