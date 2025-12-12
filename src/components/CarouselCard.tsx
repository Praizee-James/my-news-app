import { Box,Typography, Card, CardContent, CardMedia,Link  } from '@mui/material'
import {type FC} from 'react'
import type { NewsType } from '../utils/Types'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Link as RouterLink} from 'react-router-dom'
interface CarouselcardType{
    topHeadline : NewsType
    toggleActive:(direction:'next'|'prev') => void;
}
const CarouselCard:FC <CarouselcardType> = ({topHeadline,toggleActive}) => {
    if (!topHeadline) return null;

  return (
    <Box className ='relative'>
    <Link
    component={RouterLink}
            to={topHeadline.url}
            underline="none"
            sx={{ textDecoration: "none" }}
    >
    <Card className='relative grid lg:grid-cols-2 md:grid-cols-3 border-2 shadow-none'>
                <Box className=' relative md:h-[360px] h-[280px] lg:col-span-1 md:col-span-2'>
                    
                   < CardMedia
                   component='img' className='h-full' image = {topHeadline?.urlToImage}
                   />
                    <Box className='_carouselGradient' sx={{ position: 'absolute', bottom: 0, height: '70px', width: '100%' }} />
                    <Typography sx={{ fontFamily: 'serif' }} className='absolute bottom-1 text-white md:text-[22px] sm:text-xl text-lg leading-8 line-clamp-3 px-6  '>
                       {topHeadline?.title}
                       
                    </Typography>
                </Box>
                {/* Card content */}
                <CardContent className='relative'>
                    <Typography gutterBottom className='sm:text-xl text-lg font-serif line-clamp-4'>
                        {topHeadline?.description}
                    </Typography>
                    <Typography className='sm:text-xl text-lg font-serif line-clamp-4'>
                        {topHeadline?.content}
                    </Typography>
                    <Box className='md:absolute bottom-2'>
                        <Typography className='sm:text-xl text-lg font-serif line-clamp-4'>
                            Source:{topHeadline?.source.name}
                        </Typography>
                        <Typography className='sm:text-xl text-lg font-serif line-clamp-4'>
                            Date: {new Date(topHeadline?.publishedAt).toLocaleDateString()}
                        </Typography>
                    </Box>
                </CardContent>
                
            </Card>
            </Link>
            <KeyboardArrowLeftIcon onClick ={() => toggleActive('prev')} className='absolute top-0 top-1/2 left-0 bg-neutral-800 text-white text-4xl rounded-full' />
                <KeyboardArrowRightIcon onClick ={() => toggleActive('next')} className='absolute top-0 top-1/2 right-0 bg-neutral-800 text-white text-4xl rounded-full' />
                </Box>
  )
}

export default CarouselCard
