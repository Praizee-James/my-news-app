import { useEffect, useState, type FC } from "react"
import { Box } from "@mui/material";
import HeaderSection from "./HeaderSection";
import CarouselCard from "./CarouselCard";
import CarouselList from "./CarouselList";
import axios from "axios";
import type { NewsType } from "../utils/Types";
import { getTopHeadlines } from "../utils/api";


const Carousel: FC = () => {
    const [active, setActive] = useState<number>(0)
    const [topHeadlines, setTopHeadlines] = useState<NewsType[]>([])
    const fetchTopHeadlines = async () => {
        const response = await getTopHeadlines()
console.log(response)
if (response.data){
    const filterHeadlines = response?.data?.articles.filter(
        (res:NewsType)=> res.urlToImage !=null)
        setTopHeadlines(filterHeadlines)
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
            <CarouselCard
                toggleActive={toggleActive}
                topHeadline={topHeadlines[active]} />
            {/* Carousel list */}
            <CarouselList
                active={active}
                topHeadLines={topHeadlines} />
        </Box>
    )
}

export default Carousel
