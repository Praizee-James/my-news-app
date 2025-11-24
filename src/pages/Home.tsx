import Carousel from '../components/Carousel'
import { Box } from '@mui/material'
import {type FC } from 'react'


const Home: FC = () => {
    return (
        <Box sx={{ width: '90%', mx: 'auto' }}>
           <Carousel/>
            

        </Box>
    )
}

export default Home
