import { type FC } from 'react'
import { Box } from '@mui/material'
import type { NewsType } from '../utils/Types'
import NewsCard from './NewsCard'
import NewsCardSkeleton from './Skeletons/NewsCardSkeleton'
interface ExploreCardListProps{
    list?:NewsType[],
    loading : boolean
}
const ExploreCardList : FC<ExploreCardListProps> = ({list,loading}) => {
  return (
   <Box>
{
    <Box className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-3 '>
        {
            list?.map((item,ind) => (
        
        <NewsCard key={ind} item={item} />
        
    ))
        }
        {
            loading && [...Array(10)].map((_,ind)=>(
                <NewsCardSkeleton key={ind}/>
            ))
        }
    
    </Box>
}
   </Box>
  )
}

export default ExploreCardList
