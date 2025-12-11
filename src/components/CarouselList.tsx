import { type FC } from 'react'
import { Box, Typography, Card, CardMedia, Link } from '@mui/material'
import Grid from '@mui/material/Grid';
import type { NewsType } from '../utils/Types';
import { Link as RouterLink } from 'react-router-dom'
interface CarouselListProps {
    topHeadLines: NewsType[]
    active: number
}
const CarouselList: FC<CarouselListProps> = ({ topHeadLines, active }) => {

    const getNextFive = (active: number, topHeadline: NewsType[]) => {
        const nextFive = []
        for (let i = 0; i < 5; i++) {
            const index = (active + i + 1) % topHeadline.length
            nextFive.push(index)
        }
        return nextFive
    }
    const nextFiveHeadlines = getNextFive(active, topHeadLines)
    return (
        <Box className='grid grid-cols-5 gap-3 mt-8'>
            {
                nextFiveHeadlines?.map((item, ind) => (
                    <Grid key={ind}>
                        <Link component={RouterLink}
                            to={topHeadLines[item]?.url}
                            underline="none"
                            sx={{ textDecoration: "none" }}>
                            
                        
                            <Card className='relative '>
                                <CardMedia
                                    component='img'
                                    className='w-full aspect-[16/10]'
                                    image={topHeadLines[item]?.urlToImage}
                                />
                                <Box className='_carouselGradient' sx={{ position: 'absolute', bottom: 0, height: '70px', width: '100%' }} />
                                <Typography sx={{ fontFamily: 'serif' }} className='absolute bottom-1 text-white text-[17px] line-clamp-3 px-6  '>
                                    {topHeadLines[item]?.title}
                                </Typography>
                            </Card>
                            </Link>
                    </Grid>
               
    ))
}
            </Box >
  )
}

export default CarouselList
