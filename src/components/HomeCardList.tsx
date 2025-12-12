import { useEffect, useState, type FC } from 'react'
import { Box, Typography } from '@mui/material'
import NewsCard from './NewsCard'

import HeaderSection from './HeaderSection'
import { getTopHeadlines } from '../utils/api'
import type { NewsType } from '../utils/Types'
import NewsCardSkeleton from './Skeletons/NewsCardSkeleton'

interface HomeCardListProps {
    category: string
}

const HomeCardList: FC<HomeCardListProps> = ({ category }) => {

    const [catNews, setCatNews] = useState<NewsType[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const fetchCategoryNews = async () => {
        setLoading(true)
        setError(null)
        const response = await getTopHeadlines(category)
        if (response.data) {
            const filterCatNews = response?.data?.articles.filter(
                (res: NewsType) => res.urlToImage != null)
            setCatNews(filterCatNews)
            setLoading(false)

        }
        if (response.error) {
            setError(response.error.message || "Failed to Fetch")
        }
    }

    useEffect(() => {
        fetchCategoryNews()
    }, [])


    return (
        <>
            <HeaderSection title={category} />
            {
                error ? <Typography color='error' className=''>{error}</Typography>
                    :
                    <>
                        {loading 
                        ?
                            <Box className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 '>
                                {[...Array(5)].map((_, ind) => (
                                    <NewsCardSkeleton key={ind} />
                                ))}

                            </Box>
                            :
                            <Box>
                                {/* NewsCardList */}
                                <Box className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 '>
                                    {
                                        catNews.slice(0, 5).map((item, ind) =>
                                            <NewsCard key={ind} item={item} />
                                        )
                                    }

                                </Box>
                            </Box>

                        }
                    </>
            }



        </>
    )
}

export default HomeCardList
