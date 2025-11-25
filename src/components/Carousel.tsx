import { useEffect, useState, type FC } from "react"
import { Box } from "@mui/material";
import HeaderSection from "./HeaderSection";
import CarouselCard from "./CarouselCard";
import CarouselList from "./CarouselList";
import axios from "axios";
import type { NewsType } from "../utils/Types";


const Carousel: FC = () => {
    const [topHeadlines, setTopHeadlines] = useState<NewsType []> ([])
    const fetchTopHeadlines = async() =>{
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7ee071e6abf1451293a273deebbac01b')
        console.log(response.data.articles)
        const filterHeadlines = response.data.articles.filter((
            res:NewsType
        ) => res.urlToImage != null)
        setTopHeadlines(response.data.articles)
    } catch (error) {
        console.log(error)
    }

}
useEffect(() => {
    fetchTopHeadlines()
}, [])

    return (
        <Box>
            {/* Header */}
            <HeaderSection title="Top Headlines" />
            <CarouselCard topHeadline  ={topHeadlines[0]} />
            {/* Carousel list */}
           <CarouselList topHeadLines  ={topHeadlines} />
        </Box>
    )
}

export default Carousel
