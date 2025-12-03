import { type FC } from 'react'
import { Box } from '@mui/material'
import type { NewsType } from '../utils/Types'
import NewsCard from './NewsCard'
interface ExploreCardListProps{
    list?:NewsType[]
}
const ExploreCardList : FC<ExploreCardListProps> = ({list}) => {
  return (
   <Box>
{
    <Box className='grid grid-cols-5  gap-3 '>
        {
            list?.map((item,ind) => (
        
        <NewsCard key={ind} item={item} />
        
    ))
        }
    
    </Box>
}
   </Box>
  )
}

export default ExploreCardList
