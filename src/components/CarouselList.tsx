import { type FC } from 'react'
import { Box, Typography, Card,CardMedia } from '@mui/material'
import Grid from '@mui/material/Grid';
import type { NewsType } from '../utils/Types';
interface CarouselListProps{
    topHeadLines: NewsType[]
}
const CarouselList:FC<CarouselListProps> = ({topHeadLines}) => {
  return (
    <Box className = 'grid grid-cols-5 gap-3 mt-8'>
                {
                    topHeadLines?.slice(0,5).map((item, ind) => (
                <Grid key={ind}>
                    <Card className='relative '>
                        <CardMedia
                        component='img'
                        className='w-full aspect-[16/10]'
                        image = {item?.urlToImage}
                        />
                        <Box className='_carouselGradient' sx={{ position: 'absolute', bottom: 0, height: '70px', width: '100%' }} />
                        <Typography sx={{ fontFamily: 'serif' }} className='absolute bottom-1 text-white text-[17px] line-clamp-3 px-6  '>
                    {item.title}
                    </Typography>
                    </Card>
                </Grid>
                ))
}
            </Box>
  )
}

export default CarouselList
