import Carousel from '../components/Carousel'
import { Box } from '@mui/material'
import { type FC } from 'react'
import HomeCardList from '../components/HomeCardList'
import { categories } from '../utils/constants'

const Home: FC = () => {
    return (
        <Box sx={{ width: '90%', mx: 'auto' }}>
            <Carousel />
            <Box className='mt-4 mb-24'>
                <Box>
                    {categories.map((item: string, ind:number) =>
                        <HomeCardList key={ind} category={item} />
                    )}

                </Box>
            </Box>

        </Box>
    )
}

export default Home
