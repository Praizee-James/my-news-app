import { type FC, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import type { NewsType } from '../utils/Types'
import { getTopHeadlines } from '../utils/api'
import ExploreCardList from '../components/ExploreCardList'

interface CategoryDataType {
    [key: string]: NewsType[]
}
const Explore: FC = () => {
    const location = useLocation()
    const category = location.state?.category
    const [categoryData, setCategoryData] = useState<CategoryDataType>({})
    const fetchNews = async () => {
        if (!category) return
        const response = await getTopHeadlines(category)


        if (response.data) {
            const filteredNews = response.data.articles.filter(
                (res: NewsType) => res.urlToImage != null
            )
            console.log(filteredNews)
            setCategoryData(prev => ({
    ...prev,
    [category]: filteredNews
}))

        }
    }
    useEffect(() => {
        fetchNews()

    }, [])


    useEffect(() => {
        console.log(categoryData)

    }, [categoryData])
    return (
        <Box className='text-blue-700'>

            {
                categoryData[category]?.length > 0 &&
                <ExploreCardList list={categoryData[category]} />
            }
        </Box>
    )
}

export default Explore
