import { Box,Typography, Card, CardContent, CardMedia  } from '@mui/material'
import {type FC} from 'react'
import type { NewsType } from '../utils/Types'

interface CarouselcardType{
    topHeadline : NewsType
}
const CarouselCard:FC <CarouselcardType> = ({topHeadline}) => {
    if (!topHeadline) return null;

  return (
    <Card className='grid grid-cols-2 border-2 shadow-none'>
                <Box className=' relative h-[360px]'>
                    
                   < CardMedia
                   component='img' className='h-full' image = {topHeadline?.urlToImage}
                   />
                    <Box className='_carouselGradient' sx={{ position: 'absolute', bottom: 0, height: '70px', width: '100%' }} />
                    <Typography sx={{ fontFamily: 'serif' }} className='absolute bottom-1 text-white text-[22px] leading-8 line-clamp-3 px-6  '>
                       {topHeadline?.title}
                       
                    </Typography>
                </Box>
                {/* Card content */}
                <CardContent className='relative'>
                    <Typography gutterBottom className='text-xl font-serif line-clamp-4'>
                        {topHeadline?.description}
                    </Typography>
                    <Typography className='text-sm font-serif line-clamp-4'>
                        {topHeadline?.content}
                    </Typography>
                    <Box className='absolute bottom-2'>
                        <Typography className='text-xl font-serif line-clamp-4'>
                            Source:{topHeadline?.source.name}
                        </Typography>
                        <Typography className='text-xl font-serif line-clamp-4'>
                            Date: {new Date(topHeadline?.publishedAt).toLocaleDateString()}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
  )
}

export default CarouselCard
