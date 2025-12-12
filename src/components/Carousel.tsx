import { useEffect, useState, type FC } from "react"
import { Box, Typography } from "@mui/material";
import HeaderSection from "./HeaderSection";
import CarouselCard from "./CarouselCard";
import CarouselList from "./CarouselList";

import type { NewsType } from "../utils/Types";
import { getTopHeadlines } from "../utils/api";
import CarouselCardSkeleton from "./Skeletons/CarouselCardSkeleton";
import CarouselListSkeleton from "./Skeletons/CarouselListSkeleton";


const Carousel: FC = () => {
    const [active, setActive] = useState<number>(0)
    const [topHeadlines, setTopHeadlines] = useState<NewsType[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

        const fetchTopHeadlines = async () => {
            setLoading(true)
            setError(null)
            const response = await getTopHeadlines()
            console.log(response)
            if (response.data) {
                const filterHeadlines = response?.data?.articles.filter(
                    (res: NewsType) => res.urlToImage != null)
                setTopHeadlines(filterHeadlines)
                setLoading(false)
            }
            if (response.error) {
                setError(response.error.message || "Failed to Fetch")
            }
        }
        const toggleActive = (direction: 'next' | 'prev') => {
            if (direction === 'next') {
                setActive((prev) => (prev + 1) % topHeadlines.length)
            } else if (direction === 'prev') {
                setActive((prev) => (prev - 1) % topHeadlines.length)
            }
        }
        useEffect(() => {
            fetchTopHeadlines()
        }, [])

        return (
            <Box>
                {/* Header */}
                <HeaderSection title="Top Headlines" />
                {
                    error ?
                     <Typography color='error' className=''>{error}</Typography>
                     :
                     <>
                     {loading ?
                     <>
                     <CarouselCardSkeleton/>
                   <CarouselListSkeleton/>
                     </>
                   
                    :
                    <Box>
                        <CarouselCard
                            toggleActive={toggleActive}
                            topHeadline={topHeadlines[active]} />

                          
                        {/* Carousel list */}
                        <CarouselList
                            active={active}
                            topHeadLines={topHeadlines} />
                    </Box>
                   
                }
 </>
                }

                
            </Box>
        )
    }

    export default Carousel
