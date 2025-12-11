import { type FC, useEffect, useState } from 'react'
import { Container, Typography, Button, Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import type { NewsType } from '../utils/Types'
import { getTopHeadlines } from '../utils/api'
import ExploreCardList from '../components/ExploreCardList'

interface CategoryDataType {
    [key: string]: { articles: NewsType[], pageNo: number }
}
const Explore: FC = () => {
    const location = useLocation()
    const category = location.state?.category
    const [categoryData, setCategoryData] = useState<CategoryDataType>({})
    const [loadMore, setLoadMore] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const fetchNews = async () => {
        setError(null)
        setLoading(true)
        const currentCategoryData = categoryData[category] || { articles: [], pageNo: 1 }
        const pageNo = currentCategoryData.pageNo
        if (!category) return
        const response = await getTopHeadlines(category, pageNo)


        if (response.data) {
            const filteredNews = response.data.articles.filter(
                (res: NewsType) => res.urlToImage != null
            )
            console.log(filteredNews)
            setCategoryData(prev => ({
                ...prev,
                [category]: {
                    articles: [...prev[category]?.articles || [], ...filteredNews],
                    pageNo: pageNo + 1
                }
            }))
            setLoadMore(currentCategoryData.articles.length + filteredNews.length < response.data.totalResults)
            setLoading(false)
        }
        if (response.error) {
            setError(response.error.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchNews()

    }, [category])


    useEffect(() => {
        console.log(categoryData)

    }, [categoryData])
    return (
        <Container maxWidth={false} className='text-blue-700 w-[90%] mt-5 mb-10'>
            <Typography variant='h4' sx={{ fontFamily: 'serif', cursor: 'pointer', mb: 1 }}>
                {category}
            </Typography>
            {
                error && <Typography color='error' mb={3}>
                    { error }
                </Typography>
            }
            {
                loading ?  <Typography mb={3}>
                    { loading }
                </Typography> :
                <>{
                categoryData[category]?.articles.length > 0 &&
                <ExploreCardList list={categoryData[category]?.articles} />
            }
            <Box display='flex' justifyContent='center' marginTop={4}>
                {
                    loadMore &&
                    <Button variant='contained' disableElevation className='bg-blue-800' onClick={() => fetchNews()}>
                        Load more
                    </Button>
                }

            </Box>
            </>
            }
            

        </Container >
    )
}

export default Explore
