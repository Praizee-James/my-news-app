import { type FC } from 'react'
import { Box } from '@mui/material'
import NewsCard from './NewsCard'
import { categories } from '../utils/constants'
import HeaderSection from './HeaderSection'
const HomeCardList: FC = () => {
    return (
        <Box>
            {/* NewsCardList */}
            <Box className='mt-4'>
                <>
                      {categories.map((item, ind) =>
                                    <>
                
                                        <HeaderSection title={item} />
                                         <NewsCard/>
                                    </>
                                )}
                    </>
            </Box>
        </Box>
    )
}

export default HomeCardList
