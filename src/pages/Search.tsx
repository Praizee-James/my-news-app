import { useEffect, useState, type FC } from "react"
import { Typography, Container, Box, Button } from "@mui/material"
import { useLocation } from "react-router-dom"
import { getByQuery } from "../utils/api"
import type { NewsType } from "../utils/Types"
import ExploreCardList from '../components/ExploreCardList'
import NewsCardSkeleton from "../components/Skeletons/NewsCardSkeleton"

const Search: FC = () => {
    const [searchedData, setSearchedData] = useState<NewsType[]>([])
    const [pageNo, setPageNo] = useState<number>(1)
    // Loading state
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const location = useLocation()
    const { title, query } = location.state
    const fetchSearch = async () => {
        setError(null)
        setLoading(true)
        const response = await getByQuery(query, pageNo
        )
        console.log(response)
        if (response.data) {
            const filteredNews = response.data.articles.filter(
                (res: NewsType) => res.urlToImage != null
            )
            setSearchedData(prev => [...prev, ...filteredNews])
            setPageNo(prev => prev + 1)
            setLoading(false)
        }
        if (response.error) {
            setError(response.error.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        setSearchedData([])
        fetchSearch()

    }, [query])
    return (
        <Container maxWidth={false} className='text-blue-700 w-[90%] mt-5 mb-10'>
            <Typography variant="h4" sx={{ fontSize: { md: '2.20rem', xs: '1.5rem' }, fontFamily: 'serif', cursor: 'pointer', mb: 1 }}>
                {title}
            </Typography>
            {/* Error and load state added */}
            {
                error && <Typography color='error' mb={3}>
                    {error}
                </Typography>
            }

            {
                loading ?
                    <Box className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-3 '>
                        {[...Array(20)].map((_, ind) => (
                            <NewsCardSkeleton key={ind} />
                        ))}
                    </Box>
                    :
                    <>

                        {searchedData.length > 0 ?
                            <ExploreCardList loading={loading} list={searchedData} />
                            :
                             <Box className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-3 '>
                        {[...Array(20)].map((_, ind) => (
                            <NewsCardSkeleton key={ind} />
                        ))}
                    </Box>
                        }

                        <Box display='flex' justifyContent='center' marginTop={4}>

                            <Button
                                variant='contained'
                                disableElevation
                                className='bg-blue-800'
                                onClick={() => fetchSearch()}>
                                Load more
                            </Button>


                        </Box>
                    </>
            }

        </Container>
    )
}

export default Search
