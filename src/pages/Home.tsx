import Carousel from '../components/Carousel'
import { Box } from '@mui/material'
import { type FC } from 'react'
import HomeCardList from '../components/HomeCardList'


const Home: FC = () => {
    return (
        <Box sx={{ width: '90%', mx: 'auto' }}>
            <Carousel />
           <HomeCardList/>
        </Box>
    )
}

export default Home
