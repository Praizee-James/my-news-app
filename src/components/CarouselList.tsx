import { type FC } from 'react'
import { Box, Typography, Card } from '@mui/material'
import Grid from '@mui/material/Grid';
const CarouselList:FC = () => {
  return (
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
  )
}

export default CarouselList
