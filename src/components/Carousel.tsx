import { useEffect, type FC } from "react"
import { Box } from "@mui/material";
import HeaderSection from "./HeaderSection";
import CarouselCard from "./CarouselCard";
import CarouselList from "./CarouselList";
import axios from "axios";


const Carousel: FC = () => {
    const fetchTopHeadlines = async() =>{
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7ee071e6abf1451293a273deebbac01b')
        console.log(response.data.articles)
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
            <CarouselCard />
            {/* Carousel list */}
           <CarouselList/>
        </Box>
    )
}

export default Carousel
