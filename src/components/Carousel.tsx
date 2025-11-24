import  { type FC } from "react"
import { Box, Typography, Button, Card, CardContent } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
const Carousel:FC = () => {
  return (
    <Box>
        {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Typography sx={{ fontSize: '2.20rem', fontFamily: 'serif', cursor: 'pointer', color: 'blue' }}>
                    Top Healines
                </Typography>
                <Button sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'blue', '&:hover': { textDecoration: 'underline', textUnderlineOffset: '2px' } }}>
                    See All
                    <ArrowForwardIcon sx={{ fontSize: '1.25rem' }} />
                </Button>
            </Box>
            {/* carousel */}
            <Card className='grid grid-cols-2 border-2 shadow-none'>
                <Box className=' relative h-[360px]'>
                    <Box className='bg-red-300 h-full'></Box>
                    <Box className='_carouselGradient' sx={{ position: 'absolute', bottom: 0, height: '70px', width: '100%' }} />
                    <Typography sx={{ fontFamily: 'serif' }} className='absolute bottom-1 text-white text-[22px] leading-8 line-clamp-3 px-6  '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                </Box>
                {/* Card content */}
                <CardContent className='relative'>
                    <Typography className='text-xl font-serif line-clamp-4'>
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <Typography className='text-sm font-serif line-clamp-4'>
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </Typography>
                    <Box className='absolute bottom-2'>
                        <Typography className='text-xl font-serif line-clamp-4'>
                            Source:CBC News
                        </Typography>
                        <Typography className='text-xl font-serif line-clamp-4'>
                            date: 11/11/2025
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            {/* Carousel list */}
            <Box className = 'grid grid-cols-5 gap-3 mt-8'>
                {
                    [...Array(5)].map((item, ind) => (
                <Grid key={ind}>
                    <Card className='relative '>
                        <Box className='bg-red-300 w-full aspect-[16/10]'></Box>
                        <Box className='_carouselGradient' sx={{ position: 'absolute', bottom: 0, height: '70px', width: '100%' }} />
                        <Typography sx={{ fontFamily: 'serif' }} className='absolute bottom-1 text-white text-[17px] line-clamp-3 px-6  '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    </Card>
                </Grid>
                ))
}
            </Box>
    </Box>
  )
}

export default Carousel
